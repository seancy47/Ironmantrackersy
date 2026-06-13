
const PLAN = {
  principles: [
    { icon:"🏊", label:"Swim Gap", desc:"Biggest limiter — prioritise technique before volume. You're at 325m now, target 3.8km." },
    { icon:"🚴", label:"Loop Training", desc:"1 loop = 21.7km, ~250m gain. All rides prescribed in loops. Hilly training = race-day advantage." },
    { icon:"⚠️", label:"Injury First", desc:"Right ankle, left calf, Achilles — stop immediately at any sharp pain. Never run through it." },
    { icon:"😴", label:"Wed + Sun Rest", desc:"Wednesday buffers the hard Mon/Tue block. Sunday rest grows more critical from Phase 3 onwards." },
  ],
  weeks: [
    { label:"Week 1", type:"build", tag:"Ph.1 W1", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1/2 loop", detail:"Ride to the 10km turnaround (~150m gain) and return. ~21km easy spin. Aerobic base only.", effort:1, targetDistance:21 },
      { day:"Tue", type:"run", label:"Easy Run", detail:"5km continuous at 7:30-8:30/km. Stop immediately at any ankle or shin pain.", effort:1, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable buffer after Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - moderate", detail:"1/2 loop easy (21km). Legs fresher than Monday. Keep it aerobic.", effort:1, targetDistance:21 },
      { day:"Fri", type:"swim", label:"Swim - 300m", detail:"300m pool. Technique drills: catch-up, pull buoy, bilateral breathing. Comfort not speed.", effort:1, targetDistance:0.3 },
      { day:"Sat", type:"run", label:"Easy Run + Strength", detail:"4-5km easy at 7:30-8:30/km. Then 20 min: single-leg RDLs, calf raises, glute bridges, ankle alphabet.", effort:1, targetDistance:4.5 },
      { day:"Sun", type:"swim", label:"Swim (optional)", detail:"300-400m easy. Low-impact. Skip if fatigued.", effort:1, targetDistance:0.35 },
    ]},
    { label:"Week 2", type:"build", tag:"Ph.1 W2", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1/2 loop", detail:"Ride to the 10km turnaround (~150m gain) and return. ~21km easy spin. Aerobic base only.", effort:1, targetDistance:21 },
      { day:"Tue", type:"run", label:"Easy Run", detail:"5km continuous at 7:30-8:30/km. Stop immediately at any ankle or shin pain.", effort:1, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable buffer after Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - moderate", detail:"1/2 loop easy (21km). Legs fresher than Monday. Keep it aerobic.", effort:1, targetDistance:21 },
      { day:"Fri", type:"swim", label:"Swim - 350m", detail:"350m pool. Technique drills: catch-up, pull buoy, bilateral breathing. Comfort not speed.", effort:1, targetDistance:0.35 },
      { day:"Sat", type:"run", label:"Easy Run + Strength", detail:"4-5km easy at 7:30-8:30/km. Then 20 min: single-leg RDLs, calf raises, glute bridges, ankle alphabet.", effort:1, targetDistance:4.5 },
      { day:"Sun", type:"swim", label:"Swim (optional)", detail:"300-400m easy. Low-impact. Skip if fatigued.", effort:1, targetDistance:0.35 },
    ]},
    { label:"Week 3", type:"build", tag:"Ph.1 W3", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1/2 loop", detail:"Ride to the 10km turnaround (~150m gain) and return. ~21km easy spin. Aerobic base only.", effort:1, targetDistance:21 },
      { day:"Tue", type:"run", label:"Easy Run", detail:"5km continuous at 7:30-8:30/km. Stop immediately at any ankle or shin pain.", effort:1, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable buffer after Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - moderate", detail:"1/2 loop easy (21km). Legs fresher than Monday. Keep it aerobic.", effort:1, targetDistance:21 },
      { day:"Fri", type:"swim", label:"Swim - 400m", detail:"400m pool. Technique drills: catch-up, pull buoy, bilateral breathing. Comfort not speed.", effort:1, targetDistance:0.4 },
      { day:"Sat", type:"run", label:"Easy Run + Strength", detail:"4-5km easy at 7:30-8:30/km. Then 20 min: single-leg RDLs, calf raises, glute bridges, ankle alphabet.", effort:1, targetDistance:4.5 },
      { day:"Sun", type:"swim", label:"Swim (optional)", detail:"300-400m easy. Low-impact. Skip if fatigued.", effort:1, targetDistance:0.35 },
    ]},
    { label:"Week 4", type:"build", tag:"Ph.1 W4", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1/2 loop", detail:"Ride to the 10km turnaround (~150m gain) and return. ~21km easy spin. Aerobic base only.", effort:1, targetDistance:21 },
      { day:"Tue", type:"run", label:"Easy Run", detail:"5km continuous at 7:30-8:30/km. Stop immediately at any ankle or shin pain.", effort:1, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable buffer after Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - moderate", detail:"1/2 loop easy (21km). Legs fresher than Monday. Keep it aerobic.", effort:1, targetDistance:21 },
      { day:"Fri", type:"swim", label:"Swim - 450m", detail:"450m pool. Technique drills: catch-up, pull buoy, bilateral breathing. Comfort not speed.", effort:1, targetDistance:0.45 },
      { day:"Sat", type:"run", label:"Easy Run + Strength", detail:"4-5km easy at 7:30-8:30/km. Then 20 min: single-leg RDLs, calf raises, glute bridges, ankle alphabet.", effort:1, targetDistance:4.5 },
      { day:"Sun", type:"swim", label:"Swim (optional)", detail:"300-400m easy. Low-impact. Skip if fatigued.", effort:1, targetDistance:0.35 },
    ]},
    { label:"Week 5", type:"build", tag:"Ph.1 W5", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1 loop", detail:"1 full loop (21.7km, ~250m gain). Easy pace throughout. No chasing speed on descents.", effort:2, targetDistance:21.7 },
      { day:"Tue", type:"run", label:"Easy Run", detail:"5km easy at 7:30-8:30/km. Heavy legs from Monday - keep it genuinely easy.", effort:1, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - moderate", detail:"1/2 loop easy (21km). Notice legs recovering through the ride.", effort:1, targetDistance:21 },
      { day:"Fri", type:"swim", label:"Swim - 400m", detail:"400m pool. Building endurance: bilateral breathing, consistent stroke. Add 50m from last week.", effort:1, targetDistance:0.4 },
      { day:"Sat", type:"run", label:"Easy Run + Strength", detail:"5km easy. Then 20 min hip stability and ankle work: clamshells, heel drops, glute med.", effort:1, targetDistance:5 },
      { day:"Sun", type:"swim", label:"Swim (optional)", detail:"400-500m easy. Skip if Mon/Tue left residual tiredness.", effort:1, targetDistance:0.45 },
    ]},
    { label:"Week 6", type:"build", tag:"Ph.1 W6", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1 loop", detail:"1 full loop (21.7km, ~250m gain). Easy pace throughout. No chasing speed on descents.", effort:2, targetDistance:21.7 },
      { day:"Tue", type:"run", label:"Easy Run", detail:"5km easy at 7:30-8:30/km. Heavy legs from Monday - keep it genuinely easy.", effort:1, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - moderate", detail:"1/2 loop easy (21km). Notice legs recovering through the ride.", effort:1, targetDistance:21 },
      { day:"Fri", type:"swim", label:"Swim - 450m", detail:"450m pool. Building endurance: bilateral breathing, consistent stroke. Add 50m from last week.", effort:1, targetDistance:0.45 },
      { day:"Sat", type:"run", label:"Easy Run + Strength", detail:"5km easy. Then 20 min hip stability and ankle work: clamshells, heel drops, glute med.", effort:1, targetDistance:5 },
      { day:"Sun", type:"swim", label:"Swim (optional)", detail:"400-500m easy. Skip if Mon/Tue left residual tiredness.", effort:1, targetDistance:0.45 },
    ]},
    { label:"Week 7", type:"build", tag:"Ph.1 W7", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1 loop", detail:"1 full loop (21.7km, ~250m gain). Easy pace throughout. No chasing speed on descents.", effort:2, targetDistance:21.7 },
      { day:"Tue", type:"run", label:"Easy Run", detail:"5km easy at 7:30-8:30/km. Heavy legs from Monday - keep it genuinely easy.", effort:1, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - moderate", detail:"1/2 loop easy (21km). Notice legs recovering through the ride.", effort:1, targetDistance:21 },
      { day:"Fri", type:"swim", label:"Swim - 500m", detail:"500m pool. Building endurance: bilateral breathing, consistent stroke. Add 50m from last week.", effort:1, targetDistance:0.5 },
      { day:"Sat", type:"run", label:"Easy Run + Strength", detail:"5km easy. Then 20 min hip stability and ankle work: clamshells, heel drops, glute med.", effort:1, targetDistance:5 },
      { day:"Sun", type:"swim", label:"Swim (optional)", detail:"400-500m easy. Skip if Mon/Tue left residual tiredness.", effort:1, targetDistance:0.45 },
    ]},
    { label:"Week 8", type:"recovery", tag:"Ph.1 W8", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1 loop", detail:"1 full loop (21.7km, ~250m gain). Easy pace throughout. No chasing speed on descents.", effort:2, targetDistance:21.7 },
      { day:"Tue", type:"run", label:"Easy Run", detail:"5km easy at 7:30-8:30/km. Heavy legs from Monday - keep it genuinely easy.", effort:1, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - moderate", detail:"1/2 loop easy (21km). Notice legs recovering through the ride.", effort:1, targetDistance:21 },
      { day:"Fri", type:"swim", label:"Swim - 550m", detail:"550m pool. Building endurance: bilateral breathing, consistent stroke. Add 50m from last week.", effort:1, targetDistance:0.55 },
      { day:"Sat", type:"run", label:"Easy Run + Strength", detail:"5km easy. Then 20 min hip stability and ankle work: clamshells, heel drops, glute med.", effort:1, targetDistance:5 },
      { day:"Sun", type:"swim", label:"Swim (optional)", detail:"400-500m easy. Skip if Mon/Tue left residual tiredness.", effort:1, targetDistance:0.45 },
    ]},
    { label:"Week 9", type:"build", tag:"Ph.2 W1", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1.5 loops", detail:"~33km, ~375m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:33 },
      { day:"Tue", type:"run", label:"Long Run - 8km", detail:"8km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:8 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1 loop", detail:"~21.7km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:21.7 },
      { day:"Fri", type:"swim", label:"Swim - 600m", detail:"600m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:0.6 },
      { day:"Sat", type:"run", label:"Easy Run - 6km", detail:"6km easy followed by hip stability and core work.", effort:1, targetDistance:6 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 500m", detail:"500m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.5 },
    ]},
    { label:"Week 10", type:"build", tag:"Ph.2 W2", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1.5 loops", detail:"~33km, ~375m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:33 },
      { day:"Tue", type:"run", label:"Long Run - 9km", detail:"9km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:9 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1 loop", detail:"~21.7km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:21.7 },
      { day:"Fri", type:"swim", label:"Swim - 700m", detail:"700m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:0.7 },
      { day:"Sat", type:"run", label:"Easy Run - 6km", detail:"6km easy followed by hip stability and core work.", effort:1, targetDistance:6 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 550m", detail:"550m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.55 },
    ]},
    { label:"Week 11", type:"build", tag:"Ph.2 W3", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 2 loops", detail:"~43km, ~500m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:43 },
      { day:"Tue", type:"run", label:"Long Run - 10km", detail:"10km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:10 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1.5 loops", detail:"~33km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:33 },
      { day:"Fri", type:"swim", label:"Swim - 800m", detail:"800m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:0.8 },
      { day:"Sat", type:"run", label:"Easy Run - 7km", detail:"7km easy followed by hip stability and core work.", effort:1, targetDistance:7 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 600m", detail:"600m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.6 },
    ]},
    { label:"Week 12", type:"recovery", tag:"Ph.2 W4", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1.5 loops", detail:"~33km, ~375m gain. Easy aerobic - recovery week.", effort:1, targetDistance:33 },
      { day:"Tue", type:"run", label:"Long Run - 6km", detail:"6km easy. Deliberately tired legs from Monday. Keep it very easy - recovery week.", effort:1, targetDistance:6 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1 loop", detail:"~21.7km. Easy spin.", effort:1, targetDistance:21.7 },
      { day:"Fri", type:"swim", label:"Swim - 600m", detail:"600m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:0.6 },
      { day:"Sat", type:"run", label:"Easy Run - 5km", detail:"5km easy followed by hip stability and core work.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
    ]},
    { label:"Week 13", type:"build", tag:"Ph.2 W5", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 2 loops", detail:"~43km, ~500m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:43 },
      { day:"Tue", type:"run", label:"Long Run - 12km", detail:"12km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:12 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1.5 loops", detail:"~33km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:33 },
      { day:"Fri", type:"swim", label:"Swim - 900m", detail:"900m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:0.9 },
      { day:"Sat", type:"run", label:"Easy Run - 7km", detail:"7km easy followed by hip stability and core work.", effort:1, targetDistance:7 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 700m", detail:"700m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.7 },
    ]},
    { label:"Week 14", type:"build", tag:"Ph.2 W6", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 2 loops", detail:"~43km, ~500m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:43 },
      { day:"Tue", type:"run", label:"Long Run - 13km", detail:"13km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:13 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1.5 loops", detail:"~33km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:33 },
      { day:"Fri", type:"swim", label:"Swim - 1000m", detail:"1000m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:1.0 },
      { day:"Sat", type:"run", label:"Easy Run - 7km", detail:"7km easy followed by hip stability and core work.", effort:1, targetDistance:7 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 700m", detail:"700m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.7 },
    ]},
    { label:"Week 15", type:"build", tag:"Ph.2 W7", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 2.5 loops", detail:"~54km, ~625m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:54 },
      { day:"Tue", type:"run", label:"Long Run - 14km", detail:"14km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:14 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops", detail:"~43km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 1100m", detail:"1100m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:1.1 },
      { day:"Sat", type:"run", label:"Easy Run - 8km", detail:"8km easy followed by hip stability and core work.", effort:1, targetDistance:8 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 750m", detail:"750m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.75 },
    ]},
    { label:"Week 16", type:"recovery", tag:"Ph.2 W8", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1.5 loops", detail:"~33km, ~375m gain. Easy aerobic - recovery week.", effort:1, targetDistance:33 },
      { day:"Tue", type:"run", label:"Long Run - 8km", detail:"8km easy. Deliberately tired legs from Monday. Keep it very easy - recovery week.", effort:1, targetDistance:8 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1 loop", detail:"~21.7km. Easy spin.", effort:1, targetDistance:21.7 },
      { day:"Fri", type:"swim", label:"Swim - 700m", detail:"700m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:0.7 },
      { day:"Sat", type:"run", label:"Easy Run - 6km", detail:"6km easy followed by hip stability and core work.", effort:1, targetDistance:6 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
    ]},
    { label:"Week 17", type:"build", tag:"Ph.2 W9", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 2.5 loops", detail:"~54km, ~625m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:54 },
      { day:"Tue", type:"run", label:"Long Run - 16km", detail:"16km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:16 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops", detail:"~43km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 1200m", detail:"1200m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:1.2 },
      { day:"Sat", type:"run", label:"Easy Run - 8km", detail:"8km easy followed by hip stability and core work.", effort:1, targetDistance:8 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 800m", detail:"800m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.8 },
    ]},
    { label:"Week 18", type:"build", tag:"Ph.2 W10", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 2.5 loops", detail:"~54km, ~625m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:54 },
      { day:"Tue", type:"run", label:"Long Run - 16km", detail:"16km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:16 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops", detail:"~43km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 1200m", detail:"1200m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:1.2 },
      { day:"Sat", type:"run", label:"Easy Run - 8km", detail:"8km easy followed by hip stability and core work.", effort:1, targetDistance:8 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 800m", detail:"800m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.8 },
    ]},
    { label:"Week 19", type:"build", tag:"Ph.2 W11", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 2.5 loops", detail:"~54km, ~625m gain. Nutrition every 45 min on rides over 90 min. Fuel before the climb.", effort:2, targetDistance:54 },
      { day:"Tue", type:"run", label:"Long Run - 16km", detail:"16km easy. Deliberately tired legs from Monday. 10min run/1min walk if needed. HR under 150bpm.", effort:2, targetDistance:16 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops", detail:"~43km. On loops 2+, treat the climb as light tempo.", effort:2, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 1200m", detail:"1200m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:1.2 },
      { day:"Sat", type:"run", label:"Easy Run - 8km", detail:"8km easy followed by hip stability and core work.", effort:1, targetDistance:8 },
      { day:"Sun", type:"swim", label:"Swim (optional) - 800m", detail:"800m easy. Optional - skip if fatigued.", effort:1, targetDistance:0.8 },
    ]},
    { label:"Week 20", type:"recovery", tag:"Ph.2 W12", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 1.5 loops", detail:"~33km, ~375m gain. Easy aerobic - recovery week.", effort:1, targetDistance:33 },
      { day:"Tue", type:"run", label:"Long Run - 8km", detail:"8km easy. Deliberately tired legs from Monday. Keep it very easy - recovery week.", effort:1, targetDistance:8 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Wednesday buffers the Mon/Tue block.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1 loop", detail:"~21.7km. Easy spin.", effort:1, targetDistance:21.7 },
      { day:"Fri", type:"swim", label:"Swim - 700m", detail:"700m continuous. Endurance focus - bilateral breathing, consistent stroke rate.", effort:1, targetDistance:0.7 },
      { day:"Sat", type:"run", label:"Easy Run - 6km", detail:"6km easy followed by hip stability and core work.", effort:1, targetDistance:6 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
    ]},
    { label:"Week 21", type:"build", tag:"Ph.3 W1", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 4.5 loops", detail:"~100km, ~1150m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:100 },
      { day:"Tue", type:"run", label:"Long Run - 18km", detail:"18km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:18 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 1500m", detail:"1500m. Steady endurance pace.", effort:2, targetDistance:1.5 },
      { day:"Sat", type:"run", label:"Tempo Run - 8km", detail:"8km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:8 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 22", type:"build", tag:"Ph.3 W2", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 4.5 loops", detail:"~100km, ~1150m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:100 },
      { day:"Tue", type:"run", label:"Long Run - 19km", detail:"19km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:19 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 1700m", detail:"1700m. Steady endurance pace.", effort:2, targetDistance:1.7 },
      { day:"Sat", type:"run", label:"Tempo Run - 8km", detail:"8km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:8 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 23", type:"build", tag:"Ph.3 W3", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 5 loops", detail:"~108km, ~1250m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:108 },
      { day:"Tue", type:"run", label:"Long Run - 20km", detail:"20km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:20 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 1900m", detail:"1900m. Steady endurance pace.", effort:2, targetDistance:1.9 },
      { day:"Sat", type:"run", label:"Tempo Run - 9km", detail:"9km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:9 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 24", type:"recovery", tag:"Ph.3 W4", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 3 loops", detail:"~65km, ~750m gain. Easy recovery ride.", effort:1, targetDistance:65 },
      { day:"Tue", type:"run", label:"Long Run - 12km", detail:"12km. Easy recovery run, 7:30-8:30/km.", effort:1, targetDistance:12 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops easy", detail:"~43km easy spin. Recovery week - let legs flush out.", effort:1, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 1200m", detail:"1200m. Steady endurance pace.", effort:1, targetDistance:1.2 },
      { day:"Sat", type:"run", label:"Easy Run - 6km", detail:"6km easy. Recovery week - keep HR low.", effort:1, targetDistance:6 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 25", type:"build", tag:"Ph.3 W5", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 5 loops", detail:"~108km, ~1250m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:108 },
      { day:"Tue", type:"run", label:"Long Run - 20km", detail:"20km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:20 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 2000m", detail:"2000m. Try English Bay or Deep Cove for open water.", effort:2, targetDistance:2.0 },
      { day:"Sat", type:"run", label:"Tempo Run - 9km", detail:"9km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:9 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 26", type:"build", tag:"Ph.3 W6", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 5 loops", detail:"~108km, ~1250m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:108 },
      { day:"Tue", type:"run", label:"Long Run - 21km", detail:"21km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:21 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 2200m", detail:"2200m. Try English Bay or Deep Cove for open water.", effort:2, targetDistance:2.2 },
      { day:"Sat", type:"run", label:"Tempo Run - 9km", detail:"9km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:9 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 27", type:"build", tag:"Ph.3 W7", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 5.5 loops", detail:"~119km, ~1375m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:119 },
      { day:"Tue", type:"run", label:"Long Run - 22km", detail:"22km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:22 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 2300m", detail:"2300m. Try English Bay or Deep Cove for open water.", effort:2, targetDistance:2.3 },
      { day:"Sat", type:"run", label:"Tempo Run - 10km", detail:"10km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:10 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 28", type:"recovery", tag:"Ph.3 W8", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 3 loops", detail:"~65km, ~750m gain. Easy recovery ride.", effort:1, targetDistance:65 },
      { day:"Tue", type:"run", label:"Long Run - 12km", detail:"12km. Easy recovery run, 7:30-8:30/km.", effort:1, targetDistance:12 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops easy", detail:"~43km easy spin. Recovery week - let legs flush out.", effort:1, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 1500m", detail:"1500m. Steady endurance pace.", effort:1, targetDistance:1.5 },
      { day:"Sat", type:"run", label:"Easy Run - 6km", detail:"6km easy. Recovery week - keep HR low.", effort:1, targetDistance:6 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 29", type:"build", tag:"Ph.3 W9", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 5.5 loops", detail:"~119km, ~1375m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:119 },
      { day:"Tue", type:"run", label:"Long Run - 22km", detail:"22km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:22 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 2400m", detail:"2400m. Try English Bay or Deep Cove for open water.", effort:2, targetDistance:2.4 },
      { day:"Sat", type:"run", label:"Tempo Run - 10km", detail:"10km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:10 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 30", type:"build", tag:"Ph.3 W10", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 6 loops", detail:"~130km, ~1500m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:130 },
      { day:"Tue", type:"run", label:"Long Run - 22km", detail:"22km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:22 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 2500m", detail:"2500m. Try English Bay or Deep Cove for open water.", effort:2, targetDistance:2.5 },
      { day:"Sat", type:"run", label:"Tempo Run - 10km", detail:"10km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:10 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 31", type:"build", tag:"Ph.3 W11", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 6 loops", detail:"~130km, ~1500m gain. Fuel before first climb. Start loop 1 deliberately slow.", effort:3, targetDistance:130 },
      { day:"Tue", type:"run", label:"Long Run - 22km", detail:"22km. Ironman fatigue simulation off fatigued legs. 10:1 run/walk. Do not chase pace.", effort:2, targetDistance:22 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"brick", label:"Brick - 3 loops + 5km run", detail:"~65km bike (3 loops, ~750m gain) then 5km run at tired race pace. Practise T2 transition.", effort:3, targetDistance:70 },
      { day:"Fri", type:"swim", label:"Swim - 2500m", detail:"2500m. Try English Bay or Deep Cove for open water.", effort:2, targetDistance:2.5 },
      { day:"Sat", type:"run", label:"Tempo Run - 10km", detail:"10km with 3-4km at threshold (~6:30/km). Harder sessions - keep them controlled.", effort:3, targetDistance:10 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 32", type:"recovery", tag:"Ph.3 W12", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 3 loops", detail:"~65km, ~750m gain. Easy recovery ride.", effort:1, targetDistance:65 },
      { day:"Tue", type:"run", label:"Long Run - 12km", detail:"12km. Easy recovery run, 7:30-8:30/km.", effort:1, targetDistance:12 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable at this volume.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops easy", detail:"~43km easy spin. Recovery week - let legs flush out.", effort:1, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 1500m", detail:"1500m. Steady endurance pace.", effort:1, targetDistance:1.5 },
      { day:"Sat", type:"run", label:"Easy Run - 6km", detail:"6km easy. Recovery week - keep HR low.", effort:1, targetDistance:6 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Monday needs you fresh.", effort:0 },
    ]},
    { label:"Week 33", type:"build", tag:"Ph.4 W1", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 7 loops", detail:"~150km, ~1750m gain. Start loop 1 deliberately slow. Eat and drink every 30 min.", effort:3, targetDistance:150 },
      { day:"Tue", type:"run", label:"Race-Pace Run - 12km", detail:"12km at target Ironman marathon pace (~7:00-7:30/km). Heavy legs from Monday. This is what km 30 of the Ironman feels like.", effort:3, targetDistance:12 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable.", effort:0 },
      { day:"Thu", type:"brick", label:"Simulation - 120km bike + 20km run", detail:"~5.5 loops (120km) then 20km run. Rehearse race-day nutrition.", effort:4, targetDistance:140 },
      { day:"Fri", type:"swim", label:"Swim - 3000m", detail:"3000m steady. Building toward 3.8km.", effort:3, targetDistance:3.0 },
      { day:"Sat", type:"run", label:"Shakeout - 5km", detail:"Very easy 5km. Legs loose. Swap for a walk if simulation fatigue is high.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Sleep. Eat well.", effort:0 },
    ]},
    { label:"Week 34", type:"build", tag:"Ph.4 W2", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 7 loops", detail:"~150km, ~1750m gain. Start loop 1 deliberately slow. Eat and drink every 30 min.", effort:3, targetDistance:150 },
      { day:"Tue", type:"run", label:"Race-Pace Run - 13km", detail:"13km at target Ironman marathon pace (~7:00-7:30/km). Heavy legs from Monday. This is what km 30 of the Ironman feels like.", effort:3, targetDistance:13 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable.", effort:0 },
      { day:"Thu", type:"brick", label:"Simulation - 120km bike + 20km run", detail:"~5.5 loops (120km) then 20km run. Rehearse race-day nutrition.", effort:4, targetDistance:140 },
      { day:"Fri", type:"swim", label:"Swim - 3200m", detail:"3200m steady. Building toward 3.8km.", effort:3, targetDistance:3.2 },
      { day:"Sat", type:"run", label:"Shakeout - 5km", detail:"Very easy 5km. Legs loose. Swap for a walk if simulation fatigue is high.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Sleep. Eat well.", effort:0 },
    ]},
    { label:"Week 35", type:"build", tag:"Ph.4 W3", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 7 loops", detail:"~150km, ~1750m gain. Start loop 1 deliberately slow. Eat and drink every 30 min.", effort:3, targetDistance:150 },
      { day:"Tue", type:"run", label:"Race-Pace Run - 14km", detail:"14km at target Ironman marathon pace (~7:00-7:30/km). Heavy legs from Monday. This is what km 30 of the Ironman feels like.", effort:3, targetDistance:14 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable.", effort:0 },
      { day:"Thu", type:"brick", label:"Simulation - 120km bike + 20km run", detail:"~5.5 loops (120km) then 20km run. Rehearse race-day nutrition.", effort:4, targetDistance:140 },
      { day:"Fri", type:"swim", label:"Swim - 3500m", detail:"3500m steady. Building toward 3.8km.", effort:3, targetDistance:3.5 },
      { day:"Sat", type:"run", label:"Shakeout - 5km", detail:"Very easy 5km. Legs loose. Swap for a walk if simulation fatigue is high.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Sleep. Eat well.", effort:0 },
    ]},
    { label:"Week 36", type:"recovery", tag:"Ph.4 W4", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 4 loops", detail:"~87km, ~1000m gain. Easy recovery ride.", effort:1, targetDistance:87 },
      { day:"Tue", type:"run", label:"Race-Pace Run - 9km", detail:"9km at target Ironman marathon pace (~7:00-7:30/km). Heavy legs from Monday. This is what km 30 of the Ironman feels like.", effort:1, targetDistance:9 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops easy", detail:"~43km easy. Recovery week.", effort:1, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 2000m", detail:"2000m steady. Building toward 3.8km.", effort:1, targetDistance:2.0 },
      { day:"Sat", type:"run", label:"Shakeout - 5km", detail:"Very easy 5km. Legs loose. Easy recovery run.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Sleep. Eat well.", effort:0 },
    ]},
    { label:"Week 37", type:"build", tag:"Ph.4 W5", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 7.5 loops", detail:"~160km, ~1840m gain. Start loop 1 deliberately slow. Eat and drink every 30 min.", effort:3, targetDistance:160 },
      { day:"Tue", type:"run", label:"Race-Pace Run - 14km", detail:"14km at target Ironman marathon pace (~7:00-7:30/km). Heavy legs from Monday. This is what km 30 of the Ironman feels like.", effort:3, targetDistance:14 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable.", effort:0 },
      { day:"Thu", type:"brick", label:"Simulation - 130km bike + 22km run", detail:"~6.0 loops (130km) then 22km run. Rehearse race-day nutrition.", effort:4, targetDistance:152 },
      { day:"Fri", type:"swim", label:"Swim - 3600m", detail:"3600m steady. Building toward 3.8km.", effort:3, targetDistance:3.6 },
      { day:"Sat", type:"run", label:"Shakeout - 5km", detail:"Very easy 5km. Legs loose. Swap for a walk if simulation fatigue is high.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Sleep. Eat well.", effort:0 },
    ]},
    { label:"Week 38", type:"build", tag:"Ph.4 W6", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 7.5 loops", detail:"~160km, ~1840m gain. Start loop 1 deliberately slow. Eat and drink every 30 min.", effort:3, targetDistance:160 },
      { day:"Tue", type:"run", label:"Race-Pace Run - 15km", detail:"15km at target Ironman marathon pace (~7:00-7:30/km). Heavy legs from Monday. This is what km 30 of the Ironman feels like.", effort:3, targetDistance:15 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable.", effort:0 },
      { day:"Thu", type:"brick", label:"Simulation - 140km bike + 25km run", detail:"~6.5 loops (140km) then 25km run. Rehearse race-day nutrition.", effort:4, targetDistance:165 },
      { day:"Fri", type:"swim", label:"Swim - 3.8km", detail:"3.8km swim - slow, steady, bilateral breathing. Just finish it. A milestone.", effort:3, targetDistance:3.8 },
      { day:"Sat", type:"run", label:"Shakeout - 5km", detail:"Very easy 5km. Legs loose. Swap for a walk if simulation fatigue is high.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Sleep. Eat well.", effort:0 },
    ]},
    { label:"Week 39", type:"build", tag:"Ph.4 W7", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 7.5 loops", detail:"~160km, ~1840m gain. Start loop 1 deliberately slow. Eat and drink every 30 min.", effort:3, targetDistance:160 },
      { day:"Tue", type:"run", label:"Race-Pace Run - 15km", detail:"15km at target Ironman marathon pace (~7:00-7:30/km). Heavy legs from Monday. This is what km 30 of the Ironman feels like.", effort:3, targetDistance:15 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable.", effort:0 },
      { day:"Thu", type:"brick", label:"Simulation - 140km bike + 25km run", detail:"~6.5 loops (140km) then 25km run. Rehearse race-day nutrition.", effort:4, targetDistance:165 },
      { day:"Fri", type:"swim", label:"Swim - 3.8km", detail:"3.8km swim - slow, steady, bilateral breathing. Just finish it. A milestone.", effort:3, targetDistance:3.8 },
      { day:"Sat", type:"run", label:"Shakeout - 5km", detail:"Very easy 5km. Legs loose. Swap for a walk if simulation fatigue is high.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Sleep. Eat well.", effort:0 },
    ]},
    { label:"Week 40", type:"recovery", tag:"Ph.4 W8", days:[
      { day:"Mon", type:"bike", label:"Long Bike - 4 loops", detail:"~87km, ~1000m gain. Easy recovery ride.", effort:1, targetDistance:87 },
      { day:"Tue", type:"run", label:"Race-Pace Run - 9km", detail:"9km at target Ironman marathon pace (~7:00-7:30/km). Heavy legs from Monday. This is what km 30 of the Ironman feels like.", effort:1, targetDistance:9 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest. Non-negotiable.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 2 loops easy", detail:"~43km easy. Recovery week.", effort:1, targetDistance:43 },
      { day:"Fri", type:"swim", label:"Swim - 2000m", detail:"2000m steady. Building toward 3.8km.", effort:1, targetDistance:2.0 },
      { day:"Sat", type:"run", label:"Shakeout - 5km", detail:"Very easy 5km. Legs loose. Easy recovery run.", effort:1, targetDistance:5 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Full rest. Sleep. Eat well.", effort:0 },
    ]},
    { label:"Week 41", type:"recovery", tag:"Ph.5 Taper W1", days:[
      { day:"Mon", type:"bike", label:"Bike - 2.0 loops easy", detail:"~43km easy. No chasing times.", effort:1, targetDistance:43 },
      { day:"Tue", type:"run", label:"Short Run - 6km", detail:"6km easy with 2x1km at race pace.", effort:2, targetDistance:6 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1 loop", detail:"21.7km easy.", effort:1, targetDistance:21.7 },
      { day:"Fri", type:"swim", label:"Swim - 1500m", detail:"1500m easy. Feel your stroke. Relax.", effort:1, targetDistance:1.5 },
      { day:"Sat", type:"run", label:"Shakeout - 20 min", detail:"Very easy shakeout. Legs loose.", effort:1 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Walk, eat well, sleep 9hrs. Trust your preparation.", effort:0 },
    ]},
    { label:"Week 42", type:"recovery", tag:"Ph.5 Taper W2", days:[
      { day:"Mon", type:"bike", label:"Bike - 1.5 loops easy", detail:"~33km easy. No chasing times.", effort:1, targetDistance:33 },
      { day:"Tue", type:"run", label:"Short Run - 5km", detail:"5km easy with 2x1km at race pace.", effort:2, targetDistance:5 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1 loop", detail:"21.7km easy.", effort:1, targetDistance:21.7 },
      { day:"Fri", type:"swim", label:"Swim - 1200m", detail:"1200m easy. Feel your stroke. Relax.", effort:1, targetDistance:1.2 },
      { day:"Sat", type:"run", label:"Shakeout - 15 min", detail:"Very easy shakeout. Legs loose.", effort:1 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Walk, eat well, sleep 9hrs. Trust your preparation.", effort:0 },
    ]},
    { label:"Week 43", type:"recovery", tag:"Ph.5 Taper W3", days:[
      { day:"Mon", type:"bike", label:"Bike - 1.0 loops easy", detail:"~21.7km easy. No chasing times.", effort:1, targetDistance:21.7 },
      { day:"Tue", type:"run", label:"Short Run - 4km", detail:"4km easy with 2x1km at race pace.", effort:2, targetDistance:4 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Thu", type:"bike", label:"Bike - 1 loop", detail:"21.7km easy.", effort:1, targetDistance:21.7 },
      { day:"Fri", type:"swim", label:"Swim - 800m", detail:"800m easy. Feel your stroke. Relax.", effort:1, targetDistance:0.8 },
      { day:"Sat", type:"run", label:"Shakeout - 10 min", detail:"Very easy shakeout. Legs loose.", effort:1 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Walk, eat well, sleep 9hrs. Trust your preparation.", effort:0 },
    ]},
    { label:"Week 44", type:"recovery", tag:"Ph.5 Taper W4", days:[
      { day:"Mon", type:"rest", label:"Rest - Race Prep", detail:"Full rest. Final gear check. Visualise race day.", effort:0 },
      { day:"Tue", type:"run", label:"Short Run - 3km", detail:"3km easy.", effort:1, targetDistance:3 },
      { day:"Wed", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Thu", type:"rest", label:"Rest", detail:"Full rest.", effort:0 },
      { day:"Fri", type:"swim", label:"Swim - 400m", detail:"400m easy. Feel your stroke. Relax.", effort:1, targetDistance:0.4 },
      { day:"Sat", type:"rest", label:"Rest", detail:"Walk, eat well, sleep 9hrs.", effort:0 },
      { day:"Sun", type:"rest", label:"Rest", detail:"Walk, eat well, sleep 9hrs. Trust your preparation.", effort:0 },
    ]}
  ]
};

const TYPE = {
  run:   { color:"#a78bfa", bg:"#1e1040", icon:"🏃", label:"RUN" },
  bike:  { color:"#c4b5fd", bg:"#180f2e", icon:"🚴", label:"RIDE" },
  swim:  { color:"#818cf8", bg:"#1a1040", icon:"🏊", label:"SWIM" },
  brick: { color:"#e879f9", bg:"#2d0a3a", icon:"⚡", label:"BRICK" },
  rest:  { color:"#4a3878", bg:"#130c24", icon:"💤", label:"REST" },
};
const FEELINGS = ["😴 Tough","😐 OK","🙂 Good","😄 Great","🔥 Crushed it"];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// --- Storage (multi-cycle) ---
// Keys: "C{cycleNum}-{wi}-{di}" e.g. "C0-2-4"
// Migrates legacy "wi-di" keys to "C0-wi-di" on first load

// --- Supabase config ---
const SUPA_URL = "https://sfnslkdwaldinhaismgz.supabase.co";
const SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmbnNsa2R3YWxkaW5oYWlzbWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMTQwNzMsImV4cCI6MjA5Njg5MDA3M30.r9o-9_3VqhH846AxOW4mQ9thttwUG3XP74KArPHzzaA";
const SUPA_HEADERS = { "Content-Type": "application/json", "apikey": SUPA_KEY, "Authorization": `Bearer ${SUPA_KEY}` };

function getUserPin() { return localStorage.getItem("app_pin") || ""; }

// Local cache — keeps UI instant, Supabase is source of truth
function getLogs() { try { return JSON.parse(localStorage.getItem("dt_logs")||"{}"); } catch { return {}; } }
function saveLogsLocal(l) { localStorage.setItem("dt_logs", JSON.stringify(l)); }
function logKey(cn, wi, di) { return `C${cn}-${wi}-${di}`; }
function getLog(wi, di) { const cn = getCurrentCycle(); return getLogs()[logKey(cn, wi, di)] || null; }

// Write to local cache immediately, then sync to Supabase in background
function setLog(wi, di, data) {
  const key = logKey(getCurrentCycle(), wi, di);
  const l = getLogs();
  l[key] = {...data, cycleNum: getCurrentCycle()};
  saveLogsLocal(l);
  supaUpsert(getCurrentCycle(), wi, di, l[key]);
}

function removeLogEntry(wi, di) {
  const key = logKey(getCurrentCycle(), wi, di);
  const l = getLogs();
  delete l[key];
  saveLogsLocal(l);
  supaDelete(getCurrentCycle(), wi, di);
}

// Supabase operations
async function supaUpsert(cn, wi, di, data) {
  const pin = getUserPin(); if (!pin) return;
  try {
    await fetch(`${SUPA_URL}/rest/v1/logs`, {
      method: "POST",
      headers: { ...SUPA_HEADERS, "Prefer": "resolution=merge-duplicates" },
      body: JSON.stringify({
        key: logKey(cn, wi, di),
        cycle_num: cn, week_index: wi, day_index: di,
        user_pin: pin,
        completed: data.completed || false,
        activity_type: data.activityType || null,
        feeling: data.feeling ?? null,
        distance: parseFloat(data.distance) || null,
        bike_distance: parseFloat(data.bikeDistance) || null,
        run_distance: parseFloat(data.runDistance) || null,
        duration: parseFloat(data.duration) || null,
        notes: data.notes || null,
        completed_at: data.completedAt || null,
      })
    });
  } catch(e) { console.warn("Supabase sync failed:", e); }
}

async function supaDelete(cn, wi, di) {
  const pin = getUserPin(); if (!pin) return;
  try {
    await fetch(`${SUPA_URL}/rest/v1/logs?key=eq.${logKey(cn,wi,di)}&user_pin=eq.${pin}`, {
      method: "DELETE", headers: SUPA_HEADERS
    });
  } catch(e) { console.warn("Supabase delete failed:", e); }
}

// Pull all logs from Supabase and update local cache
async function supaSync() {
  const pin = getUserPin(); if (!pin) return;
  try {
    showSyncStatus("syncing");
    const res = await fetch(`${SUPA_URL}/rest/v1/logs?user_pin=eq.${pin}&select=*`, {
      headers: SUPA_HEADERS
    });
    if (!res.ok) throw new Error(res.status);
    const rows = await res.json();
    const merged = {};
    rows.forEach(r => {
      merged[r.key] = {
        completed: r.completed,
        activityType: r.activity_type,
        feeling: r.feeling,
        distance: r.distance != null ? String(r.distance) : "",
        bikeDistance: r.bike_distance != null ? String(r.bike_distance) : "",
        runDistance: r.run_distance != null ? String(r.run_distance) : "",
        duration: r.duration != null ? String(r.duration) : "",
        notes: r.notes || "",
        completedAt: r.completed_at,
        cycleNum: r.cycle_num,
      };
    });
    saveLogsLocal(merged);
    showSyncStatus("ok");
    renderToday();
    if (document.getElementById("history-screen").classList.contains("active")) renderHistory();
    if (document.getElementById("plan-screen").classList.contains("active")) renderPlan(activePlanWeek);
  } catch(e) {
    console.warn("Supabase pull failed:", e);
    showSyncStatus("error");
  }
}

function showSyncStatus(state) {
  const el = document.getElementById("sync-status");
  if (!el) return;
  if (state === "syncing") { el.textContent = "⟳ Syncing..."; el.style.color = "var(--faint)"; }
  else if (state === "ok") { el.textContent = "✓ Synced"; el.style.color = "var(--accent-bright)"; setTimeout(()=>{ el.textContent=""; }, 3000); }
  else { el.textContent = "⚠ Sync failed"; el.style.color = "#f59e0b"; }
}

function getCycleStart() {
  const s=localStorage.getItem("dt_cycle"); if(s) return new Date(s);
  const today=new Date(), day=today.getDay();
  const mon=new Date(today); mon.setDate(today.getDate()-day+(day===0?-6:1)); mon.setHours(0,0,0,0);
  localStorage.setItem("dt_cycle",mon.toISOString()); return mon;
}
function getCurrentWeek() {
  const diff=Math.floor((new Date()-getCycleStart())/86400000);
  return Math.min(Math.floor(diff/7), PLAN.weeks.length-1);
}
function getCurrentCycle() { return 0; }


// Returns the real calendar date (YYYY-MM-DD) for a given plan week + day index
function getPlanDate(wi, di) {
  const cycleStart = getCycleStart(); // Monday of week 1
  const d = new Date(cycleStart);
  d.setDate(d.getDate() + wi * 7 + di); // di=0→Mon, di=1→Tue, … di=6→Sun
  return d.toISOString().slice(0, 10);
}




function dotsHtml(effort) {
  let h=""; for(let i=1;i<=4;i++) h+=`<span class="dot${i<=effort?" on":""}"></span>`; return h;
}

// --- Tab ---
function showTab(name, el) {
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.getElementById(name+"-screen").classList.add("active");
  el.classList.add("active");
  if(name==="today") renderToday();
  if(name==="plan") renderPlan(activePlanWeek);
  if(name==="history") renderHistory();
  if(name==="history") setTimeout(renderChart, 100);
  if(name==="fuel") fuelCalc();
  if(name==="settings") initSettingsScreen();
}

// --- TODAY ---
function renderToday() {
  const today=new Date(), todayName=DAYS[today.getDay()];
  const wi=getCurrentWeek(), week=PLAN.weeks[wi];
  document.getElementById("today-date").textContent=today.toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"}).toUpperCase();
  document.getElementById("today-week-badge").textContent=`W${wi+1} of 44 · ${week.tag}`;

  const di=week.days.findIndex(d=>d.day===todayName);
  const session=di>=0?week.days[di]:null;
  const cfg=session?TYPE[session.type]:TYPE.rest;
  const log=session?getLog(wi,di):null;

  let cardHtml=`<div class="today-label">TODAY</div>`;
  if(session && session.type!=="rest") {
    const effortLabels=["","Easy","Moderate","Hard","Peak"];
    // Use logged type if it differs from planned
    const loggedType = log?.activityType || session.type;
    const displayCfg = TYPE[loggedType] || cfg;
    const typeChanged = log?.completed && loggedType !== session.type;
    cardHtml+=`<div class="today-row"><span class="today-icon">${displayCfg.icon}</span>
      <div><div class="today-title" style="color:${displayCfg.color}">${typeChanged ? displayCfg.label : session.label}</div>
      ${typeChanged ? `<div style="font-size:10px;color:var(--faint);margin-top:1px">planned: ${session.label}</div>` : ""}
      <div class="today-detail">${session.detail}</div></div></div>
      <div class="effort-row">${dotsHtml(session.effort)}<span class="effort-label">${effortLabels[session.effort]} effort</span></div>`;
    if(log?.completed) {
      cardHtml+=`<div class="done-tag" style="border-color:${displayCfg.color};color:${displayCfg.color}">✓ Completed</div>`;
    } else {
      cardHtml+=`<button class="btn" style="background:var(--accent);color:#fff" onclick="openLog(${wi},${di})">Log Workout</button>`;
    }
    const tc=document.getElementById("today-card");
    tc.innerHTML=cardHtml; tc.style.backgroundColor=displayCfg.bg; tc.style.borderColor=displayCfg.color;
  } else {
    cardHtml+=`<div style="display:flex;align-items:center;gap:12px"><span style="font-size:28px">💤</span><span style="color:var(--faint);font-size:16px;font-weight:600">Rest day — recover well</span></div>`;
    const tc=document.getElementById("today-card");
    tc.innerHTML=cardHtml; tc.style.backgroundColor=cfg.bg; tc.style.borderColor=cfg.color;
  }

  // Progress
  let completed=0;
  week.days.forEach((d,i)=>{ if(d.type!=="rest"&&getLog(wi,i)?.completed) completed++; });
  const total=week.days.filter(d=>d.type!=="rest").length;
  document.getElementById("progress-fill").style.width=total>0?`${(completed/total)*100}%`:"0%";
  document.getElementById("progress-text").textContent=`${completed} of ${total} sessions done`;

  // Pills — calculate real calendar date for each day of this week
  const weekStart = getCycleStart();
  weekStart.setDate(weekStart.getDate() + wi * 7); // Monday of this plan week
  let pillsHtml="";
  week.days.forEach((d,i)=>{
    const c=TYPE[d.type],l=getLog(wi,i),isToday=d.day===todayName;
    const loggedType=l?.activityType||d.type;
    const dc=TYPE[loggedType]||c;
    const dayDate = new Date(weekStart);
    dayDate.setDate(weekStart.getDate() + i);
    const dateNum = dayDate.getDate();
    const dateMonth = dayDate.toLocaleDateString("en-GB",{month:"short"});
    pillsHtml+=`<div class="day-pill" style="border-color:${isToday?dc.color:"var(--border)"};background:${l?.completed?dc.color+"33":"var(--card)"}" ${d.type!=="rest"?`onclick="openLog(${wi},${i})"`:""}>
      <div class="day-pill-day" style="color:${isToday?dc.color:"var(--faint)"}">${d.day}</div>
      <div class="day-pill-icon">${dc.icon}</div>
      <div style="font-size:9px;color:${isToday?dc.color:"var(--faint)"};font-weight:600;margin-top:1px">${dateNum} ${dateMonth}</div>
      ${l?.completed?'<div class="day-pill-check">✓</div>':""}
    </div>`;
  });
  document.getElementById("week-days").innerHTML=pillsHtml;

  // Upcoming
  const dayOrder=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const todayIdx=dayOrder.indexOf(todayName);
  const upcoming=week.days.map((d,i)=>({...d,di:i})).filter(d=>dayOrder.indexOf(d.day)>todayIdx&&d.type!=="rest").slice(0,3);
  let upHtml="";
  if(upcoming.length) {
    upHtml=`<div class="section-title">Coming Up</div>`;
    upcoming.forEach(d=>{
      const c=TYPE[d.type];
      upHtml+=`<div class="upcoming-card" onclick="openLog(${wi},${d.di})">
        <span style="font-size:22px">${c.icon}</span>
        <div><div style="font-size:11px;color:var(--dim);font-weight:600">${d.day}</div><div style="font-size:14px;color:var(--text);font-weight:700">${d.label}</div></div>
        <span class="badge" style="color:${c.color};border-color:${c.color}55;background:${c.color}22">${c.label}</span>
      </div>`;
    });
  }
  document.getElementById("upcoming-section").innerHTML=upHtml;
}

function toggleDay(i,wi) {
  if(expandedDay===i) {
    document.getElementById(`exp-${i}`).classList.remove("open");
    document.getElementById(`chev-${i}`).textContent="▼";
    document.getElementById(`day-card-${i}`).style.borderColor=TYPE[PLAN.weeks[wi].days[i].type].color+"44";
    expandedDay=null;
  } else {
    if(expandedDay!==null) {
      document.getElementById(`exp-${expandedDay}`)?.classList.remove("open");
      document.getElementById(`chev-${expandedDay}`).textContent="▼";
      document.getElementById(`day-card-${expandedDay}`).style.borderColor=TYPE[PLAN.weeks[wi].days[expandedDay].type].color+"44";
    }
    document.getElementById(`exp-${i}`).classList.add("open");
    document.getElementById(`chev-${i}`).textContent="▲";
    document.getElementById(`day-card-${i}`).style.borderColor=TYPE[PLAN.weeks[wi].days[i].type].color;
    expandedDay=i;
  }
}

// --- LOG ---
// --- PLAN ---
let activePlanWeek=0, expandedDay=null;
// Phase definitions — maps phase name to week index range
const PHASES_DEF = [
  { id:1, label:"Rehab",  weeks:[0,7]  },
  { id:2, label:"Base",   weeks:[8,19] },
  { id:3, label:"Build",  weeks:[20,31]},
  { id:4, label:"Peak",   weeks:[32,39]},
  { id:5, label:"Taper",  weeks:[40,43]},
];

function getPhaseForWeek(wi) {
  return PHASES_DEF.findIndex(p => wi >= p.weeks[0] && wi <= p.weeks[1]);
}

let activePhaseDef = 0;

function renderPhaseTabs(activePhase) {
  activePhaseDef = activePhase;
  const cw = getCurrentWeek();
  document.getElementById("phase-tabs").innerHTML = PHASES_DEF.map((p, i) => {
    const isActive = i === activePhase;
    const weekCount = p.weeks[1] - p.weeks[0] + 1;
    return `<button class="phase-tab${isActive?" active":""}" onclick="selectPhase(${i})">
      <span class="phase-tab-num">Ph.${p.id} · ${weekCount}w</span>
      <span class="phase-tab-label">${p.label}</span>
    </button>`;
  }).join("");
}

function selectPhase(pi) {
  const cw = getCurrentWeek();
  const phase = PHASES_DEF[pi];
  // Jump to current week if in this phase, otherwise first week
  const targetWi = (cw >= phase.weeks[0] && cw <= phase.weeks[1]) ? cw : phase.weeks[0];
  renderPlan(targetWi);
}

function renderWeekGrid(wi) {
  const cw = getCurrentWeek();
  const phase = PHASES_DEF[activePhaseDef];
  const weeksInPhase = PLAN.weeks.slice(phase.weeks[0], phase.weeks[1]+1);
  const cols = Math.min(weeksInPhase.length, 8);
  document.getElementById("week-grid").innerHTML = `<div class="week-grid-inner" style="grid-template-columns:repeat(${cols},1fr)">
    ${weeksInPhase.map((w, idx) => {
      const globalWi = phase.weeks[0] + idx;
      const isActive = globalWi === wi;
      const isCurrent = globalWi === cw;
      const log = PLAN.weeks[globalWi].days.filter(d=>d.type!=="rest").every((d,di)=>getLog(globalWi, PLAN.weeks[globalWi].days.indexOf(d))?.completed);
      return `<button class="week-cell ${w.type}${isActive?" active":""}${isCurrent&&!isActive?" current-week":""}" onclick="renderPlan(${globalWi})">
        <span class="week-cell-num">W${globalWi+1}</span>
        <span class="week-cell-dot"></span>
      </button>`;
    }).join("")}
  </div>`;
}

function renderPlan(wi) {
  activePlanWeek=wi; expandedDay=null;
  const phaseIdx = getPhaseForWeek(wi);
  renderPhaseTabs(phaseIdx);
  renderWeekGrid(wi);

  const week=PLAN.weeks[wi];
  const isRec = week.type==="recovery";
  const wColor = isRec ? "#5b21b6" : "var(--accent)";
  const wTextColor = isRec ? "var(--accent-light)" : "#fff";

  document.getElementById("week-header").innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div>
        <div style="font-size:18px;font-weight:900;color:var(--text);letter-spacing:-0.02em">${week.label}</div>
        <div style="font-size:11px;color:var(--faint);margin-top:1px">${PHASES_DEF[phaseIdx].label} phase · Week ${wi+1} of 44</div>
      </div>
      <span style="background:${wColor};color:${wTextColor};border-radius:20px;padding:4px 12px;font-size:10px;font-weight:800;letter-spacing:0.06em;text-transform:uppercase">${isRec?"Recovery":"Build"}</span>
    </div>`;

  document.getElementById("plan-days").innerHTML=week.days.map((d,i)=>{
    const c=TYPE[d.type], log=getLog(wi,i);
    const isRest=d.type==="rest";

    // Build target info string for main bar
    let targetInfo = "";
    if (!isRest && d.targetDistance) {
      const km = d.targetDistance;
      // Estimate time based on sport type and distance
      let estMins = 0;
      if (d.type === "run") estMins = Math.round(km * 8);         // ~8 min/km easy
      else if (d.type === "bike") estMins = Math.round((km / 22) * 60); // ~22km/h
      else if (d.type === "swim") estMins = Math.round(km * 40);  // ~40 min/km in pool
      else if (d.type === "brick") estMins = Math.round((km * 0.75 / 22) * 60 + (km * 0.25) * 7); // rough split
      const estH = Math.floor(estMins / 60), estM = estMins % 60;
      const timeStr = estH > 0 ? `${estH}h${estM > 0 ? ` ${estM}m` : ""}` : `${estM}m`;
      targetInfo = `<div style="display:flex;align-items:center;gap:8px;margin-top:4px">
        <span style="font-size:11px;font-weight:700;color:${c.color}">${km < 1 ? (km*1000).toFixed(0)+"m" : km+"km"}</span>
        <span style="font-size:10px;color:var(--faint)">·</span>
        <span style="font-size:11px;color:var(--dim)">~${timeStr}</span>
      </div>`;
    }

    return `<div class="day-card" id="day-card-${i}" style="background:${c.bg};border-color:${c.color}${isRest?"22":"55"};opacity:${isRest?"0.55":"1"}" onclick="toggleDay(${i},${wi})">
      <div class="day-card-row">
        <div class="day-icon-circle" style="background:${c.color}22;border:1px solid ${c.color}33">${c.icon}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
            <span class="day-name">${d.day}</span>
            <span class="day-label-text" style="color:${c.color};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.label}</span>
          </div>
          ${targetInfo}
          ${d.type!=="rest"&&!targetInfo?`<div style="display:flex;gap:3px;margin-top:2px">${dotsHtml(d.effort)}</div>`:""}
          ${d.type!=="rest"&&targetInfo?`<div style="display:flex;gap:3px;margin-top:2px">${dotsHtml(d.effort)}</div>`:""}
        </div>
        <div class="day-card-right">
          ${log?.completed?`<span style="font-size:13px;color:${c.color}">✓</span>`:""}
          <span class="badge" style="color:${c.color};border-color:${c.color}44;background:${c.color}11;font-size:9px">${c.label}</span>
          <span class="chevron" id="chev-${i}">▼</span>
        </div>
      </div>
      <div class="expanded" id="exp-${i}">
        <div class="expanded-detail">${d.detail}</div>
        ${d.targetDistance?`<div class="target-text">🎯 Target: ${d.targetDistance < 1 ? (d.targetDistance*1000).toFixed(0)+"m" : d.targetDistance+"km"}</div>`:""}
        ${!isRest?`<button class="log-link" style="color:${c.color};border-color:${c.color}55" onclick="event.stopPropagation();openLog(${wi},${i})">${log?.completed?"✓ View / Edit Log":"Log this workout →"}</button>`:""}
      </div>
    </div>`;
  }).join("");
}

let logState={wi:0,di:0,session:null,feeling:2,loggedType:null,isReadOnly:false,cn:0};

function buildLogForm(session, log, isReadOnly) {
  const isRest = session.type==="rest";
  if(isRest) {
    return `<div class="rest-msg"><div class="rest-emoji">&#128716;</div><div class="rest-title">Rest Day</div><div class="rest-sub">Recovery is part of the plan. Enjoy the downtime!</div></div>
    <button class="save-btn" style="background:#2d1a6e;color:var(--accent-light)" onclick="saveLog()">Mark as Rested ✓</button>`;
  }
  const currentType = logState.loggedType;
  const isBrick = currentType==="brick";
  const feelingsHtml = FEELINGS.map((f,i)=>`<button class="feeling-btn${logState.feeling===i?" selected":""}" onclick="selectFeeling(${i})">${f}</button>`).join("");
  const typePickerHtml = `<div class="input-group">
    <label class="input-label">Workout type</label>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      ${Object.entries(TYPE).filter(([k])=>k!=="rest").map(([k,v])=>`<button onclick="switchLogType('${k}')" style="flex:1;min-width:60px;padding:8px 4px;border-radius:10px;border:1.5px solid ${currentType===k?v.color:"var(--border)"};background:${currentType===k?(v.color+"22"):"var(--card)"};color:${currentType===k?v.color:"var(--dim)"};font-size:11px;font-weight:800;cursor:pointer;font-family:inherit">${v.icon} ${v.label}</button>`).join("")}
    </div>
  </div>`;
  const distanceHtml = isBrick
    ? `<div class="input-row"><div class="input-group"><label class="input-label">Bike (km)</label><input type="number" id="bike-dist" placeholder="e.g. 60" value="${log?.bikeDistance||""}" step="0.1" min="0"></div><div class="input-group"><label class="input-label">Run (km)</label><input type="number" id="run-dist" placeholder="e.g. 5" value="${log?.runDistance||""}" step="0.1" min="0"></div></div>`
    : `<div class="input-group"><label class="input-label">Distance (km)</label><input type="number" id="distance" placeholder="Target: ${session.targetDistance||"--"} km" value="${log?.distance||""}" step="0.1" min="0"></div>`;
  // Decompose stored total-minutes back into h/m/s for display
  const storedMins = parseFloat(log?.duration||0);
  const prefillH = storedMins > 0 ? Math.floor(storedMins / 60) : "";
  const prefillM = storedMins > 0 ? Math.floor(storedMins % 60) : "";
  const prefillS = storedMins > 0 ? Math.round((storedMins * 60) % 60) : "";
  const durationHtml = `<div class="input-group">
    <label class="input-label">Duration</label>
    <div style="display:flex;gap:8px;align-items:flex-end">
      <div style="flex:1;text-align:center">
        <input type="number" id="dur-h" placeholder="0" value="${prefillH}" min="0" max="23" style="text-align:center">
        <div style="font-size:10px;color:var(--faint);font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-top:4px">hrs</div>
      </div>
      <div style="flex:1;text-align:center">
        <input type="number" id="dur-m" placeholder="0" value="${prefillM}" min="0" max="59" style="text-align:center">
        <div style="font-size:10px;color:var(--faint);font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-top:4px">min</div>
      </div>
      <div style="flex:1;text-align:center">
        <input type="number" id="dur-s" placeholder="0" value="${prefillS}" min="0" max="59" style="text-align:center">
        <div style="font-size:10px;color:var(--faint);font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-top:4px">sec</div>
      </div>
    </div>
  </div>`;
  let html = `<div class="form-section">
    <div style="font-size:10px;font-weight:800;letter-spacing:2px;color:var(--faint);margin-bottom:16px">LOG YOUR WORKOUT</div>
    ${typePickerHtml}
    ${distanceHtml}
    ${durationHtml}
    <div class="input-group"><label class="input-label">How did it feel?</label><div class="feelings">${feelingsHtml}</div></div>
    <div class="input-group"><label class="input-label">Notes (optional)</label><textarea id="notes" placeholder="How did it go? Anything to remember...">${log?.notes||""}</textarea></div>
  </div>`;
  if(isReadOnly) {
    html += `<div style="margin:16px 20px 0;padding:12px;background:var(--card);border-radius:12px;border:1px solid var(--border);text-align:center;font-size:13px;color:var(--dim)">Past cycle — view only</div>`;
  } else {
    html += `<button class="save-btn" style="background:var(--accent);color:#fff" onclick="saveLog()">${log?"Update Log":"Mark Complete"}</button>`;
  }
  return html;
}

function switchLogType(newType) {
  const dH = parseFloat(document.getElementById("dur-h")?.value||0);
  const dM = parseFloat(document.getElementById("dur-m")?.value||0);
  const dS = parseFloat(document.getElementById("dur-s")?.value||0);
  const totalMins = dH * 60 + dM + dS / 60;
  const dist = document.getElementById("distance")?.value||"";
  const bikeDist = document.getElementById("bike-dist")?.value||"";
  const runDist = document.getElementById("run-dist")?.value||"";
  const notes = document.getElementById("notes")?.value||"";
  const log = getLogs()[logKey(logState.cn, logState.wi, logState.di)] || null;
  const patchedLog = {...log, duration: totalMins > 0 ? String(totalMins) : "", distance:dist, bikeDistance:bikeDist, runDistance:runDist, notes};
  logState.loggedType = newType;

  // Update session card header and screen background to match new type
  const cfg = TYPE[newType] || TYPE.run;
  const session = logState.session;
  const titleChanged = newType !== session.type;
  const displayTitle = titleChanged ? `${cfg.icon} ${cfg.label}` : session.label;
  const _ws2 = new Date(getCycleStart()); _ws2.setDate(_ws2.getDate() + logState.wi*7);
  const _sd2 = new Date(_ws2); _sd2.setDate(_ws2.getDate() + logState.di);
  const _dateStr2 = _sd2.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
  const subtitle = titleChanged ? `${session.day} ${_dateStr2} · Wk ${logState.wi+1} · planned: ${session.label}` : `${session.day} ${_dateStr2} · Week ${logState.wi+1}`;
  document.getElementById("log-session-card").style.cssText=`border-color:${cfg.color};background-color:${cfg.bg}`;
  document.getElementById("log-session-card").innerHTML=`<span class="session-icon">${cfg.icon}</span><div style="flex:1"><div class="session-title" style="color:${cfg.color}">${displayTitle}</div><div class="session-day">${subtitle}</div></div><span class="badge" style="color:${cfg.color};border-color:${cfg.color}55;background:${cfg.color}22">${cfg.label}</span>`;
  document.getElementById("log-detail-box").style.borderColor=cfg.color+"44";
  document.getElementById("log-screen").style.backgroundColor=cfg.bg;

  document.getElementById("log-form").innerHTML = buildLogForm(session, patchedLog, logState.isReadOnly);
}

function openLog(wi, di, cycleNum) {
  const cn = (cycleNum !== undefined) ? cycleNum : getCurrentCycle();
  const isReadOnly = cn !== getCurrentCycle();
  const session=PLAN.weeks[wi].days[di], cfg=TYPE[session.type];
  const log = getLogs()[logKey(cn, wi, di)] || null;
  const savedType = log?.activityType || session.type;
  logState={wi,di,session,feeling:log?.feeling??2,loggedType:savedType,isReadOnly,cn};
  document.getElementById("log-session-card").style.cssText=`border-color:${cfg.color};background-color:${cfg.bg}`;
  const savedCfg = TYPE[savedType] || cfg;
  const titleChanged = savedType !== session.type;
  const displayTitle = titleChanged ? `${savedCfg.icon} ${savedCfg.label}` : session.label;
  // Calculate real calendar date for this session
  const _ws = new Date(getCycleStart()); _ws.setDate(_ws.getDate() + wi*7);
  const _sd = new Date(_ws); _sd.setDate(_ws.getDate() + di);
  const _dateStr = _sd.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
  const subtitle = titleChanged ? `${session.day} ${_dateStr} · Wk ${wi+1} · planned: ${session.label}` : `${session.day} ${_dateStr} · Week ${wi+1}`;
  document.getElementById("log-session-card").innerHTML=`<span class="session-icon">${savedCfg.icon}</span><div style="flex:1"><div class="session-title" style="color:${savedCfg.color}">${displayTitle}</div><div class="session-day">${subtitle}</div></div><span class="badge" style="color:${savedCfg.color};border-color:${savedCfg.color}55;background:${savedCfg.color}22">${savedCfg.label}</span>`;
  document.getElementById("log-detail-box").style.borderColor=savedCfg.color+"44";
  document.getElementById("log-detail-text").textContent=session.detail;
  document.getElementById("delete-btn").style.display=(log && !isReadOnly)?"block":"none";
  document.getElementById("log-form").innerHTML = buildLogForm(session, log, isReadOnly);
  document.getElementById("log-screen").style.backgroundColor=savedCfg.bg;
  document.getElementById("log-screen").classList.add("open");
  document.getElementById("log-screen").scrollTop=0;
}

function selectFeeling(i) {
  logState.feeling=i;
  document.querySelectorAll(".feeling-btn").forEach((b,idx)=>b.classList.toggle("selected",idx===i));
}

function saveLog() {
  const {wi,di,session}=logState;
  const loggedType = logState.loggedType || session.type;
  const isBrick = loggedType==="brick";
  // Convert h/m/s to total minutes stored as a decimal
  const dH = parseFloat(document.getElementById("dur-h")?.value||0);
  const dM = parseFloat(document.getElementById("dur-m")?.value||0);
  const dS = parseFloat(document.getElementById("dur-s")?.value||0);
  const totalMins = dH * 60 + dM + dS / 60;
  setLog(wi,di,{
    completed:true, activityType:loggedType, feeling:logState.feeling,
    notes:document.getElementById("notes")?.value||"",
    duration: totalMins > 0 ? String(totalMins) : "",
    distance:isBrick?null:(document.getElementById("distance")?.value||""),
    bikeDistance:isBrick?(document.getElementById("bike-dist")?.value||""):null,
    runDistance:isBrick?(document.getElementById("run-dist")?.value||""):null,
    completedAt:new Date().toISOString(),
  });
  closeLog(); renderToday();
  if(activePlanWeek===wi) renderPlan(wi);
}

function deleteLog() {
  if(confirm("Remove this workout log?")) {
    removeLogEntry(logState.wi,logState.di);
    closeLog(); renderToday();
    if(activePlanWeek===logState.wi) renderPlan(logState.wi);
  }
}

function closeLog() { document.getElementById("log-screen").classList.remove("open"); }

// --- HISTORY ---

// --- HISTORY RENDER ---
function renderHistory() {
  const logs = getLogs();
  const activities = [];
  const fmtDate = d => { try { return new Date(d+"T12:00:00").toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"}); } catch(e) { return d; }};
  const fmtMonth = m => { try { return new Date(m+"-01T12:00:00").toLocaleDateString("en-GB",{month:"long",year:"numeric"}); } catch(e) { return m; }};
  const FEELINGS = ["😴 Tough","😐 OK","🙂 Good","😄 Great","🔥 Crushed it"];

  // ── 1. Plan logged workouts ──
  Object.entries(logs).forEach(([key, log]) => {
    if (!log?.completed) return;
    const m = key.match(/^C(\d+)-(\d+)-(\d+)$/);
    if (!m) return;
    const [, cn, wi, di] = m.map(Number);
    const week = PLAN.weeks[wi]; if (!week) return;
    const day = week.days[di]; if (!day || day.type === "rest") return;

    const actType = log.activityType || day.type;
    const cfg = TYPE[actType] || TYPE.run;
    const isBrick = actType === "brick";

    let distKm = 0;
    if (isBrick) {
      distKm = parseFloat(log.bikeDistance||0) + parseFloat(log.runDistance||0);
      if (distKm === 0) distKm = day.targetDistance || 0;
    } else {
      distKm = parseFloat(log.distance||0);
      if (distKm === 0) distKm = day.targetDistance || 0;
    }
    const durMins = parseFloat(log.duration||0);

    const cycleStartStr = localStorage.getItem("dt_cycle");
    let date = "—";
    if (cycleStartStr) {
      const cycleStart = new Date(cycleStartStr);
      const totalDays = cn * (PLAN.weeks.length * 7) + wi * 7 + di;
      const d = new Date(cycleStart);
      d.setDate(d.getDate() + totalDays);
      date = d.toISOString().slice(0, 10);
    }

    activities.push({ source:"plan", key, wi, di, cn, day, log, actType, cfg, distKm, durMins, date, elevM: 0 });
  });

  // ── 2. Strava imported workouts ──
  const stravaImports = getStravaImports();
  stravaImports.forEach(a => {
    const cfg = TYPE[a.type] || TYPE.run;
    activities.push({
      source: "strava",
      id: a.id,
      name: a.name,
      actType: a.type,
      cfg,
      distKm: a.distance_km || 0,
      durMins: a.duration_mins || 0,
      elevM: a.elevation_m || 0,
      date: a.date || "—",
      // these aren't plan-linked so leave plan fields null
      day: null, log: null, wi: null, di: null, cn: null,
    });
  });

  // ── 3. Deduplicate: if a Strava activity falls on the same date as a plan
  //    log of the same type, prefer the plan log (it has more detail) ──
  const planDateTypes = new Set(
    activities.filter(a => a.source === "plan").map(a => `${a.date}:${a.actType}`)
  );
  const merged = activities.filter(a =>
    a.source === "plan" || !planDateTypes.has(`${a.date}:${a.actType}`)
  );

  // Sort newest first
  merged.sort((a, b) => b.date.localeCompare(a.date));

  // ── 4. Stats (across both sources) ──
  let totalKm = 0, totalMins = 0, runKm = 0, bikeKm = 0, swimKm = 0;
  const typeCounts = {};
  merged.forEach(a => {
    totalKm += a.distKm;
    totalMins += a.durMins;
    if (a.actType === "run") runKm += a.distKm;
    if (a.actType === "bike" || a.actType === "brick") bikeKm += a.source === "plan" ? parseFloat(a.log?.bikeDistance||a.distKm||0) : a.distKm;
    if (a.actType === "swim") swimKm += a.distKm;
    typeCounts[a.actType] = (typeCounts[a.actType]||0) + 1;
  });
  const hrs = Math.floor(totalMins/60), mins2 = Math.round(totalMins%60);

  const stravaCount = stravaImports.length;
  document.getElementById("hist-stats").innerHTML = merged.length === 0
    ? `<div class="stat-card" style="grid-column:1/-1;text-align:center;padding:24px">
        <div style="font-size:32px;margin-bottom:8px">🏊🚴🏃</div>
        <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:4px">No workouts yet</div>
        <div style="font-size:12px;color:var(--dim)">Import from Strava below or log sessions in Plan</div>
      </div>`
    : `<div class="stat-card">
        <div class="stat-value">${merged.length}</div>
        <div class="stat-label">Workouts</div>
        <div class="stat-sub">${stravaCount > 0 ? `${stravaCount} from Strava` : "logged in app"}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalKm.toFixed(0)}<span style="font-size:16px;font-weight:600;color:var(--dim)"> km</span></div>
        <div class="stat-label">Distance</div>
        <div class="stat-sub">Run ${runKm.toFixed(0)} · Bike ${bikeKm.toFixed(0)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalMins > 0 ? `${hrs}<span style="font-size:16px;font-weight:600;color:var(--dim)">h</span> ${mins2}<span style="font-size:16px;font-weight:600;color:var(--dim)">m</span>` : `—`}</div>
        <div class="stat-label">Total Time</div>
        <div class="stat-sub">all sessions</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${swimKm > 0 ? swimKm.toFixed(1) : "—"}<span style="font-size:16px;font-weight:600;color:var(--dim)">${swimKm > 0 ? " km" : ""}</span></div>
        <div class="stat-label">Swim</div>
        <div class="stat-sub">total in water</div>
      </div>`;

  // Type breakdown bar
  const topTypes = Object.entries(typeCounts).sort((a,b)=>b[1]-a[1]).slice(0,4);
  document.getElementById("hist-type-bar").innerHTML = topTypes.map(([t, count]) => {
    const c = TYPE[t] || TYPE.run;
    return `<div class="type-stat" style="border-color:${c.color}44">
      <div class="type-stat-icon">${c.icon}</div>
      <div class="type-stat-val" style="color:${c.color}">${count}</div>
      <div class="type-stat-lbl">${c.label}</div>
    </div>`;
  }).join("");

  renderStravaImportBar();

  if (merged.length === 0) {
    document.getElementById("hist-month-list").innerHTML = "";
    setTimeout(renderChart, 60);
    return;
  }

  // ── 5. Group by month and render ──
  const byMonth = {};
  merged.forEach(a => {
    const month = a.date.slice(0, 7);
    if (!byMonth[month]) byMonth[month] = [];
    byMonth[month].push(a);
  });

  const months = Object.keys(byMonth).sort((a,b) => b.localeCompare(a));
  let html = "";

  months.forEach(month => {
    const acts = byMonth[month];
    const monthKm = acts.reduce((s,a)=>s+a.distKm,0);
    html += `<div style="margin-bottom:24px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <div class="section-title" style="margin-bottom:0">${fmtMonth(month)}</div>
        <div style="font-size:11px;color:var(--dim)">${acts.length} sessions · ${monthKm.toFixed(1)} km</div>
      </div>`;

    acts.forEach(a => {
      const { cfg, distKm, durMins, date, actType } = a;
      const isSwim = actType === "swim";
      const isBrick = actType === "brick";
      const h = Math.floor(durMins/60), mm = Math.round(durMins%60);
      const durStr = durMins > 0 ? (h > 0 ? `${h}h ${mm}m` : `${Math.round(durMins)}m`) : "—";

      let distStr = "—";
      if (distKm > 0) {
        distStr = isSwim && distKm < 1 ? `${(distKm*1000).toFixed(0)}m` : `${distKm.toFixed(1)} km`;
      }

      if (a.source === "strava") {
        // Strava entry — no plan link, no feeling, show elevation if available
        const elevStr = a.elevM > 0 ? ` · ↑${a.elevM}m` : "";
        html += `<div class="hist-entry">
          <div class="hist-icon" style="background:${cfg.color}22;border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${cfg.icon}</div>
          <div class="hist-main">
            <div class="hist-label">${a.name}</div>
            <div class="hist-meta">${fmtDate(date)}${elevStr}</div>
            <div style="font-size:10px;font-weight:700;color:#fc4c02;margin-top:2px;letter-spacing:0.04em">STRAVA</div>
          </div>
          <div class="hist-right">
            <div class="hist-dist" style="color:${cfg.color}">${distStr}</div>
            <div class="hist-dur">${durStr}</div>
          </div>
        </div>`;
      } else {
        // Plan logged entry
        const feeling = a.log?.feeling !== undefined ? FEELINGS[a.log.feeling] : "";
        const metaParts = [fmtDate(date)];
        if (isBrick && a.log) metaParts.push(`Bike ${parseFloat(a.log.bikeDistance||0).toFixed(1)}km · Run ${parseFloat(a.log.runDistance||0).toFixed(1)}km`);
        metaParts.push(`Week ${a.wi+1}`);

        html += `<div class="hist-entry" onclick="openLog(${a.wi},${a.di},${a.cn})">
          <div class="hist-icon" style="background:${cfg.color}22;border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${cfg.icon}</div>
          <div class="hist-main">
            <div class="hist-label">${a.day.label}</div>
            <div class="hist-meta">${metaParts.join(" · ")}</div>
            ${feeling ? `<div style="font-size:11px;margin-top:2px">${feeling}</div>` : ""}
            ${a.log?.notes ? `<div style="font-size:11px;color:var(--faint);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.log.notes}</div>` : ""}
          </div>
          <div class="hist-right">
            <div class="hist-dist" style="color:${cfg.color}">${distStr}</div>
            <div class="hist-dur">${durStr}</div>
          </div>
        </div>`;
      }
    });

    html += `</div>`;
  });

  document.getElementById("hist-month-list").innerHTML = html;
  setTimeout(renderChart, 60);
}


// --- Init ---
function appInit() {
  const tabbar = document.getElementById('tabbar');
  if (tabbar) {
    tabbar.addEventListener('click', e => {
      const btn = e.target.closest('[data-tab]');
      if (!btn) return;
      showTab(btn.dataset.tab, btn);
    });
  }

  attachDelegatedHandlers();
  setTimeout(supaSync, 300);
  renderToday();
  renderPlan(0);
}

function attachDelegatedHandlers() {
  // Single document-level handler for all static data-action elements
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const action = el.dataset.action;
    const val = el.dataset.val;

    if (action === 'supaSync')       { supaSync(); }
    else if (action === 'stravaClear')    { clearStravaImports(); }
    else if (action === 'closeLog')  { closeLog(); }
    else if (action === 'deleteLog') { deleteLog(); }
    else if (action === 'chartMetric')  { setChartMetric(val, el); }
    else if (action === 'chartRange')   { setChartRange(val, el); }
    else if (action === 'toggleNotif')  { toggleNotifications(); }
    else if (action === 'toggleSkipRest') { toggleSkipRest(); }
    else if (action === 'sendTestNotif')  { sendTestNotif(); }
    else if (action === 'showPlanStart')  { showChangePlanStart(); }
    else if (action === 'savePlanStart')  { savePlanStart(); }
    else if (action === 'hidePlanStart')  { document.getElementById('plan-start-picker').style.display='none'; }
    else if (action === 'exportLogs')     { exportLogs(); }
    else if (action === 'fuelUnit')       { fuelSetUnit(val); }
    else if (action === 'fuelIntensity')  { fuelSetIntensity(el); }
    else if (action === 'fuelCond')       { fuelSetCond(el); }
    else if (action === 'fuelCalc')       { fuelCalc(); }
    else if (action === 'saveNotifTime')  { saveNotifTime(); }
  });

  // Range sliders need 'input' event not 'click'
  document.addEventListener('input', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const action = el.dataset.action;
    if (action === 'fuelCalc') fuelCalc();
    else if (action === 'saveNotifTime') saveNotifTime();
  });

  // Date/time inputs need 'change' event
  document.addEventListener('change', e => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    if (el.dataset.action === 'saveNotifTime') saveNotifTime();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', appInit);
} else {
  appInit();
}

// ─────────────────────────────────────────────
// FUEL CALCULATOR
// ─────────────────────────────────────────────
let fuelState = { unit: "metric", intensity: "moderate", cond: "cool" };

function fuelSetUnit(val) {
  fuelState.unit = val;
  document.getElementById("f-kg-btn").classList.toggle("active", val === "metric");
  document.getElementById("f-lb-btn").classList.toggle("active", val === "imperial");
  const wtSlider = document.getElementById("f-weight");
  if (val === "imperial") {
    wtSlider.min = 88; wtSlider.max = 287; wtSlider.step = 1;
    wtSlider.value = Math.round(parseFloat(wtSlider.value) * 2.205);
  } else {
    wtSlider.min = 40; wtSlider.max = 130; wtSlider.step = 1;
    wtSlider.value = Math.round(parseFloat(wtSlider.value) / 2.205);
  }
  fuelCalc();
}

function fuelSetIntensity(el) {
  fuelState.intensity = el.dataset.val;
  document.querySelectorAll("#f-intensity-group .fuel-btn").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
  fuelCalc();
}

function fuelSetCond(el) {
  fuelState.cond = el.dataset.val;
  document.querySelectorAll("#f-cond-group .fuel-btn").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
  fuelCalc();
}

function fuelCalc() {
  const durEl = document.getElementById("f-duration");
  const wtEl  = document.getElementById("f-weight");
  const heatEl = document.getElementById("f-heat");
  if (!durEl || !wtEl || !heatEl) return;

  const durMins = parseFloat(durEl.value) || 90;
  const wtRaw   = parseFloat(wtEl.value)  || 88;
  const heatLvl = parseInt(heatEl.value)  || 2; // 1=low, 2=mod, 3=high
  const wtKg    = fuelState.unit === "imperial" ? wtRaw / 2.205 : wtRaw;
  const durHrs  = durMins / 60;

  // Update display labels
  const durH = Math.floor(durMins / 60), durM = durMins % 60;
  document.getElementById("f-dur-out").textContent  = durH > 0 ? `${durH}h ${durM}m` : `${durM}m`;
  document.getElementById("f-wt-out").textContent   = fuelState.unit === "imperial" ? `${Math.round(wtRaw)} lb` : `${Math.round(wtRaw)} kg`;
  document.getElementById("f-wt-label").textContent = "Body weight";
  document.getElementById("f-heat-out").textContent = ["","Low","Moderate","High"][heatLvl];

  // Skip carb targets for sessions under 45 min
  if (durMins < 45) {
    document.getElementById("f-carb-results").innerHTML = `<div class="fuel-no-fuel">Sessions under 45 min don't require carbohydrate supplementation — water only.</div>`;
    document.getElementById("f-elec-results").innerHTML = `<div class="fuel-no-fuel">Focus on hydration — water is sufficient for short sessions.</div>`;
    document.getElementById("f-mix-results").innerHTML = "";
    return;
  }

  // Carb targets g/hr based on intensity
  const carbRateMap = { easy: 40, moderate: 60, hard: 80 };
  const carbRate = carbRateMap[fuelState.intensity] || 60; // g/hr
  const totalCarbs = Math.round(carbRate * durHrs);

  // Fluid targets ml/hr based on heat + body weight
  const baseFluid = fuelState.cond === "cool" ? 500 : fuelState.cond === "warm" ? 700 : 900;
  const weightAdj = Math.round((wtKg - 70) * 5); // +5ml per kg over 70kg
  const fluidPerHr = baseFluid + weightAdj;
  const totalFluid = Math.round(fluidPerHr * durHrs);

  // Sodium mg/hr
  const sodiumRateMap = { cool: 500, warm: 700, hot: 1000 };
  const sodiumRate = sodiumRateMap[fuelState.cond] || 700;
  const totalSodium = Math.round(sodiumRate * durHrs);

  // Gel/bar intervals
  const gelCarbs = 22; // avg gel
  const barCarbs = 40; // avg bar
  const gemsPerHr = Math.round(carbRate / gelCarbs);
  const intervalMins = Math.round(60 / gemsPerHr);

  document.getElementById("f-carb-results").innerHTML = `
    <div class="fuel-results-grid">
      <div class="fuel-stat"><div class="fuel-stat-label">Total carbs</div><div class="fuel-stat-num">${totalCarbs}</div><div class="fuel-stat-unit">grams</div></div>
      <div class="fuel-stat"><div class="fuel-stat-label">Per hour</div><div class="fuel-stat-num">${carbRate}</div><div class="fuel-stat-unit">g/hr</div></div>
      <div class="fuel-stat"><div class="fuel-stat-label">Gel interval</div><div class="fuel-stat-num">${intervalMins}</div><div class="fuel-stat-unit">mins</div></div>
    </div>
    <table class="fuel-table">
      <tr><td>Gels (~22g each)</td><td>1 every ${intervalMins} min = ~${Math.round(durMins/intervalMins)} total</td></tr>
      <tr><td>Bars (~40g each)</td><td>1 every ${Math.round(60/(carbRate/barCarbs))} min</td></tr>
      <tr><td>Start fuelling</td><td>${durMins > 60 ? "at 20 min — don't wait until hungry" : "at 30 min for sessions 45–60 min"}</td></tr>
    </table>
    <div class="fuel-tip">For your North Vancouver loop rides: fuel <strong>before</strong> the climb (km 0–10), not during it. Eating on steep gradients is uncomfortable and inefficient.</div>`;

  document.getElementById("f-elec-results").innerHTML = `
    <div class="fuel-results-grid">
      <div class="fuel-stat"><div class="fuel-stat-label">Total fluid</div><div class="fuel-stat-num">${totalFluid > 999 ? (totalFluid/1000).toFixed(1)+"L" : totalFluid}</div><div class="fuel-stat-unit">${totalFluid > 999 ? "" : "ml"}</div></div>
      <div class="fuel-stat"><div class="fuel-stat-label">Per hour</div><div class="fuel-stat-num">${fluidPerHr}</div><div class="fuel-stat-unit">ml/hr</div></div>
      <div class="fuel-stat"><div class="fuel-stat-label">Sodium</div><div class="fuel-stat-num">${totalSodium}</div><div class="fuel-stat-unit">mg total</div></div>
    </div>
    <table class="fuel-elec-table">
      <thead><tr><td>Electrolyte</td><td>Per hour</td><td>Total</td></tr></thead>
      <tbody>
        <tr><td><span class="fuel-elec-name">Sodium</span><span class="fuel-elec-source">Salt tabs, sports drink, electrolyte mix</span></td><td>${sodiumRate}mg</td><td>${totalSodium}mg</td></tr>
        <tr><td><span class="fuel-elec-name">Potassium</span><span class="fuel-elec-source">Banana, electrolyte tabs</span></td><td>150mg</td><td>${Math.round(150*durHrs)}mg</td></tr>
        <tr><td><span class="fuel-elec-name">Magnesium</span><span class="fuel-elec-source">Electrolyte mix, nuts</span></td><td>40mg</td><td>${Math.round(40*durHrs)}mg</td></tr>
      </tbody>
    </table>
    ${fuelState.cond === "hot" ? '<div class="fuel-warn">⚠️ Hot conditions: increase fluid by 20% and check urine colour — pale yellow is your target.</div>' : ""}`;

  const bottlesNeeded = Math.ceil(totalFluid / 750);
  document.getElementById("f-mix-results").innerHTML = `
    <table class="fuel-table">
      <tr><td>750ml bottles needed</td><td>${bottlesNeeded}</td></tr>
      <tr><td>Mix per bottle</td><td>1 scoop electrolyte powder + water</td></tr>
      <tr><td>Sip every</td><td>10–15 min — set a watch alarm</td></tr>
      <tr><td>At bottle refill</td><td>Take a gel or bite of bar with each bottle swap</td></tr>
    </table>
    <div class="fuel-tip">Practice this exact strategy on every long session — your gut needs training too. Never try new products on race day.</div>`;
}


// ─────────────────────────────────────────────
// CHART
// ─────────────────────────────────────────────
let chartMetric = "distance", chartRange = "week";
let chartInstance = null;

// Sport config for chart — distinct, high-contrast colours
const CHART_SPORTS = [
  { key:"run",   label:"Run",   icon:"🏃", color:"#34d399", bg:"#34d39966" }, // emerald
  { key:"bike",  label:"Bike",  icon:"🚴", color:"#60a5fa", bg:"#60a5fa66" }, // blue
  { key:"swim",  label:"Swim",  icon:"🏊", color:"#f472b6", bg:"#f472b666" }, // pink
  { key:"brick", label:"Brick", icon:"⚡", color:"#fbbf24", bg:"#fbbf2466" }, // amber
];

function setChartMetric(val, el) {
  chartMetric = val;
  document.querySelectorAll(".chart-filter-btn[data-action='chartMetric']").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
  renderChart();
}

function setChartRange(val, el) {
  chartRange = val;
  document.querySelectorAll(".chart-filter-btn[data-action='chartRange']").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("chart-range-label").textContent = { week:"Weekly", month:"Monthly", "6m":"6-Month", "1y":"Yearly" }[val] || "Weekly";
  renderChart();
}

function _buildBuckets() {
  const logs = getLogs();
  const cycleStartStr = localStorage.getItem("dt_cycle");
  if (!cycleStartStr) return { buckets:{}, cycleStart:null };
  const cycleStart = new Date(cycleStartStr);

  const dayData = {};
  // Plan logged workouts
  Object.entries(logs).forEach(([key, log]) => {
    if (!log?.completed) return;
    const m = key.match(/^C(\d+)-(\d+)-(\d+)$/);
    if (!m) return;
    const [, cn, wi, di] = m.map(Number);
    const week = PLAN.weeks[wi]; if (!week) return;
    const day = week.days[di]; if (!day || day.type === "rest") return;
    const totalDays = cn * (PLAN.weeks.length * 7) + wi * 7 + di;
    const d = new Date(cycleStart); d.setDate(d.getDate() + totalDays);
    const dateStr = d.toISOString().slice(0,10);
    const actType = log.activityType || day.type;
    const isBrick = actType === "brick";
    let dist = 0;
    if (isBrick) {
      dist = parseFloat(log.bikeDistance||0) + parseFloat(log.runDistance||0);
      if (dist === 0) dist = day.targetDistance || 0;
    } else {
      dist = parseFloat(log.distance||0);
      if (dist === 0) dist = day.targetDistance || 0;
    }
    const dur = parseFloat(log.duration||0);
    if (!dayData[dateStr]) dayData[dateStr] = { run:0, bike:0, swim:0, brick:0, durRun:0, durBike:0, durSwim:0, durBrick:0, sessions:0 };
    dayData[dateStr][actType] = (dayData[dateStr][actType]||0) + dist;
    const durKey = "dur"+actType[0].toUpperCase()+actType.slice(1);
    dayData[dateStr][durKey] = (dayData[dateStr][durKey]||0) + dur;
    dayData[dateStr].sessions++;
  });

  // Strava imported workouts — only add if no plan log exists for same date+type
  const planDateTypes = new Set(
    Object.keys(dayData).flatMap(date =>
      Object.keys(dayData[date]).filter(k => !k.startsWith("dur") && k !== "sessions" && dayData[date][k] > 0).map(k => `${date}:${k}`)
    )
  );
  getStravaImports().forEach(a => {
    if (!a.date) return;
    if (planDateTypes.has(`${a.date}:${a.type}`)) return; // plan log takes priority
    const actType = a.type;
    if (!dayData[a.date]) dayData[a.date] = { run:0, bike:0, swim:0, brick:0, durRun:0, durBike:0, durSwim:0, durBrick:0, sessions:0 };
    dayData[a.date][actType] = (dayData[a.date][actType]||0) + (a.distance_km||0);
    const durKey = "dur"+actType[0].toUpperCase()+actType.slice(1);
    dayData[a.date][durKey] = (dayData[a.date][durKey]||0) + (a.duration_mins||0);
    dayData[a.date].sessions++;
  });

  const buckets = {};
  Object.entries(dayData).forEach(([dateStr, d]) => {
    const date = new Date(dateStr+"T12:00:00");
    let key;
    if (chartRange === "week") {
      const diffDays = Math.floor((date - cycleStart) / 86400000);
      key = `W${Math.floor(diffDays/7)+1}`;
    } else {
      key = dateStr.slice(0,7);
    }
    if (!buckets[key]) buckets[key] = { run:0, bike:0, swim:0, brick:0, durRun:0, durBike:0, durSwim:0, durBrick:0, sessions:0 };
    ["run","bike","swim","brick","sessions"].forEach(k => buckets[key][k] = (buckets[key][k]||0) + (d[k]||0));
    ["durRun","durBike","durSwim","durBrick"].forEach(k => buckets[key][k] = (buckets[key][k]||0) + (d[k]||0));
  });

  return { buckets, cycleStart };
}

function renderChart() {
  const container = document.getElementById("chart-content");
  if (!container) return;

  const { buckets } = _buildBuckets();
  const maxBuckets = { week:10, month:6, "6m":6, "1y":12 }[chartRange] || 10;
  const labels = Object.keys(buckets).sort().slice(-maxBuckets);

  // ── Summary stats ──
  const allBucketVals = labels.map(l => buckets[l]);
  const totalSessions = allBucketVals.reduce((s,b)=>s+(b.sessions||0),0);
  const totalKm = allBucketVals.reduce((s,b)=>s+b.run+b.bike+b.swim+b.brick, 0);
  const totalMins = allBucketVals.reduce((s,b)=>s+b.durRun+b.durBike+b.durSwim+b.durBrick, 0);

  const trend = labels.length >= 2
    ? (() => {
        const prev = buckets[labels[labels.length-2]];
        const curr = buckets[labels[labels.length-1]];
        const prevV = prev.run+prev.bike+prev.swim+prev.brick;
        const currV = curr.run+curr.bike+curr.swim+curr.brick;
        if (currV > prevV * 1.05) return "↑";
        if (currV < prevV * 0.95) return "↓";
        return "→";
      })()
    : "—";
  const trendColor = trend === "↑" ? "#34d399" : trend === "↓" ? "#f472b6" : "#6d5b9e";

  const sportTiles = CHART_SPORTS.map(sp => {
    const km = allBucketVals.reduce((s,b)=>s+(b[sp.key]||0),0);
    if (km === 0) return "";
    const pct = totalKm > 0 ? Math.round((km/totalKm)*100) : 0;
    return `<div style="flex:1;background:#130c24;border:1px solid ${sp.color}33;border-top:3px solid ${sp.color};border-radius:10px;padding:8px 6px;text-align:center">
      <div style="font-size:15px">${sp.icon}</div>
      <div style="font-size:13px;font-weight:800;color:${sp.color};margin:2px 0">${km.toFixed(0)}<span style="font-size:9px;font-weight:600;color:#6d5b9e">km</span></div>
      <div style="font-size:9px;color:#4a3878;font-weight:700">${pct}%</div>
    </div>`;
  }).join("");

  if (!labels.length) {
    container.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px">
        <div style="background:#1a1040;border:1px solid #2a1a52;border-radius:12px;padding:10px 12px;text-align:center">
          <div style="font-size:9px;color:#4a3878;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px">Sessions</div>
          <div style="font-size:22px;font-weight:900;color:#c4b5fd">0</div>
          <div style="font-size:10px;color:#6d5b9e;margin-top:2px">logged</div>
        </div>
        <div style="background:#1a1040;border:1px solid #2a1a52;border-radius:12px;padding:10px 12px;text-align:center">
          <div style="font-size:9px;color:#4a3878;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px">Distance</div>
          <div style="font-size:22px;font-weight:900;color:#c4b5fd">—</div>
        </div>
        <div style="background:#1a1040;border:1px solid #2a1a52;border-radius:12px;padding:10px 12px;text-align:center">
          <div style="font-size:9px;color:#4a3878;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px">Time</div>
          <div style="font-size:22px;font-weight:900;color:#c4b5fd">—</div>
        </div>
      </div>
      <div class="chart-empty">Log some workouts to see your progress chart.</div>`;
    return;
  }

  // ── Build datasets ──
  const metricLabel = { distance:"km", duration:"hrs", sessions:"sessions" }[chartMetric] || "km";
  const datasets = CHART_SPORTS.map(sp => ({
    label: `${sp.icon} ${sp.label}`,
    backgroundColor: sp.bg,
    borderColor: sp.color,
    borderWidth: 1.5,
    borderRadius: 4,
    data: labels.map(l => {
      const b = buckets[l]; if (!b) return 0;
      if (chartMetric === "distance") return parseFloat((b[sp.key]||0).toFixed(1));
      if (chartMetric === "duration") {
        const durKey = "dur"+sp.key[0].toUpperCase()+sp.key.slice(1);
        return parseFloat(((b[durKey]||0)/60).toFixed(1));
      }
      if (chartMetric === "sessions") return b.sessions||0;
      return 0;
    })
  })).filter(ds => ds.data.some(v => v > 0));

  // ── Render everything into container in one shot — no overlap possible ──
  if (chartInstance) { try { chartInstance.destroy(); } catch(e) {} chartInstance = null; }

  container.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px">
      <div style="background:#1a1040;border:1px solid #2a1a52;border-radius:12px;padding:10px 12px;text-align:center">
        <div style="font-size:9px;color:#4a3878;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px">Sessions</div>
        <div style="font-size:22px;font-weight:900;color:#c4b5fd;letter-spacing:-0.5px">${totalSessions}</div>
        <div style="font-size:10px;color:#6d5b9e;margin-top:2px">logged</div>
      </div>
      <div style="background:#1a1040;border:1px solid #2a1a52;border-radius:12px;padding:10px 12px;text-align:center">
        <div style="font-size:9px;color:#4a3878;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px">Distance</div>
        <div style="font-size:22px;font-weight:900;color:#c4b5fd;letter-spacing:-0.5px">${totalKm.toFixed(0)}<span style="font-size:12px;font-weight:600;color:#6d5b9e">km</span></div>
        <div style="font-size:10px;color:${trendColor};margin-top:2px;font-weight:700">${trend} vs prev</div>
      </div>
      <div style="background:#1a1040;border:1px solid #2a1a52;border-radius:12px;padding:10px 12px;text-align:center">
        <div style="font-size:9px;color:#4a3878;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:4px">Time</div>
        <div style="font-size:22px;font-weight:900;color:#c4b5fd;letter-spacing:-0.5px">${totalMins>0?Math.floor(totalMins/60):"—"}<span style="font-size:12px;font-weight:600;color:#6d5b9e">${totalMins>0?"h":""}</span></div>
        <div style="font-size:10px;color:#6d5b9e;margin-top:2px">total</div>
      </div>
    </div>
    ${sportTiles ? `<div style="display:flex;gap:6px;margin-bottom:14px">${sportTiles}</div>` : ""}
    <div style="position:relative;height:180px;width:100%;overflow:hidden">
      <canvas id="progress-chart" style="display:block;max-height:180px"></canvas>
    </div>`;

  const newCanvas = document.getElementById("progress-chart");
  const newCtx = newCanvas.getContext("2d");

  const drawFn = () => _drawChart(newCanvas, newCtx, labels, datasets, metricLabel);
  if (typeof Chart === "undefined") {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js";
    s.onload = drawFn;
    document.head.appendChild(s);
  } else {
    drawFn();
  }
}

function _drawChart(canvas, ctx, labels, datasets, metricLabel) {
  canvas.style.height = "180px";
  chartInstance = new Chart(ctx, {
    type: "bar",
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode:"index", intersect:false },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#9d8ec7",
            font: { size: 10, weight:"700" },
            boxWidth: 10,
            boxHeight: 10,
            borderRadius: 3,
            padding: 12,
          }
        },
        tooltip: {
          backgroundColor: "#180f2e",
          borderColor: "#2a1a52",
          borderWidth: 1,
          titleColor: "#c4b5fd",
          bodyColor: "#9d8ec7",
          padding: 10,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y} ${metricLabel}`
          }
        }
      },
      scales: {
        x: {
          grouped: true,
          ticks: { color:"#6d5b9e", font:{ size:10, weight:"600" } },
          grid: { color:"#2a1a5220" },
        },
        y: {
          ticks: { color:"#6d5b9e", font:{ size:10 }, callback: v => `${v}${metricLabel==="km"?" km":metricLabel==="hrs"?"h":""}` },
          grid: { color:"#2a1a5240" },
          beginAtZero: true,
        }
      }
    }
  });
}


// ─────────────────────────────────────────────
// SETTINGS / NOTIFICATIONS
// ─────────────────────────────────────────────
function initSettingsScreen() {
  const pin = getUserPin();
  const startStr = localStorage.getItem("dt_cycle");
  const startDisp = document.getElementById("plan-start-display");
  if (startDisp) {
    if (startStr) {
      const d = new Date(startStr);
      startDisp.textContent = d.toLocaleDateString("en-GB", { weekday:"short", day:"numeric", month:"long", year:"numeric" });
    } else {
      startDisp.textContent = "Not set — defaults to current week";
    }
  }

  // Notification toggle state
  const notifOn = localStorage.getItem("notif_enabled") === "true";
  const skipRest = localStorage.getItem("notif_skip_rest") !== "false"; // default true
  const notifToggle = document.getElementById("notif-toggle");
  const skipToggle  = document.getElementById("notif-skip-rest");
  if (notifToggle) notifToggle.classList.toggle("on", notifOn);
  if (skipToggle)  skipToggle.classList.toggle("on", skipRest);

  const timeEl = document.getElementById("notif-time");
  if (timeEl) timeEl.value = localStorage.getItem("notif_time") || "07:00";

  updateNotifStatus();
}

function updateNotifStatus() {
  const el = document.getElementById("notif-status");
  if (!el) return;
  if (!("Notification" in window)) {
    el.textContent = "Notifications not supported in this browser.";
    return;
  }
  const perm = Notification.permission;
  const enabled = localStorage.getItem("notif_enabled") === "true";
  if (perm === "denied") el.textContent = "Notifications blocked — enable in browser settings.";
  else if (!enabled) el.textContent = "Notifications off.";
  else if (perm === "granted") el.textContent = "✓ Notifications enabled.";
  else el.textContent = "Permission not yet granted — toggle on to request.";
}

function toggleNotifications() {
  const current = localStorage.getItem("notif_enabled") === "true";
  const newVal = !current;
  if (newVal && "Notification" in window && Notification.permission === "default") {
    Notification.requestPermission().then(perm => {
      if (perm === "granted") {
        localStorage.setItem("notif_enabled", "true");
        document.getElementById("notif-toggle").classList.add("on");
      } else {
        localStorage.setItem("notif_enabled", "false");
        document.getElementById("notif-toggle").classList.remove("on");
      }
      updateNotifStatus();
    });
    return;
  }
  localStorage.setItem("notif_enabled", String(newVal));
  document.getElementById("notif-toggle").classList.toggle("on", newVal);
  updateNotifStatus();
}

function toggleSkipRest() {
  const current = localStorage.getItem("notif_skip_rest") !== "false";
  const newVal = !current;
  localStorage.setItem("notif_skip_rest", String(newVal));
  document.getElementById("notif-skip-rest").classList.toggle("on", newVal);
}

function saveNotifTime() {
  const el = document.getElementById("notif-time");
  if (el) localStorage.setItem("notif_time", el.value);
}

function sendTestNotif() {
  if (!("Notification" in window)) { alert("Notifications not supported in this browser."); return; }
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(p => { if (p === "granted") _fireTestNotif(); else alert("Please allow notifications first."); });
    return;
  }
  _fireTestNotif();
}

function _fireTestNotif() {
  const wi = getCurrentWeek();
  const today = new Date();
  const todayName = DAYS[today.getDay()];
  const week = PLAN.weeks[wi];
  const session = week?.days.find(d => d.day === todayName);
  const title = "Ironman Tracker";
  const body = session && session.type !== "rest"
    ? `Today: ${session.label} — let's go! 💪`
    : "Rest day — recover well 💤";
  new Notification(title, { body, icon: "/icon-192.png" });
}

function showChangePlanStart() {
  const picker = document.getElementById("plan-start-picker");
  if (!picker) return;
  picker.style.display = picker.style.display === "none" ? "block" : "none";
  const input = document.getElementById("plan-start-input");
  if (input) {
    const s = localStorage.getItem("dt_cycle");
    if (s) input.value = new Date(s).toISOString().slice(0,10);
  }
}

function savePlanStart() {
  const input = document.getElementById("plan-start-input");
  if (!input?.value) return;
  // Force Monday
  const d = new Date(input.value + "T12:00:00");
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0,0,0,0);
  localStorage.setItem("dt_cycle", d.toISOString());
  document.getElementById("plan-start-picker").style.display = "none";
  initSettingsScreen();
  renderToday();
  renderPlan(getCurrentWeek());
}

function exportLogs() {
  const logs = getLogs();
  const output = Object.entries(logs).map(([key, log]) => {
    const m = key.match(/^C(\d+)-(\d+)-(\d+)$/);
    if (!m) return null;
    const [, cn, wi, di] = m.map(Number);
    const week = PLAN.weeks[wi]; if (!week) return null;
    const day = week.days[di]; if (!day) return null;
    const cycleStartStr = localStorage.getItem("dt_cycle");
    let date = "";
    if (cycleStartStr) {
      const cs = new Date(cycleStartStr);
      const totalDays = cn * (PLAN.weeks.length * 7) + wi * 7 + di;
      const d2 = new Date(cs); d2.setDate(cs.getDate() + totalDays);
      date = d2.toISOString().slice(0,10);
    }
    return { date, week: wi+1, day: day.day, session: day.label, ...log };
  }).filter(Boolean);

  const blob = new Blob([JSON.stringify(output, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "ironman-logs.json"; a.click();
  URL.revokeObjectURL(url);
}

// ─────────────────────────────────────────────
// STRAVA IMPORT FOR HISTORY
// ─────────────────────────────────────────────

// Separate localStorage key — never touches plan logs
function getStravaImports() { try { return JSON.parse(localStorage.getItem("strava_imports")||"[]"); } catch { return []; } }
function saveStravaImports(arr) { localStorage.setItem("strava_imports", JSON.stringify(arr)); }
function clearStravaImports() {
  if (!confirm("Remove all imported Strava activities from history?")) return;
  saveStravaImports([]);
  renderStravaImportBar();
  renderHistory();
}


function renderStravaImportBar() {
  const el = document.getElementById("strava-import-bar");
  if (!el) return;
  const imports = getStravaImports();
  const count = imports.length;
  const lastSync = localStorage.getItem("strava_import_date");
  const lastStr = lastSync ? new Date(lastSync).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}) : null;

  el.innerHTML = `<div style="background:#1a0d08;border:1px solid #fc4c0244;border-radius:12px;padding:14px 16px;margin-bottom:16px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:${count > 0 ? 0 : 10}px">
      <div>
        <div style="font-size:13px;font-weight:900;color:#fc4c02;letter-spacing:-0.5px">STRAVA</div>
        <div style="font-size:12px;color:#6d5b9e;margin-top:2px">
          ${count > 0
            ? `${count} activities imported${lastStr ? " · " + lastStr : ""}`
            : "Upload your Strava activities.csv to populate history"}
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        ${count > 0 ? `<button style="background:transparent;border:1px solid #fc4c0266;color:#fc4c02;border-radius:8px;padding:7px 14px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit" data-action="stravaClear">Clear</button>` : ""}
        <label style="background:#fc4c02;color:#fff;border-radius:8px;padding:7px 14px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap">
          ${count > 0 ? "Replace CSV" : "Upload CSV"}
          <input type="file" accept=".csv" style="display:none" onchange="handleStravaCsv(event)">
        </label>
      </div>
    </div>
    ${count === 0 ? `<div style="font-size:11px;color:#4a3878;line-height:1.6">Strava → Settings → My Account → Download or Delete Your Data → Request Archive → upload <strong style="color:#6d5b9e">activities.csv</strong></div>` : ""}
  </div>`;
}

function handleStravaCsv(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const text = e.target.result;
      const lines = text.split("\n").filter(l => l.trim());
      if (lines.length < 2) { alert("CSV appears empty."); return; }

      // Parse header row — Strava CSV headers vary by locale so find by name
      const headers = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase().replace(/[^a-z0-9]/g,"_"));
      const col = name => headers.indexOf(name);

      // Map common Strava CSV column names
      const iDate      = col("activity_date") >= 0 ? col("activity_date") : col("date");
      const iName      = col("activity_name") >= 0 ? col("activity_name") : col("name");
      const iType      = col("activity_type") >= 0 ? col("activity_type") : col("type");
      const iDist      = col("distance") >= 0 ? col("distance") : -1;
      const iTime      = col("moving_time") >= 0 ? col("moving_time") : col("elapsed_time") >= 0 ? col("elapsed_time") : -1;
      const iElev      = col("elevation_gain") >= 0 ? col("elevation_gain") : col("total_elevation_gain") >= 0 ? col("total_elevation_gain") : -1;
      const iId        = col("activity_id") >= 0 ? col("activity_id") : col("id") >= 0 ? col("id") : -1;

      if (iDate < 0 || iType < 0) {
        alert("Could not find required columns (date, type) in CSV. Make sure you're uploading the Strava activities.csv file.");
        return;
      }

      const activities = [];
      for (let i = 1; i < lines.length; i++) {
        const cols = parseCSVLine(lines[i]);
        if (cols.length < 3) continue;

        const rawDate = cols[iDate]?.trim() || "";
        const rawType = cols[iType]?.trim() || "";
        const name    = cols[iName]?.trim() || "Strava Activity";
        const distRaw = iDist >= 0 ? cols[iDist]?.trim() : "";
        const timeRaw = iTime >= 0 ? cols[iTime]?.trim() : "";
        const elevRaw = iElev >= 0 ? cols[iElev]?.trim() : "";
        const idRaw   = iId  >= 0 ? cols[iId]?.trim()  : String(i);

        // Parse date — Strava uses "MMM DD, YYYY, HH:MM:SS AM" or ISO formats
        const date = parseStravaDate(rawDate);
        if (!date) continue;

        // Distance: Strava exports in km already
        const distKm = parseFloat(distRaw.replace(/,/g,"")) || 0;

        // Time: Strava exports moving_time in seconds
        const durMins = timeRaw ? parseFloat(timeRaw.replace(/,/g,"")) / 60 : 0;

        // Elevation in metres
        const elevM = parseFloat(elevRaw.replace(/,/g,"")) || 0;

        const type = normaliseStravaType(rawType);

        activities.push({
          id: idRaw || String(i),
          name,
          type,
          distance_km: Math.round(distKm * 100) / 100,
          duration_mins: Math.round(durMins * 100) / 100,
          elevation_m: Math.round(elevM),
          date,
          source: "strava",
        });
      }

      if (activities.length === 0) {
        alert("No activities found in CSV. Check the file is the Strava activities.csv export.");
        return;
      }

      // Deduplicate by id
      const existing = getStravaImports();
      const existingIds = new Set(existing.map(a => String(a.id)));
      const newOnes = activities.filter(a => !existingIds.has(String(a.id)));
      const merged = [...existing, ...newOnes].sort((a,b) => b.date.localeCompare(a.date));

      saveStravaImports(merged);
      localStorage.setItem("strava_import_date", new Date().toISOString());
      renderStravaImportBar();
      renderHistory();
    } catch(err) {
      console.error("CSV parse error:", err);
      alert("Failed to parse CSV: " + err.message);
    }
  };
  reader.readAsText(file);
}

function parseCSVLine(line) {
  // Handles quoted fields with commas inside
  const result = [];
  let cur = "", inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuote && line[i+1] === '"') { cur += '"'; i++; }
      else inQuote = !inQuote;
    } else if (ch === ',' && !inQuote) {
      result.push(cur); cur = "";
    } else {
      cur += ch;
    }
  }
  result.push(cur);
  return result;
}

function parseStravaDate(raw) {
  if (!raw) return null;
  // Try ISO first: "2026-06-09" or "2026-06-09T07:30:00Z"
  const iso = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (iso) return iso[1];
  // Strava default: "Jun 9, 2026, 7:30:00 AM" or "Jun 09, 2026, 07:30:00 AM"
  const m = raw.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})/);
  if (m) {
    const months = {jan:"01",feb:"02",mar:"03",apr:"04",may:"05",jun:"06",jul:"07",aug:"08",sep:"09",oct:"10",nov:"11",dec:"12"};
    const mo = months[m[1].toLowerCase().slice(0,3)];
    if (mo) return `${m[3]}-${mo}-${m[2].padStart(2,"0")}`;
  }
  // Last resort: let Date parse it
  try {
    const d = new Date(raw);
    if (!isNaN(d)) return d.toISOString().slice(0,10);
  } catch(e) {}
  return null;
}

function normaliseStravaType(raw) {
  const t = (raw||"").toLowerCase();
  if (t === "run" || t === "trailrun") return "run";
  if (t === "ride" || t === "virtualride" || t === "mountainbikeride" || t === "gravelride") return "bike";
  if (t === "swim") return "swim";
  return "run"; // default
}
