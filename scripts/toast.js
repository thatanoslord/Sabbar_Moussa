/**
 * Portfolio-styled toast (styles in styles/style.css — .portfolio-toast)
 * @param {string} message
 * @param {boolean} [isError=false]
 * @param {string} [iconClass] Remixicon class; defaults by error state
 */
function showPortfolioToast(message, isError = false, iconClass) {
  let el = document.getElementById("portfolio-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "portfolio-toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    document.body.appendChild(el);
  }
  el.className =
    "portfolio-toast" + (isError ? " portfolio-toast--error" : "");
  const icon =
    iconClass ||
    (isError ? "ri-error-warning-line" : "ri-mail-check-line");
  el.innerHTML = `
    <span class="portfolio-toast__icon" aria-hidden="true"><i class="${icon}"></i></span>
    <span class="portfolio-toast__text">${message}</span>
  `;
  requestAnimationFrame(() => {
    el.classList.add("portfolio-toast--visible");
  });
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(() => {
    el.classList.remove("portfolio-toast--visible");
  }, 3200);
}
