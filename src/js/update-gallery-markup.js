import refs from './refs';
import galleryItemTemplate from '../templates/gallery-item.hbs';
import {
  createSuccessNotification,
  createErrorNotification,
} from './notifications';

export default function updateGalleryMarkup(arrayOfImages) {
  if (arrayOfImages.length === 0) {
    refs.loadMoreBtn.classList.add('is-hidden');
    refs.gallery.innerHTML = `<p style="font-weight: bold; font-size: 32px">Ничего не найдено</p>`;
    createErrorNotification();
    return;
  }

  const markup = galleryItemTemplate(arrayOfImages);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  // createSuccessNotification();
}
