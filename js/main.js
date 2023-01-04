document.addEventListener("DOMContentLoaded", () => {
  const ankers = document.querySelectorAll("a");
  const langCurrent = document.querySelector(".mm-lang__current");
  const langChoose = document.querySelector(".mm-lang__choose");
  langCurrent.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const curr = e.currentTarget;
    curr.classList.toggle("active");
    langChoose.classList.toggle("active");
  });
  ankers.forEach((item) => {
    item.addEventListener("click", function (e) {});
  });
  document.addEventListener("click", () => {
    if (document.querySelector(".mm-lang__choose.active")) {
      document
        .querySelector(".mm-lang__choose.active")
        .classList.remove("active");
      document
        .querySelector(".mm-lang__current.active")
        .classList.remove("active");
    }
  });
});
