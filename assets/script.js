// Theme toggle with localStorage persistence + system preference fallback
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const moon = document.querySelector(".icon-moon");
  const sun = document.querySelector(".icon-sun");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    const dark = theme === "dark";
    moon.style.display = dark ? "none" : "";
    sun.style.display = dark ? "" : "none";
  }

  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    apply(next);
  });
})();

// Mobile navbar: hamburger toggles the menu
(function () {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!navToggle || !navLinks) return;

  function setOpen(open) {
    navLinks.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  navToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    setOpen(!navLinks.classList.contains("open"));
  });

  // Close when a menu link is tapped
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      setOpen(false);
    });
  });

  // Close when tapping outside the menu, or on Escape
  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
      setOpen(false);
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();
