"use strict";

const galleryItems = [
  {
    preview: "/img/orange.png",
    fullview: "img/one-1.png",
    alt: "alt text 1"
  },
  {
    preview: "img/two.png",
    fullview: "img/two-1.png",
    alt: "alt text 2"
  },
  {
    preview: "img/three.png",
    fullview: "img/three-1.png",
    alt: "alt text 3"
  },
  {
    preview: "img/four.png",
    fullview: "img/four-1.png",
    alt: "alt text 4"
  },
  {
    preview: "img/five.png",
    fullview: "img/five-1.png",
    alt: "alt text 5"
  },
  { preview: "img/six.png", fullview: "img/six-1.png", alt: "alt text 6" }
];

const fullview = document.querySelector(".fullview"),
      preview = document.querySelector(".preview");

// Устанавливаем  первую картинку заглавной
fullview.innerHTML = `<img src = '${galleryItems[0].fullview}'>`;

// Наполняем галлерею картинками из массива
const liPrewiew = galleryItems.reduce(
  (acc, el) =>
    acc +
    `<li><img src=${el.preview} data-fullview=${el.fullview} alt ="${
      el.alt
    }"></li> `,
  ""
);
preview.innerHTML = liPrewiew;

// делаем заглавной картинкой выбраную кликом из галлереи
function getFull(event) {
  if (event.target.nodeName !== "IMG") return;
  const img = fullview.querySelector("img");
  img.setAttribute("src", event.target.dataset.fullview);
}
preview.addEventListener("click", getFull);

// Убираем фильтр при наведении курсора на картинку
function getFilter(event) {
  if (event.target.nodeName !== "IMG") return;
  event.target.style.filter = "none";
}
preview.addEventListener("mouseover", getFilter);

function getFilterOut(event) {
  if (event.target.nodeName !== "IMG") return;
  event.target.style.filter = "grayscale(70%)";
}
preview.addEventListener("mouseout", getFilterOut);
