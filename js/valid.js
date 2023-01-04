document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("mm-valid-mail");
  const inputParent = document.querySelector(".mm-input");
  const form = document.querySelector(".mm-content form");
  const btnSpan = document.querySelector(".mm-valid-btn__txt");
  const parentClassNames = ["rejected", "completed", "focused", "blanked"];
  const removeParentsClasses = (element, names) => {
    names.forEach((item) => {
      element.classList.remove(`${item}`);
    });
  };
  document.querySelector("[btnClear]").setAttribute("btnClear", "test");
  function defaultStyle() {
    if (btn.hasAttribute("disabled") || btn.classList.contains("rejected")) {
      input.value = "";
      btnSpan.textContent = btnSendText;
      btn.removeAttribute("disabled");
      removeParentsClasses(inputParent, parentClassNames);
      btn.classList.remove("rejected");
    }
  }

  input.addEventListener("focus", function (e) {
    if (!btn.classList.contains("rejected")) {
      defaultStyle();
    }
    inputParent.classList.add("focused");
  });
  input.addEventListener("focusout", function (e) {
    if (input.value.trim().length !== 0) return;
    inputParent.classList.remove("focused");
  });
  function ValidateEmail(inputText) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const val = inputText.value;
    if (val.trim() === "") {
      inputParent.classList.add("blanked");
      input.focus();
      return;
    }
    if (val.match(mailformat)) {
      btn.setAttribute("disabled", "true");
      btnSpan.textContent = "";
      btn.classList.remove("rejected");
      inputParent.classList.remove("rejected");
      inputParent.classList.remove("blanked");
      inputParent.classList.add("completed");
    } else {
      btn.removeAttribute("disabled");
      btnSpan.textContent = btnClearText;
      btn.classList.add("rejected");
      inputParent.classList.remove("completed");
      inputParent.classList.remove("blanked");
      inputParent.classList.add("rejected");
    }
  }

  document.addEventListener("click", function (e) {
    if (inputParent.classList.contains("blanked"))
      inputParent.classList.remove("blanked");
    if (e.target.closest(".mm-valid-btn.rejected")) {
      defaultStyle();
      setTimeout(() => {
        inputParent.classList.remove("blanked");
      }, 0);
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    ValidateEmail(input);
    inputParent.classList.contains("completed") ? input.blur() : null;
  });
  function removeRejection() {
    btnSpan.textContent = btnSendText;
    btn.classList.remove("rejected");
    inputParent.classList.remove("rejected");
    inputParent.classList.remove("blanked");
  }
  input.addEventListener("input", () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const val = input.value;
    if (val.match(mailformat) || val === "") {
      removeRejection();
    }
  });
});
