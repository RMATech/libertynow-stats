// ESC blocker (always active)
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


// Kiosk enforcement (exported function)
export function applyKiosk() {
  const user = window.grafanaBootData && window.grafanaBootData.user;
  if (!user) {
    return;
  }

  const shouldForceKiosk =
    user.authenticatedBy === 'oauth_generic_oauth';

  if (!shouldForceKiosk) {
    return;
  }

  if (!window.location.search.includes('kiosk')) {
    const separator = window.location.search ? '&' : '?';
    const newUrl = window.location.href + separator + 'kiosk';
    window.location.replace(newUrl);
  }
}
