import refs from './refs';
import apiService from './apiService';
import fetchImages from './fetch-images';

export default function onFormInput(event) {
  apiService.query = event.target.value;
  localStorage.setItem('input-value', apiService.query);

  refs.gallery.innerHTML = '';

  apiService.resetPage();

  fetchImages();
}
