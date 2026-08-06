// ==========================================================================
// Public Diary — daily entries grouped Month → Week → Day, with filters.
// To add an entry, append to ENTRIES below. Newest render first automatically.
//   { date: "YYYY-MM-DD", category: "Life" | "Travel" | "Learning" | "Stories",
//     body: "…your entry…" }
// ==========================================================================

const CATEGORIES = ["Life", "Travel", "Learning", "Stories"];

const ENTRIES = [
  { date: "2026-08-06", category: "Life", body: "Me and my office colleague Prashanth went to the Idikarai Corporation office to get the application form for a new water connection." },
];

// ---- helpers --------------------------------------------------------------
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function parseDate(s) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function mondayOf(d) {
  const off = (d.getDay() + 6) % 7; // Mon = 0
  const m = new Date(d);
  m.setDate(d.getDate() - off);
  m.setHours(0, 0, 0, 0);
  return m;
}
function iso(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function fmtShort(d) { return MONTHS_SHORT[d.getMonth()] + " " + d.getDate(); }
function esc(s) {
  return s.replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

// ---- grouping -------------------------------------------------------------
function buildTree(filter) {
  const list = ENTRIES
    .filter(function (e) { return filter === "All" || e.category === filter; })
    .map(function (e) { return Object.assign({}, e, { d: parseDate(e.date) }); })
    .sort(function (a, b) { return b.d - a.d; });

  const months = [];
  const monthIndex = {};
  list.forEach(function (e) {
    const mKey = e.d.getFullYear() + "-" + String(e.d.getMonth() + 1).padStart(2, "0");
    if (!(mKey in monthIndex)) {
      monthIndex[mKey] = months.length;
      months.push({
        key: mKey,
        label: MONTHS_FULL[e.d.getMonth()] + " " + e.d.getFullYear(),
        count: 0, weeks: [], weekIndex: {},
      });
    }
    const month = months[monthIndex[mKey]];
    month.count++;
    const monday = mondayOf(e.d);
    const wKey = iso(monday);
    if (!(wKey in month.weekIndex)) {
      const sunday = new Date(monday); sunday.setDate(monday.getDate() + 6);
      month.weekIndex[wKey] = month.weeks.length;
      month.weeks.push({ key: wKey, label: fmtShort(monday) + " – " + fmtShort(sunday), entries: [] });
    }
    month.weeks[month.weekIndex[wKey]].entries.push(e);
  });
  return months;
}

// ---- render ---------------------------------------------------------------
const state = { filter: "All" };

function render() {
  const root = document.getElementById("diary-root");
  const months = buildTree(state.filter);

  if (!months.length) {
    root.innerHTML = '<p class="diary-empty">No entries in this strand yet.</p>';
    return;
  }

  let html = "";
  months.forEach(function (month, mi) {
    const mOpen = mi === 0; // most recent month open
    html += '<section class="month' + (mOpen ? " open" : "") + '">';
    html += '<button class="head month-head" aria-expanded="' + mOpen + '">' +
      '<span class="caret"></span>' +
      '<h2>' + esc(month.label) + '</h2>' +
      '<span class="count">' + month.count + " " + (month.count === 1 ? "entry" : "entries") + '</span>' +
      '</button>';
    html += '<div class="month-body">';
    month.weeks.forEach(function (week, wi) {
      const wOpen = mi === 0 && wi === 0; // first week of newest month open
      html += '<section class="week' + (wOpen ? " open" : "") + '">';
      html += '<button class="head week-head" aria-expanded="' + wOpen + '">' +
        '<span class="caret"></span>' +
        '<span class="week-label">' + esc(week.label) + '</span>' +
        '</button>';
      html += '<div class="week-body">';
      week.entries.forEach(function (e) {
        html += '<article class="entry" data-cat="' + esc(e.category) + '">' +
          '<button class="head entry-head" aria-expanded="false">' +
          '<span class="caret"></span>' +
          '<span class="entry-date">' + esc(fmtShort(e.d)) + '</span>' +
          '<span class="entry-preview">' + esc(e.body) + '</span>' +
          '</button>' +
          '<div class="entry-body">' +
          '<span class="entry-cat">' + esc(e.category) + '</span>' +
          '<p>' + esc(e.body) + '</p>' +
          '</div>' +
          '</article>';
      });
      html += "</div></section>";
    });
    html += "</div></section>";
  });
  root.innerHTML = html;
}

// ---- interactions ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // filter bar
  const bar = document.getElementById("diary-filters");
  bar.addEventListener("click", function (ev) {
    const btn = ev.target.closest(".filter");
    if (!btn) return;
    bar.querySelectorAll(".filter").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
    state.filter = btn.dataset.cat;
    render();
  });

  // collapse / expand (event delegation)
  document.getElementById("diary-root").addEventListener("click", function (ev) {
    const head = ev.target.closest(".head");
    if (!head) return;
    const block = head.parentElement;
    const open = block.classList.toggle("open");
    head.setAttribute("aria-expanded", open ? "true" : "false");
  });

  render();
});
