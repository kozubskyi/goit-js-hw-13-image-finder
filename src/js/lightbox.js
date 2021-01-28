import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

export default function openModal(event) {
  event.preventDefault();

  console.log(event.target);

  if (event.target.nodeName === 'IMG') {
    basicLightbox
      .create(
        `<img width="1400" height="900" src="${event.target.dataset.src}">`,
      )
      .show();
  }
}
