(function () {
  "use strict";
  var root = document.documentElement;
  var preference = null;
  try { preference = localStorage.getItem("theme"); } catch (error) {}
  var hasPreference = preference === "light" || preference === "dark";
  var systemTheme = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function updateControl() {
    var control = document.getElementById("light-toggle");
    if (!control) return;
    var dark = root.getAttribute("data-theme") === "dark";
    control.setAttribute("aria-pressed", String(dark));
    control.setAttribute("title", dark ? "Use light theme" : "Use dark theme");
  }

  function applyTheme(theme, persist) {
    theme = theme === "dark" ? "dark" : "light";
    root.setAttribute("data-theme", theme);
    if (persist) {
      hasPreference = true;
      try { localStorage.setItem("theme", theme); } catch (error) {}
    }
    updateControl();
    if (window.medium_zoom && window.medium_zoom.update) {
      window.medium_zoom.update({ background: getComputedStyle(root).getPropertyValue("--global-bg-color").trim() });
    }
  }

  window.setTheme = function (theme) { applyTheme(theme, true); };
  window.toggleTheme = function () { applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true); };
  window.updateThemeControl = updateControl;
  applyTheme(hasPreference ? preference : systemTheme && systemTheme.matches ? "dark" : "light", false);
  if (systemTheme) {
    var followSystem = function (event) { if (!hasPreference) applyTheme(event.matches ? "dark" : "light", false); };
    if (systemTheme.addEventListener) systemTheme.addEventListener("change", followSystem);
    else if (systemTheme.addListener) systemTheme.addListener(followSystem);
  }
}());
