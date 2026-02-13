(function () {
  function blockEsc(event) {
    if (event.key === "Escape" || event.key === "Esc") {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      console.log("ESC blocked");
      return false;
    }
  }

  // Capture phase on window (strongest)
  window.addEventListener("keydown", blockEsc, true);
  window.addEventListener("keyup", blockEsc, true);
})();
