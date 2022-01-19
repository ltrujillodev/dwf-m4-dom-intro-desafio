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
  // MI SOLUCION
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

  // SOLUCION MARCE
  // const listaEl = document.querySelector(".lista");
  // const itemsEls = document.querySelectorAll(".lista li");

  // for (let el of itemsEls) {
  //   el.remove();
  // }

  // for (let item of cosasQueAprendimos) {
  //   const newLiEl = document.createElement("li");
  //   newLiEl.textContent = item.tema;
  //   const laClaseQueLeVoyAAsginarAlLi = item.class || "item";
  //   newLiEl.classList.add(laClaseQueLeVoyAAsginarAlLi);
  //   listaEl.appendChild(newLiEl);
  // }
}

main();
