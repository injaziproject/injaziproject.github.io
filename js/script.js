/* إنجازي | أثرٌ يتجدد — البيانات والتفاعل
   لتعديل الأسماء أو الروابط عدّل المصفوفة DATA أدناه. */
const DATA = [{"title": "مجال أول", "people": [{"name": "فاطمة سالم الحوسني", "url": "https://drive.google.com/drive/folders/1GdH79hCGbMf7M21FFnhBj-EyKB1vHAlV?usp=sharing"}, {"name": "فاطمة علي الحوسني", "url": "https://drive.google.com/drive/folders/11x1SoHS_GNCBnvfnVV9CMEwzCIML-hlq?usp=sharing"}, {"name": "أمل النعيمي", "url": "https://drive.google.com/drive/folders/1_X3_rSTWtIJiruy6fUu_28bG0X4_YldM?usp=sharing"}, {"name": "رحمة الحوسني", "url": "https://drive.google.com/drive/folders/13mbRre-q-INnHej7deVWGeHR70NyV65Z?usp=sharing"}, {"name": "فاطمة السعيدي", "url": "https://drive.google.com/drive/folders/1K0MiAnASfyDpfX4a3H3-0dvKY28XSYpz?usp=sharing"}, {"name": "شيخة القطيطي", "url": "https://drive.google.com/drive/folders/16lLqh1UZNDbacv37yfnj5u2reQckZfse?usp=sharing"}, {"name": "عفراء الحوسني", "url": "https://drive.google.com/drive/folders/1qwXm5FPjX12ZlkRjd-ovwn6aGYMBQfTV?usp=sharing"}]}, {"title": "مجال ثاني", "people": [{"name": "ليلي المعمري", "url": "https://drive.google.com/drive/folders/1V-yAhStf7Tqb08M3S0DA5oUbVPH1ydIx?usp=sharing"}, {"name": "شريفة الحوسني", "url": "https://drive.google.com/drive/folders/1qVC0_3vVQ_Q4NzBQmMkiTrPOilRZkKCK?usp=sharing"}, {"name": "وفاء الحوسني", "url": "https://drive.google.com/drive/folders/1owBSN1DTMSdlbBake1O4kQaHg3pMHkf4?usp=sharing"}, {"name": "مريم المزيدي", "url": "https://drive.google.com/drive/folders/1i3J5LURorwLBQHBsvIkl8dKcP39zNOKZ?usp=sharing"}, {"name": "أثير البلوشي", "url": "https://drive.google.com/drive/folders/1GH7FTyJM3FaDlifRH_VwMKNv9Fby8G42?usp=sharing"}]}, {"title": "لغة إنجليزية", "people": [{"name": "فاطمة القريني", "url": "https://drive.google.com/drive/folders/1yjyBxgD-ls0NAmStVsEIaO1NHr_2tsdw?usp=sharing"}, {"name": "صديقة البلوشي", "url": "https://drive.google.com/drive/folders/1mlKLu9dHg2MnzP_oonSWV7EJYrEFqCdn?usp=sharing"}, {"name": "عايشة الصقري", "url": "https://drive.google.com/drive/folders/1qumsUCHlICyzDlE35gUkBFeD4hyX4zIW?usp=sharing"}, {"name": "وفاء السعيدي", "url": "https://drive.google.com/drive/folders/1xsnZtDz5ULUYvYm0xFDKE8N8cAkYL_Nw?usp=sharing"}, {"name": "أفراح الحوسني", "url": "https://drive.google.com/drive/folders/1cs0CxbWZ0iw0IrGaaalREA6J7Z9LXKcU?usp=sharing"}]}, {"title": "الحلقة الثانية", "people": [{"name": "شيخة الحوسني", "url": "https://drive.google.com/drive/folders/14onke7D7nb3Eo6GWxjIv7FIo0iB6e0P9?usp=sharing"}, {"name": "صفية السعيدي", "url": "https://drive.google.com/drive/folders/129ZJB2h8ftFHg3cFk5XJV9iZTboz_fUY?usp=sharing"}, {"name": "ريم الربيعي", "url": "https://drive.google.com/drive/folders/1jW4bLMLjJowfNr-RLW78_LwvZIk6aXX0?usp=sharing"}, {"name": "أسماء المخمري", "url": "https://drive.google.com/drive/folders/1LU4B2Xix1YFxTJQh2YjgE3wbETSB0Y8e?usp=sharing"}, {"name": "خالصة الحوسني", "url": "https://drive.google.com/drive/folders/1V50-EEVnOm1n_mI6bo-yX5ceqUymrQXN?usp=sharing"}, {"name": "شيخة القريني", "url": "https://drive.google.com/drive/folders/1BIjNjuyTWePhAn7kyp4x9wcmc246BEVN?usp=sharing"}, {"name": "فاطمة الحكماني", "url": "https://drive.google.com/drive/folders/1uov44pgRq_UOCR1U9y8g4r1lwy58_v0B?usp=sharing"}, {"name": "أمل الخروصي", "url": "https://drive.google.com/drive/folders/1zPF8_xUrj7lwc3DIssSxGF9yuRsAVvAD?usp=sharing"}, {"name": "سميرة الضباري", "url": "https://drive.google.com/drive/folders/1JkL5kMYOP7YXX4PLFg1iZsBV5nBzqD2W?usp=sharing"}, {"name": "رحمة العجمي", "url": "https://drive.google.com/drive/folders/1fAQr5vYUWuctsfi87A8MjqBiGf0JplxM?usp=sharing"}]}, {"title": "مهارات فردية", "people": [{"name": "نادية البارحي", "url": "https://drive.google.com/drive/folders/1UoVmA2mzWSlQo2ioWAoA13fbu_SzT_V2?usp=sharing"}, {"name": "أميرة الحوسني", "url": "https://drive.google.com/drive/folders/1GHchTS2PruuStCUKOB9vbBfnVkyPNo9-?usp=sharing"}, {"name": "أبرار الفريسي", "url": "https://drive.google.com/drive/folders/1smvq20xwQvoRRvlA7_FyfkzCw2E_UweS?usp=sharing"}, {"name": "وفاء راشد السعيدي", "url": "https://drive.google.com/drive/folders/1m5jJN3uV5S0sYOkW2pNkf2GKTnBP-EnH?usp=sharing"}, {"name": "زهرة السعيدي", "url": "https://drive.google.com/drive/folders/19NHuo4JqkKpyA0-XJO3GJ4u7o_bW4-Gk?usp=sharing"}, {"name": "رشا", "url": "https://drive.google.com/drive/folders/1yllhtO2X1WJJpL0M8g3UbRHa_zEZWsXS?usp=sharing"}]}];
const SECTION_ICONS = ['books', 'globe', 'pencil', 'bus', 'scissors'];

document.documentElement.lang = 'ar';
document.documentElement.dir = 'rtl';

const $ = s => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const num = n => n.toLocaleString('ar-EG');
const plural = n => n === 1 ? 'معلمة واحدة' : n === 2 ? 'معلمتان' : n <= 10 ? num(n) + ' معلمات' : num(n) + ' معلمة';
const norm = s => s.replace(/[ً-ْـ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/\s+/g, ' ').trim();
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

const ICON_GO = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>';
const ICON_COPY = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2.5"></rect><path d="M5 15V6.5A2.5 2.5 0 0 1 7.500 4H15"></path></svg>';
const ICON_OK = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.500"></path></svg>';

const main = $('#main'), tabs = $('#tabs'), slider = $('#slider');
const state = { tab: 'all', q: '' };
const cards = [], sections = [];
let uid = 0;

/* ----- tabs ----- */
function addTab(key, label, count, icon, tint) {
  const b = el('button', 'tab' + (tint != null ? ' t' + tint : ''));
  b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.key = key;
  b.innerHTML = (icon ? '<span class="ic ic-' + icon + '"></span>' : '') + '<span>' + label + '</span><b>' + num(count) + '</b>';
  b.addEventListener('click', () => { state.tab = key; apply(true); });
  tabs.appendChild(b);
}
const total = DATA.reduce((a, s) => a + s.people.length, 0);
$('#sum').textContent = num(total) + ' معلمة في ' + num(DATA.length) + ' أقسام، ولكل معلمة مجلدها';
addTab('all', 'الكل', total, null, null);

/* ----- sections ----- */
DATA.forEach((sec, si) => {
  const icon = SECTION_ICONS[si % SECTION_ICONS.length];
  addTab(String(si), sec.title, sec.people.length, icon, si % 5);
  const s = el('section', 'section t' + (si % 5));
  const head = el('div', 'section-head');
  const count = el('span', 'count');
  head.append(el('span', 'ic ic-' + icon), el('h2', '', sec.title), el('span', 'rule'), count);
  const grid = el('div', 'grid');
  sec.people.forEach((p, pi) => {
    const c = el('article', 'card');
    c.style.setProperty('--i', Math.min(uid, 12));
    uid++;
    const a = el('a', 'card-link',
      '<span class="pill"></span>' +
      '<span class="folder" aria-hidden="true"><span class="f-back"></span><span class="f-sheet"></span><span class="f-front"></span></span>' +
      '<span class="go">فتح المجلد ' + ICON_GO + '</span>');
    a.href = p.url; a.target = '_blank'; a.rel = 'noopener';
    a.querySelector('.pill').textContent = p.name;
    a.title = p.name;
    const cp = el('button', 'copy', ICON_COPY);
    cp.type = 'button'; cp.title = 'نسخ الرابط';
    cp.setAttribute('aria-label', 'نسخ رابط مجلد ' + p.name);
    cp.addEventListener('click', () => copy(p, cp));
    c.append(a, cp);
    if (pi === sec.people.length - 1) c.append(el('span', 'sticker ic ic-' + icon));
    grid.appendChild(c);
    cards.push({ node: c, key: norm(p.name), sec: String(si) });
  });
  s.append(head, grid);
  main.appendChild(s);
  sections.push({ node: s, count, key: String(si) });
});

/* ----- filter ----- */
function render() {
  const q = norm(state.q);
  let shown = 0;
  const per = {};
  cards.forEach(c => {
    const ok = (state.tab === 'all' || state.tab === c.sec) && (!q || c.key.includes(q));
    c.node.hidden = !ok;
    if (ok) { shown++; per[c.sec] = (per[c.sec] || 0) + 1; }
  });
  sections.forEach(s => { const n = per[s.key] || 0; s.node.hidden = !n; s.count.textContent = plural(n); });
  $('#empty').hidden = shown > 0;
  $('#clear').hidden = !state.q;
  tabs.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', t.dataset.key === state.tab));
  moveSlider();
}
function markTabs() {
  tabs.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', t.dataset.key === state.tab));
  moveSlider();
}
let swapToken = 0;
function enter() {
  let j = 0;
  cards.forEach(c => { if (!c.node.hidden) c.node.style.setProperty('--j', Math.min(j++, 11)); });
  main.classList.remove('swap', 'leaving');
  void main.offsetWidth;
  main.classList.add('swap');
}
function apply(mode) {
  if (!mode || reduce) { render(); return; }
  const my = ++swapToken;
  if (mode === 'type') { render(); enter(); return; }
  markTabs();
  main.classList.remove('swap');
  main.classList.add('leaving');
  setTimeout(() => {
    if (my !== swapToken) return;
    render();
    const bar = tabs.parentElement.getBoundingClientRect(), top = main.getBoundingClientRect().top;
    if (top < bar.bottom) window.scrollBy(0, top - bar.bottom - 14);
    enter();
  }, 230);
}
function moveSlider() {
  const t = tabs.querySelector('.tab[aria-selected="true"]');
  if (!t) return;
  slider.style.width = t.offsetWidth + 'px';
  slider.style.transform = 'translateX(' + t.offsetLeft + 'px)';
  const wrap = tabs.parentElement;
  if (wrap.scrollWidth > wrap.clientWidth) {
    const a = t.getBoundingClientRect(), w = wrap.getBoundingClientRect();
    const delta = (a.left + a.width / 2) - (w.left + w.width / 2);
    if (Math.abs(delta) > 4) wrap.scrollBy({ left: delta, behavior: reduce ? 'auto' : 'smooth' });
  }
}

const q = $('#q');
q.addEventListener('input', () => { state.q = q.value; apply('type'); });
$('#clear').addEventListener('click', () => { q.value = ''; state.q = ''; apply(true); q.focus(); });
$('#reset').addEventListener('click', () => { q.value = ''; state.q = ''; state.tab = 'all'; apply(true); });
addEventListener('resize', moveSlider);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveSlider);

/* ----- stationery follows the pointer ----- */
const hero = $('#hero'), decos = [...hero.querySelectorAll('.deco')];
if (!reduce) {
  hero.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return;
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5;
    decos.forEach(d => { const k = +d.dataset.depth * 14; d.style.translate = (-dx * k) + 'px ' + (-dy * k) + 'px'; });
  });
  hero.addEventListener('pointerleave', () => decos.forEach(d => { d.style.translate = ''; }));
}

/* ----- copy link ----- */
let toastTimer;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}
function copy(p, btn) {
  const done = () => {
    btn.classList.add('done'); btn.innerHTML = ICON_OK; toast('تم نسخ رابط ' + p.name);
    setTimeout(() => { btn.classList.remove('done'); btn.innerHTML = ICON_COPY; }, 1800);
  };
  const fail = () => toast('تعذّر النسخ، افتحي المجلد وانسخي الرابط من المتصفح');
  try { navigator.clipboard.writeText(p.url).then(done, fail); } catch (e) { fail(); }
}

render();
