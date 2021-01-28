import refs from './refs';
import apiService from './apiService';
import updateGalleryMarkup from './update-gallery-markup';

export default function fetchImages() {
  refs.loadMoreBtn.classList.add('is-hidden');

  if (apiService.query === '') {
    return;
  }

  apiService.fetchImages().then(images => {
    refs.loadMoreBtn.classList.remove('is-hidden');
    updateGalleryMarkup(images);
  });

  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}
