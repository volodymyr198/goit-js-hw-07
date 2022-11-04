import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const createEl = galleryItems
    .map(items => {
        return `<a class="gallery__item" href="${items.original}">
    <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
</a>`;
    })
    .join('');
galleryEl.insertAdjacentHTML('beforeEnd', createEl);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    animationSpeed: 400,
    captionDelay: 250,
});
