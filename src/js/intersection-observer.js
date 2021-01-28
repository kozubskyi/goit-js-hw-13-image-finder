import fetchImages from './fetch-images';

const options = {
  root: null,
  rootMargin: '-200px',
  // threshold: 0,
};

function onEntry(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log(entry);
      fetchImages();
    }
  });
}

const observer = new IntersectionObserver(onEntry, options);

export default observer;
