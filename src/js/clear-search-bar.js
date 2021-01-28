import refs from './refs';
import apiService from './apiService';

export default function clearSearchBar() {
  refs.input.value = '';
  apiService.query = refs.input.value;
  localStorage.setItem('input-value', refs.input.value);
  refs.gallery.innerHTML = '';
  refs.input.focus();
}
