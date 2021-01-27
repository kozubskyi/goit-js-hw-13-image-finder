import refs from './refs';
import apiService from './apiService';
import fetchImages from './fetch-images';

export default function getLastSearchQuery() {
  refs.input.value = localStorage.getItem('input-value');
  apiService.query = refs.input.value;

  fetchImages();
}
