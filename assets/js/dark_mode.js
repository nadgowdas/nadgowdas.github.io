(function () {
  "use strict";
  function initializeThemeControl() {
    var control = document.getElementById("light-toggle");
    if (!control || !window.toggleTheme) return;
    window.updateThemeControl();
    control.addEventListener("click", window.toggleTheme);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializeThemeControl);
  else initializeThemeControl();
}());
