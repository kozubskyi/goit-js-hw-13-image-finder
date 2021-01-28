import fetchImages from './fetch-images';

const pixabayAPIKey = '20023331-464bd2371129c2e39a7fc1f52';
let perPage = 12;

export default {
  searchQuery: '',
  page: 1,
  fetchImages(searchQuery) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${perPage}&key=${pixabayAPIKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.hits);
        this.page += 1;
        return data.hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};
