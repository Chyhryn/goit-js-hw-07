import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
