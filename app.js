const ICON = {
  bars: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 8h22M9 8v19M23 8v19M5 27h8M19 27h8"/></svg>',
  beam: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="3" y="12" width="26" height="4" rx="1.5" fill="currentColor" stroke="none"/><path d="M9 16l-3 11M23 16l3 11"/></svg>',
  floor: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="4" y="18" width="24" height="8" rx="2"/><circle cx="16" cy="7" r="2.6" fill="currentColor" stroke="none"/><path d="M16 10v5M11 13l5 2 5-2"/></svg>',
  vault: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 27l7-4h4"/><rect x="16" y="13" width="13" height="7" rx="3"/><path d="M19 20v7M26 20v7"/></svg>',
  rod: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="20" width="28" height="6" rx="2"/><path d="M6 20c0-5 4-9 8-9M14 11l-2-3M14 11l-3 1"/><circle cx="21" cy="8" r="2.4" fill="currentColor" stroke="none"/></svg>',
  dmt: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h12l12-6"/><path d="M5 22v5M14 22v5M25 17v10"/><circle cx="22" cy="6" r="2.4" fill="currentColor" stroke="none"/><path d="M22 9v4"/></svg>',
  tramp: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c4 3 22 3 26 0"/><path d="M6 22l-1 6M26 22l1 6M16 24v4"/><circle cx="16" cy="6" r="2.4" fill="currentColor" stroke="none"/><path d="M16 9v6M12 12l4-2 4 2"/></svg>'
};
const EVENT_LABEL = { bars: "Bars", beam: "Beam", floor: "Floor", vault: "Vault", rod: "Tumbling", dmt: "Double Mini", tramp: "Trampoline" };

const PROGRAMS = {
  gym: { label: "Gymnastics", events: ["bars", "beam", "floor", "vault"], order: ["gym-girls", "cartwheels", "dynamos", "spirals"],
         tabs: ["start", "preschool", "gym-girls", "cartwheels", "dynamos", "spirals", "more", "words"] },
  tnt: { label: "Trampoline & Tumbling", events: ["rod", "tramp", "dmt"], order: ["firecrackers", "tnt-1", "tnt-2", "tnt-3"],
         tabs: ["start", "firecrackers", "tnt-1", "tnt-2", "tnt-3", "words"] }
};
const LEO = { pink: "var(--leo-pink)", blue: "var(--leo-blue)", red: "var(--leo-red)", black: "var(--leo-black)" };
const progOf = id => (CLASSES[id] && CLASSES[id].program) || (id === "preschool" || id === "more" ? "gym" : null);
const colorOf = c => c.color || LEO[c.leo];
const badgeOf = c => c.badge || c.leoName;
const factsOf = c => c.facts || [c.age, c.len, c.level].filter(Boolean);

const TAB_LABEL = { start: "Start here", preschool: "Preschool", more: "Galaxy & Homeschool", words: "Gym words" };
const tabLabel = id => TAB_LABEL[id] || CLASSES[id].name;
const tabDot = id => CLASSES[id] ? colorOf(CLASSES[id]) : (id === "preschool" ? "var(--leo-none)" : null);
const ALL_TABS = [...new Set([...PROGRAMS.gym.tabs, ...PROGRAMS.tnt.tabs])];

const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const leoSVG = c => `<svg class="leo" viewBox="0 0 64 76" aria-hidden="true"><path d="M18 4c4 6 9 9 14 9s10-3 14-9l10 4c-2 10-4 17-6 22l-3 2c-1 10 0 20 4 30-6 6-13 10-19 10s-13-4-19-10c4-10 5-20 4-30l-3-2C12 25 10 18 8 8z" fill="${c}" stroke="var(--line)" stroke-width="1.5"/></svg>`;
const badgeSVG = c => `<span class="lvl" style="background:${c}" aria-hidden="true">${ICON.tramp}</span>`;

const view = document.getElementById("view");
const rail = document.getElementById("rail");
const progBar = document.getElementById("programs");
let currentEvent = null;
let program = "gym";
try { const p = localStorage.getItem("wk-program"); if (PROGRAMS[p]) program = p; } catch (e) {}

function buildRail() {
  rail.innerHTML = PROGRAMS[program].tabs.map(id => {
    const d = tabDot(id);
    return `<button class="tab" role="tab" id="tab-${id}" data-id="${id}" aria-selected="false">${d ? `<span class="dot" style="background:${d}"></span>` : ""}${tabLabel(id)}</button>`;
  }).join("");
  progBar.querySelectorAll(".prog").forEach(b => b.setAttribute("aria-pressed", b.dataset.prog === program));
}
function setProgram(p) {
  if (program === p) return;
  program = p;
  try { localStorage.setItem("wk-program", p); } catch (e) {}
  buildRail();
}
progBar.addEventListener("click", e => {
  const b = e.target.closest(".prog"); if (!b) return;
  const p = b.dataset.prog; const cur = location.hash.slice(1);
  setProgram(p);
  if (cur === "start" || cur === "words" || !cur) render(); else go(PROGRAMS[p].order[0]);
});

rail.addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) go(b.dataset.id); });
const railPrev = document.getElementById("railPrev"), railNext = document.getElementById("railNext");
function updateArrows() {
  railPrev.hidden = rail.scrollLeft <= 4;
  railNext.hidden = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4;
}
railPrev.addEventListener("click", () => rail.scrollBy({ left: -rail.clientWidth * 0.7, behavior: "smooth" }));
railNext.addEventListener("click", () => rail.scrollBy({ left: rail.clientWidth * 0.7, behavior: "smooth" }));
rail.addEventListener("scroll", updateArrows, { passive: true });
window.addEventListener("resize", updateArrows);
if (document.fonts) document.fonts.ready.then(updateArrows);

function go(id) { if (location.hash !== "#" + id) location.hash = id; else render(); }

function pathHTML(here) {
  const order = PROGRAMS[CLASSES[here].program || "gym"].order;
  return `<div class="path" aria-label="Class path">${order.map((id, i) => `${i ? '<span class="arrow" aria-hidden="true">→</span>' : ""}<button class="step${id === here ? " here" : ""}" data-go="${id}"><span class="dot" style="background:${colorOf(CLASSES[id])}"></span>${CLASSES[id].name}</button>`).join("")}</div>`;
}

function classPanel(id) {
  const c = CLASSES[id], prog = c.program || "gym", P = PROGRAMS[prog];
  const i = P.order.indexOf(id), next = P.order[i + 1];
  if (!P.events.includes(currentEvent)) currentEvent = P.events[0];
  const evBtns = P.events.map(k => `<button class="ev" data-ev="${k}" aria-pressed="${k === currentEvent}">${ICON[k]}${EVENT_LABEL[k]}</button>`).join("");
  const afterLast = prog === "gym"
    ? `Some Spirals athletes are invited to our pre-competitive Galaxy Team, by coach referral. Others keep growing in Spirals. Ask your athlete's coach what they see next.`
    : `Ask your athlete's coach what comes next. Strong basics at this level make every new skill safer.`;
  return `
  <div class="hero">${prog === "gym" ? leoSVG(colorOf(c)) : badgeSVG(colorOf(c))}<div>
    <span class="eyebrow">${badgeOf(c)}</span>
    <h2>${c.name}</h2>
    <div class="facts">${factsOf(c).map(f => `<span class="fact">${f}</span>`).join("")}</div>
  </div></div>
  <p class="lede">${c.summary}</p>
  ${pathHTML(id)}
  <div class="callout"><p>${c.focus}</p></div>
  <div style="display:flex;flex-direction:column;gap:10px">
    <span class="eyebrow">What your athlete is working on</span>
    <div class="events" role="group" aria-label="Choose an event" style="grid-template-columns:repeat(${P.events.length},1fr)">${evBtns}</div>
    <p class="ev-intro" id="evIntro"></p>
    <ol class="skills" id="skills"></ol>
    <p class="muted" style="font-size:14.5px">Skills are listed in the order they're learned, 1 to 3. Tap "Why it matters" to see what each one leads to.</p>
  </div>
  <a class="print-card" href="charts/WinKids-${id}-star-chart.pdf" target="_blank" rel="noopener">
    <span class="ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z"/></svg></span>
    <span><b>Print a sticker chart</b><span class="sub">Track these skills at home. Add a star sticker as your athlete reaches each step.</span></span>
    <span class="go" aria-hidden="true">Open PDF</span>
  </a>
  <div class="card">
    <h3>${next ? `Moving up to ${CLASSES[next].name}` : `What comes after ${c.name}`}</h3>
    <p>${next
      ? `Your coach recommends moving up once your athlete can do the skills here safely and on their own, with good form. Some events will click faster than others. That's normal, and it doesn't mean they're behind.`
      : afterLast}</p>
  </div>`;
}

function renderSkills(id) {
  const list = CLASSES[id].skills[currentEvent];
  document.getElementById("evIntro").textContent = EVENT_INFO[currentEvent];
  document.getElementById("skills").innerHTML = list.map((s, i) => `
    <li><span class="num" aria-hidden="true">${i + 1}</span>
      <span class="sk-name">${esc(s[0])}</span>
      <span class="sk-plain">${esc(s[1])}</span>
      <details class="why"><summary>Why it matters</summary><p>${esc(s[2])}</p></details>
    </li>`).join("");
  view.querySelectorAll(".ev").forEach(b => b.setAttribute("aria-pressed", b.dataset.ev === currentEvent));
}

const classLinks = order => order.map(id => `<button class="step" data-go="${id}" style="padding:4px 0"><span class="dot" style="background:${colorOf(CLASSES[id])}"></span>${CLASSES[id].leoName ? CLASSES[id].leoName + " · " : ""}${CLASSES[id].name}</button>`).join("");

function startPanel() {
  return `
  <h2 style="font-size:30px;font-weight:800">Welcome to Win Kids</h2>
  <p class="lede">Most parents didn't grow up doing gymnastics or trampoline, so the names and the pace can be a mystery. This guide shows what your athlete is working on in class, in plain words, and why it matters.</p>
  <div class="card">
    <span class="eyebrow">Find your athlete's class</span>
    <h3>Gymnastics</h3>
    <p class="muted" style="font-size:15.5px">Match your athlete's leo color.</p>
    <div style="display:flex;flex-wrap:wrap;gap:4px 16px;font-weight:700">${classLinks(PROGRAMS.gym.order)}</div>
    <h3 style="margin-top:8px">Trampoline &amp; Tumbling</h3>
    <p class="muted" style="font-size:15.5px">Coed classes. Pick your athlete's level, or ask the front desk.</p>
    <div style="display:flex;flex-wrap:wrap;gap:4px 16px;font-weight:700">${classLinks(PROGRAMS.tnt.order)}</div>
  </div>

  <div class="callout">
    <h3>Why skills take time</h3>
    <p>Gymnastics and tumbling are built in layers, like learning to read. Letters come before words, and words before stories. A cartwheel needs strong arms, strong shoulders, a tight body, and the confidence to be upside down. Each of those takes weeks of practice.</p>
    <p>It's normal for an athlete to stay in one class for many months, sometimes a year or more. Much of the progress is strength your athlete is building on the inside, and it shows up all at once later.</p>
  </div>

  <div class="card">
    <h3>How a skill is learned</h3>
    <div class="ladder">
      <div class="rung"><span class="num" style="width:26px;height:26px;font-size:13px">1</span><div><b>Build the strength</b><span class="muted">Hangs, holds, jumps and drills that look simple but are hard work.</span></div></div>
      <div class="rung"><span class="num" style="width:26px;height:26px;font-size:13px">2</span><div><b>Practice with help</b><span class="muted">A wedge mat, a learning mat, a wall, or a coach's hand makes it safe to try.</span></div></div>
      <div class="rung"><span class="num" style="width:26px;height:26px;font-size:13px">3</span><div><b>Do it alone</b><span class="muted">The help comes away one piece at a time.</span></div></div>
      <div class="rung"><span class="num" style="width:26px;height:26px;font-size:13px">4</span><div><b>Make it clean</b><span class="muted">Straight legs, pointed toes, a stuck landing. Then it's ready to build on.</span></div></div>
    </div>
  </div>

  <div style="display:flex;flex-direction:column;gap:10px">
    <span class="eyebrow">Gymnastics events</span>
    <div class="grid2">
      <div class="card">${ICON.bars}<h3>Bars</h3><p>Swinging and holding their own weight.</p></div>
      <div class="card">${ICON.beam}<h3>Beam</h3><p>Balance and focus on a narrow beam.</p></div>
      <div class="card">${ICON.floor}<h3>Floor</h3><p>Rolls, handstands, cartwheels and dance.</p></div>
      <div class="card">${ICON.vault}<h3>Vault</h3><p>Run, bounce off a board, land safely.</p></div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px">
    <span class="eyebrow">Trampoline &amp; Tumbling events</span>
    <div class="grid3">
      <div class="card">${ICON.rod}<h3>Tumbling</h3><p>Rolls and handstands up to back handsprings.</p></div>
      <div class="card">${ICON.tramp}<h3>Trampoline</h3><p>Jump shapes, drops, then flips.</p></div>
      <div class="card">${ICON.dmt}<h3>Double Mini</h3><p>Run, bounce, skill, land.</p></div>
    </div>
  </div>

  <div class="card">
    <h3>How you can help</h3>
    <ul class="tips">
      <li><b>Come every week.</b> Strength builds with steady practice, and missed weeks slow it down more than you'd think.</li>
      <li><b>Ask what they worked on.</b> Try: "What was your favorite thing today?" Use the class page to know the words.</li>
      <li><b>Praise the effort.</b> "You kept trying that handstand!" helps more than asking when they'll get it.</li>
      <li><b>Trust the slow parts.</b> A plateau usually means they're getting stronger before the next skill clicks.</li>
      <li><b>Put a sticker chart on the fridge.</b> Each class tab has one to print. Celebrating small steps keeps kids excited.</li>
      <li><b>Talk to the coach.</b> Coaches decide when an athlete is ready to move up, and they're happy to tell you what's next.</li>
    </ul>
  </div>`;
}

function preschoolPanel() {
  return `
  <div><span class="eyebrow">Ages 2–5 · Preschool gymnastics</span><h2 style="font-size:32px;font-weight:800">Preschool</h2></div>
  <p class="lede">Every preschool class uses obstacle courses built around crawling, jumping and balancing. It looks like play, and it's on purpose.</p>
  <div class="callout">
    <h3>Why obstacle courses?</h3>
    <p>Young kids learn movement by doing. Crawling through tunnels, jumping on trampolines and walking low beams build coordination, balance and body awareness. They also learn to listen, wait their turn and follow a coach. These are the foundation for every skill in our grade-school classes.</p>
  </div>
  <div class="pre-list">
    ${PRESCHOOL.map(p => `<div class="card"><h3>${p[0]}</h3><span class="age">${p[1]}</span><span class="tag" style="grid-column:1/-1">${p[2]}</span><p>${p[3]}</p></div>`).join("")}
  </div>
  <div class="card">
    <h3>What progress looks like at this age</h3>
    <p>Look for small wins: jumping with two feet together, walking a low beam without help, waiting for a turn, trying something new without being nervous. Those are big steps for a preschooler.</p>
    <p class="muted">Around age 5–6, preschoolers move into <button class="step" data-go="gym-girls" style="padding:0;display:inline-flex"><span class="dot" style="background:var(--leo-pink)"></span>Gym Girls</button>, our first grade-school gymnastics class.</p>
    <p class="muted">Looking for preschool trampoline? See <button class="step" data-go="firecrackers" style="padding:0;display:inline-flex"><span class="dot" style="background:var(--tnt-fire)"></span>Firecrackers</button>.</p>
  </div>`;
}

function morePanel() {
  return `
  <div class="card">
    <span class="eyebrow">Ages 6–12 · Team practice leo · 2 hrs/week</span>
    <h3 style="font-size:24px">Galaxy Team</h3>
    <p>Our pre-competitive team, by coach referral only. Galaxy athletes train longer each week and start preparing for competition.</p>
    <p class="muted">Want to know what your athlete is working on? Ask the head coach for their current skills.</p>
  </div>
  <div class="card">
    <span class="eyebrow">Ages 5+ · 55 min · Mixed levels</span>
    <h3 style="font-size:24px">Homeschool Gymnastics</h3>
    <p>A daytime class for homeschool families, working on all four events: bars, beam, floor and vault. The focus is coordination, strength and confidence.</p>
    <p class="muted">Athletes in this class are at different levels. Ask the coach which skill list fits your athlete, then use that class tab to follow along.</p>
  </div>`;
}

function wordsPanel() {
  return `
  <div><h2 style="font-size:30px;font-weight:800">Gym words</h2><p class="muted" style="margin-top:4px">The words you'll hear coaches use, in plain English.</p></div>
  <label for="q" class="eyebrow">Search</label>
  <input id="q" class="search" type="search" placeholder="Try &quot;round off&quot; or &quot;pike&quot;" autocomplete="off">
  <dl class="gloss" id="gloss"></dl>`;
}
function renderGloss(q = "") {
  q = q.trim().toLowerCase();
  const rows = GLOSSARY.filter(g => !q || (g[0] + " " + g[1]).toLowerCase().includes(q)).sort((a, b) => a[0].localeCompare(b[0]));
  document.getElementById("gloss").innerHTML = rows.length
    ? rows.map(g => `<div><dt>${esc(g[0])}</dt><dd>${esc(g[1])}</dd></div>`).join("")
    : `<div><dd>No match. Ask your coach, they'll be glad to explain.</dd></div>`;
}

function render() {
  let id = location.hash.slice(1);
  if (!ALL_TABS.includes(id)) id = "start";
  const p = progOf(id);
  if (p && p !== program) setProgram(p);
  rail.querySelectorAll(".tab").forEach(b => b.setAttribute("aria-selected", b.dataset.id === id));
  const tabEl = document.getElementById("tab-" + id);
  if (tabEl) rail.scrollTo({ left: tabEl.offsetLeft - (rail.clientWidth - tabEl.offsetWidth) / 2 });
  updateArrows();
  let html;
  if (CLASSES[id]) html = classPanel(id);
  else if (id === "preschool") html = preschoolPanel();
  else if (id === "more") html = morePanel();
  else if (id === "words") html = wordsPanel();
  else html = startPanel();
  view.innerHTML = `<section class="panel" role="tabpanel" aria-labelledby="tab-${id}">${html}</section>`;
  if (CLASSES[id]) renderSkills(id);
  if (id === "words") { renderGloss(); document.getElementById("q").addEventListener("input", e => renderGloss(e.target.value)); }
}

view.addEventListener("click", e => {
  const ev = e.target.closest(".ev");
  if (ev) { currentEvent = ev.dataset.ev; renderSkills(location.hash.slice(1)); return; }
  const g = e.target.closest("[data-go]");
  if (g) { go(g.dataset.go); window.scrollTo({ top: 0 }); }
});
window.addEventListener("hashchange", () => { render(); window.scrollTo({ top: 0 }); });
buildRail();
render();
