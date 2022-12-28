"use strict";
const rocketImg = document.querySelector(".mm-rocket img");
const rocketImgSrc = ["img/light-rocket.svg", "img/dark-rocket.svg"];
const getCurrentTheme = function () {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("MM.theme")
    ? (theme = localStorage.getItem("MM.theme"))
    : null;
  return theme;
};
const loadTheme = function (theme) {
  const root = document.querySelector(":root");
  if (theme === "light") {
    rocketImg.src = rocketImgSrc[0];
  } else {
    rocketImg.src = rocketImgSrc[1];
  }
  root.setAttribute("color-scheme", theme);
};
const modeBtns = document.querySelectorAll(".dark-light-mode button");
modeBtns.forEach((item) => {
  item.addEventListener("click", function (e) {
    const currClass = e.currentTarget.classList[0];
    localStorage.setItem("MM.theme", currClass);
    loadTheme(currClass);
  });
});
window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
