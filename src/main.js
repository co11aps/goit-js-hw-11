import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import './js/pixabay-api.js';
import './js/render-functions.js';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchTopic = e.target.elements.query.value;

  searchPicture(searchTopic).then(data => {
    console.log(data);
    galleryTemplate(data);
    renderGallery(data);
  });

  e.target.reset();
});

function searchPicture(userValue) {
  const API_KEY = '42365845-25d760151cd88cf2d1cecf2ad';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `?key=${API_KEY}&q=${userValue}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url).then(res => res.json());
}

function galleryTemplate(resultsArr) {
  return resultsArr.hits
    .map(
      ({ largeImageURL, webformatURL, tags }) => `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
  </a>
</li>`
    )
    .join('');
}

function renderGallery(resultsArr) {
  const markup = galleryTemplate(resultsArr);
  refs.gallery.innerHTML = markup;
  lightbox.refresh();
}

let lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

// function renderGallery(resultsArr) {
//   const markup = resultsArr.hits
//     .map(
//       ({ largeImageURL, webformatURL, tags }) => `<li class="gallery-item">
//   <a class="gallery-link" href="${largeImageURL}">
//     <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
//   </a>
// </li>`
//     )
//     .join('');

//   refs.gallery.insertAdjacentHTML('afterbegin', markup);

//   let lightbox = new SimpleLightbox('.gallery a', {
//     overlayOpacity: 0.8,
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
// }
