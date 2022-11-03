import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const onSelectImg = event => {
    event.preventDefault();
    const largeImg = basicLightbox.create(
        `
		<img
        class="gallery__image"
        src="${event.target.dataset.source}"
        data-source="large-image.jpg"
        alt="Image description"
    />
	`,
        {
            onShow: largeImg => window.addEventListener('keydown', onEscPressClose),
            onClose: largeImg => window.removeEventListener('keydown', onEscPressClose),
        }
    );
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    largeImg.show();

    function onEscPressClose(event) {
        if (event.code === 'Escape') {
            largeImg.close();
        }
    }
};
galleryEl.addEventListener('click', onSelectImg);

const createEl = galleryItems
    .map(items => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${items.original}">
            <img
                class="gallery__image"
                src="${items.preview}"
                data-source="${items.original}"
                alt="${items.description}"
            />
        </a>
    </div>`;
    })
    .join('');
galleryEl.insertAdjacentHTML('beforeEnd', createEl);
