const toggle = document.getElementById("theme-toggle");
const root = document.body;
const storageKey = "pk-portfolio-theme";

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

const savedTheme = localStorage.getItem(storageKey);
applyTheme(savedTheme || "light");

toggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(storageKey, nextTheme);
  applyTheme(nextTheme);
});
