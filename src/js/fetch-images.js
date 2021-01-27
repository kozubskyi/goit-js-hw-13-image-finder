import refs from './refs';
import apiService from './apiService';
import updateGalleryMarkup from './update-gallery-markup';

// import { debounce } from 'lodash';

export default function fetchImages() {
  refs.loadMoreBtn.classList.add('is-hidden');

  if (apiService.query === '') {
    return;
  }

  apiService.fetchImages().then(images => {
    refs.loadMoreBtn.classList.remove('is-hidden');
    updateGalleryMarkup(images);

    // Как-то криво работает window.scrollTo().
    // Часто скроллит до низа пока картинки не загрузились, в итоге потом остается место до которого не дошло.
    // Хотел попробовать при помощи debounce отсрочить скролл, но не работает.
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}
