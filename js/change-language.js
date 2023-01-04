let chosenLanguage = localStorage.getItem("MM.language")
  ? localStorage.getItem("MM.language")
  : "ge";
const btn = document.querySelector(".mm-valid-btn");
let btnSendText = btn.getAttribute("btnSend");
let btnClearText = btn.getAttribute("btnClear");
const allLangITems = document.querySelectorAll("[data-text]");
function renderLanguage(country) {
  const inputBtn = document.querySelector(".mm-valid-btn");
  inputBtn.setAttribute("btnSend", `${languages[country].sendBtnText}`);
  inputBtn.setAttribute("btnClear", `${languages[country].cleaning}`);
  btnSendText = btn.getAttribute("btnSend");
  btnClearText = btn.getAttribute("btnClear");
  //   console.log(languages[country].cleaning);
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
const chosenLangShort = document.querySelector(".mm-lang__lang");
(function () {
  const defaultLang = document.querySelector(
    `.mm-lang__choose>a[href=${chosenLanguage}]`
  );
  defaultLang.classList.add("active");
  const shortend = defaultLang.getAttribute("data-short");
  chosenLangShort.textContent = shortend;
})();

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
      const currTxt = curr.getAttribute("data-short");
      chosenLangShort.textContent = currTxt;
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
