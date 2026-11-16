(function () {
  "use strict";
  if (typeof mediumZoom !== "function") return;
  window.medium_zoom = mediumZoom("[data-zoomable]", {
    margin: window.innerWidth < 640 ? 20 : 80,
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color").trim()
  });
}());
