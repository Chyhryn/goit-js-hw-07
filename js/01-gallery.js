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

  const isIncludeClass = event.target.classList.contains("gallery__image");

  if (isIncludeClass) {
    const largeImg = event.target.dataset.source;

    const instance = basicLightbox.create(
      `
      <img src="${largeImg}" width="800" height="600">
  `,
      {
        onShow: (instance) => {
          window.addEventListener("keydown", onPressEsc);
          instance.element().querySelector("img").onclick = instance.close;
        },
      }
    );
    function onPressEsc(event) {
      if (event.code === "Escape") {
        window.removeEventListener("keydown", onPressEsc);
        instance.close();
      }
    }

    instance.show();
  }
}
