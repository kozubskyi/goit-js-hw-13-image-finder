import refs from './refs';
import apiService from './apiService';
import updateGalleryMarkup from './update-gallery-markup';

export default function fetchImages() {
  if (apiService.query === '') {
    return;
  }

  apiService.fetchImages().then(images => {
    refs.loadMoreBtn.classList.remove('is-hidden');
    updateGalleryMarkup(images);
    window.scrollTo({
      top: document.documentElement.offsetHeight - 840,
      behavior: 'smooth',
    });
  });
}
