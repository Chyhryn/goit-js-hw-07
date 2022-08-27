import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.addEventListener("click", modal);

function modal(event) {
  event.preventDefault();
  const largeImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
      <img src="${largeImg}" width="800" height="600">
  `,
    {
      onShow: (instance) => {
        instance.element().querySelector("img").onclick = instance.close;

        window.addEventListener("keydown", onPressEsc);
      },
    }
  );

  instance.show();

  function onPressEsc(event) {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onPressEsc);
    }
  }
}
