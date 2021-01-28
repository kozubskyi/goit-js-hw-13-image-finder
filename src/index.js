// Imports

import './styles.css';

import refs from './js/refs';
import getLastSearchQuery from './js/local-storage';
import onFormInput from './js/on-form-input';
import fetchImages from './js/fetch-images';
import observer from './js/intersection-observer';

import { debounce } from 'lodash';

// Event Listeners

refs.form.addEventListener('submit', event => event.preventDefault());
refs.input.addEventListener('input', debounce(onFormInput, 1000));
refs.loadMoreBtn.addEventListener('click', fetchImages);

// JS-code

getLastSearchQuery();

observer.observe(refs.loadMoreBtn);
