const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

themeToggle.addEventListener("click", () => {
  html.classList.toggle("light");
  if (html.classList.contains("light")) {
	themeToggle.classList.remove("bx-sun");
	themeToggle.classList.add("bx-moon");
	localStorage.setItem("theme", "light");
  } else {
	themeToggle.classList.remove("bx-moon");
	themeToggle.classList.add("bx-sun");
	localStorage.setItem("theme", "dark");
  }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  html.classList.add("light");
  themeToggle.classList.remove("bx-sun");
  themeToggle.classList.add("bx-moon");
}

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
	navbar.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (
	!navbar.contains(e.target) &&
	!menuIcon.contains(e.target) &&
	navbar.classList.contains("active")
  ) {
	navbar.classList.remove("active");
  }
});