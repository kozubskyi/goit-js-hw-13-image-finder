import refs from './refs';
import galleryItemTemplate from '../templates/gallery-item.hbs';

export default function updateGalleryMarkup(arrayOfImages) {
  if (arrayOfImages.length === 0) {
    refs.gallery.innerHTML = `<p style="font-weight: bold; font-size: 32px">Ничего не найдено</p>`;
    refs.loadMoreBtn.classList.add('is-hidden');
    return;
  }

  const markup = galleryItemTemplate(arrayOfImages);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
