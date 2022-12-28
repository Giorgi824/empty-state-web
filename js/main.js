document.addEventListener("DOMContentLoaded", () => {
  const ankers = document.querySelectorAll("a");
  const langCurrent = document.querySelector(".mm-lang__current");
  const langChoose = document.querySelector(".mm-lang__choose");
  langCurrent.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.toggle("active");
    langChoose.classList.toggle("active");
  });
  ankers.forEach((item) => {
    item.addEventListener("click", function (e) {});
  });
  // remove all active classes from DOM
  // document.addEventListener("click", () => {
  //   const allActive = document.querySelectorAll(".active");
  //   allActive.forEach((item) => {
  //     item.classList.remove("active");
  //   });
  // });
});
