// eslint-disable-next-line import/extensions
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

let markup = '';
galleryItems.forEach(({ preview, original, description }) => {
    // console.log(item.preview);
    const content = /* html */ `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`;
    markup += content;
});
console.log(markup);
gallery.insertAdjacentHTML('beforeend', markup);
