import searchPicture from './js/pixabay-api.js';
import { galleryTemplate, renderGallery } from './js/render-functions.js';

export const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchTopic = e.target.elements.query.value.trim();

  if (searchTopic !== '') {
    refs.loader.classList.remove('isHidden');
    searchPicture(searchTopic).then(data => {
      galleryTemplate(data);
      renderGallery(data);
      refs.loader.classList.add('isHidden');
    });
  }

  e.target.reset();
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
