const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const btn = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  btn.classList.toggle("dark-theme");
});
