import { refs } from '../main.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import stopIcon from '../img/stop-icon.svg';

let lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

export function galleryTemplate(resultsArr) {
  return resultsArr.hits
    .map(
      ({ largeImageURL, webformatURL, tags }) => `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
  </a>
</li>`
    )
    .join('');
}

export function renderGallery(resultsArr) {
  if (resultsArr.hits.length > 0) {
    const markup = galleryTemplate(resultsArr);
    refs.gallery.innerHTML = markup;
    lightbox.refresh();
  } else {
    // refs.gallery.innerHTML = '';
    iziToast.show({
      message:
        'Sorry, there are no images matching<br>your search query. Please try again!',
      color: 'red',
      messageColor: '#fff',
      backgroundColor: '#EF4040',
      messageSize: '16',
      position: 'topRight',
      iconUrl: stopIcon,
      messageLineHeight: '24',
      closeOnClick: 'true',
      close: 'false',
      transitionIn: 'fadeInLeft',
    });
  }
}
