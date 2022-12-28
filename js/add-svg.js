window.addEventListener("DOMContentLoaded", function () {
  const trSvges = this.document.querySelectorAll("[data-svg]");
  const singleAppend = function (item, svg) {
    item.insertAdjacentHTML("afterbegin", svg);
  };
  trSvges.forEach((item) => {
    const svgName = item.dataset.svg;
    singleAppend(item, svges[`${svgName}`]);
  });
});
