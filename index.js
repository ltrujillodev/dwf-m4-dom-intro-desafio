const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const queryEls = document.querySelectorAll(".lista li");
  setTimeout(() => {
    queryEls.forEach((el) => {
      el.remove();
    });
  }, 1500);
  const queryEl = document.querySelector(".lista");
  setTimeout(function () {
    cosasQueAprendimos.forEach((element) => {
      const newElLi = document.createElement("li");
      if (element.class != "") {
        newElLi.classList.add(element.class);
        newElLi.textContent = element.tema;
        queryEl.appendChild(newElLi);
      } else {
        newElLi.textContent = element.tema;
        queryEl.appendChild(newElLi);
      }
    });
  }, 3000);
}

main();
