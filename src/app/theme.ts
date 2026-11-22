/**
 * Se ejecuta en el <head>, antes de pintar la página para evitar el destello
 * del tema equivocado en la navegación estática de GitHub Pages.
 */
export const themeInitScript = `(function () {
  try {
    var saved = localStorage.getItem("jc-portfolio-theme");
    var theme = saved === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();`;
