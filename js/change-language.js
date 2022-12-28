let chosenLanguage = localStorage.getItem("MM.language")
  ? localStorage.getItem("MM.language")
  : "ge";
const allLangITems = document.querySelectorAll("[data-text]");
function renderLanguage(country) {
  allLangITems.forEach((item) => {
    const txtAttr = item.dataset.text;
    const textEl = languages[country][txtAttr];
    const tg = item.tagName;
    if (tg === "INPUT") {
      item.placeholder = textEl;
    } else {
      item.innerHTML = textEl;
    }
  });
}
renderLanguage(chosenLanguage);
document.addEventListener("DOMContentLoaded", () => {
  const langBtns = document.querySelectorAll(".mm-lang__choose>a");
  const langBox = document.querySelector(".mm-lang__choose");
  const langCurr = document.querySelector(".mm-lang__current");
  function removeLangActive() {
    langBtns.forEach((item) => {
      item.classList.remove("active");
    });
  }
  langBtns.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const curr = e.currentTarget;
      const currHref = curr.getAttribute("href");
      langBox.classList.remove("active");
      langCurr.classList.remove("active");
      if (curr.classList.contains("active")) {
        return null;
      } else {
        removeLangActive();
        e.currentTarget.classList.add("active");
        localStorage.setItem("MM.language", currHref);
        renderLanguage(currHref);
      }
    });
  });
});
