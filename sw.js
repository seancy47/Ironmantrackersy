const CACHE = "ironman-v7";
const BASE = "/Ironmantrackersy";
const ASSETS = [
  BASE + "/",
  BASE + "/index.html",
  BASE + "/app.js",
  BASE + "/manifest.json",
  BASE + "/icon-192.png",
  BASE + "/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // CRITICAL: Let ALL cross-origin requests pass straight through
  // This covers Supabase, Anthropic API, Chart.js CDN etc.
  // Never intercept or cache these — just let them go to the network
  if (url.origin !== self.location.origin) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Only cache same-origin GET requests (our own HTML/JS/assets)
  if (e.request.method !== "GET") return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200) {
          caches.open(CACHE).then(cache => cache.put(e.request, response.clone()));
        }
        return response;
      }).catch(() => caches.match(BASE + "/index.html"));
    })
  );
});
