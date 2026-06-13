const CACHE = 'ironman-v1';

// Install — cache the app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['/', '/index.html']))
      .catch(() => {}) // fail silently if files not found yet
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// Notification scheduling
let scheduleTimer = null;

self.addEventListener('message', e => {
  if (e.data?.type === 'SCHEDULE') {
    const { time, skipRest, pin } = e.data;
    if (scheduleTimer) clearTimeout(scheduleTimer);
    scheduleNextNotification(time, skipRest, pin);
  }
});

function scheduleNextNotification(time, skipRest, pin) {
  const [h, m] = time.split(':').map(Number);
  const now = new Date();
  const next = new Date();
  next.setHours(h, m, 0, 0);
  if (next <= now) next.setDate(next.getDate() + 1);

  // Skip rest days (Wed = 3, Sun = 0)
  if (skipRest) {
    while (next.getDay() === 3 || next.getDay() === 0) {
      next.setDate(next.getDate() + 1);
    }
  }

  const delay = next - now;
  scheduleTimer = setTimeout(async () => {
    await fireNotification(pin);
    scheduleNextNotification(time, skipRest, pin);
  }, delay);
}

async function fireNotification(pin) {
  const clients = await self.clients.matchAll();
  // Post to any open clients to get today's session info
  if (clients.length > 0) {
    clients[0].postMessage({ type: 'GET_TODAY_SESSION' });
  }

  self.registration.showNotification('🏊🚴🏃 Ironman Tracker', {
    body: "Time to train — open the app to see today's session",
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'daily-reminder',
    renotify: true,
    data: { url: '/' }
  });
}

// Notification click — open the app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clients => {
      if (clients.length > 0) return clients[0].focus();
      return self.clients.openWindow('/');
    })
  );
});
