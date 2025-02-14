/* global basicLightbox */
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
let instance;

function createMarkup() {
    let markup = '';
    galleryItems.forEach(({ preview, original, description }) => {
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
    gallery.insertAdjacentHTML('beforeend', markup);
}

function closeModal(event) {
    console.dir(event);
    if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModal);
    }
}

function onImageClick(event) {
    event.preventDefault();

    const { target } = event;
    if (target.nodeName !== 'IMG') {
        console.log('мимo');
        return;
    }
    console.dir(target);
    const originalLink = target.dataset.source;
    console.log(originalLink);

    instance = basicLightbox.create(
        /* html */ `<div><img src="${originalLink}" width="1000px" ></div>`,
    );
    instance.show();

    document.addEventListener('keydown', closeModal);
}
createMarkup();
gallery.addEventListener('click', onImageClick);
