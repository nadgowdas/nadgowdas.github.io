(function () {
  "use strict";
  function initializeNavigation() {
    var toggle = document.querySelector(".menu-toggle");
    var navigation = document.getElementById("site-navigation");
    if (!toggle || !navigation) return;
    function closeMenu(returnFocus) {
      navigation.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      if (returnFocus) toggle.focus();
    }
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      navigation.classList.toggle("is-open", open);
    });
    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") closeMenu(true);
    });
    document.addEventListener("click", function (event) {
      if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu(false);
    });
    if (window.matchMedia) {
      var desktop = window.matchMedia("(min-width: 641px)");
      var closeOnDesktop = function (event) { if (event.matches) closeMenu(false); };
      if (desktop.addEventListener) desktop.addEventListener("change", closeOnDesktop);
      else if (desktop.addListener) desktop.addListener(closeOnDesktop);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializeNavigation);
  else initializeNavigation();
}());
