// eslint-disable-next-line import/extensions
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createMarkup() {
    let markup = '';
    galleryItems.forEach(({ preview, original, description }) => {
        const content = /* html */ `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
        markup += content;
    });
    gallery.insertAdjacentHTML('beforeend', markup);
}

createMarkup();
const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});
console.log(lightbox);
