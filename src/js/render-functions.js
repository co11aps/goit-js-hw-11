function galleryTemplate(searchTopic) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${hero.images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${hero.name}</h4>
    <p class="hero-bio">
      ${hero.biography.fullName} - ${hero.biography.placeOfBirth}, ${hero.work.base}
    </p>
  </div>
</div>`;
}

function renderGallery(searchTopic) {
  const markup = galleryTemplate(searchTopic);
  refs.heroEl.insertAdjacentHTML('afterbegin', markup);
}

function renderUsers(users) {
  const markup = users
    .map(user => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join('');
  userList.insertAdjacentHTML('beforeend', markup);
}
