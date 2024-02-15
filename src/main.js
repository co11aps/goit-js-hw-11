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
    refs.gallery.innerHTML = '';
    searchPicture(searchTopic)
      .then(data => {
        galleryTemplate(data);
        renderGallery(data);
        refs.loader.classList.add('isHidden');
      })
      .catch(error => {
        console.error(error);
      });
  }

  e.target.reset();
});
