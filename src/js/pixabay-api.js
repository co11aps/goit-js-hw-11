export default function searchPicture(userValue) {
  const API_KEY = '42365845-25d760151cd88cf2d1cecf2ad';
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `?key=${API_KEY}&q=${userValue}&image_type=photo&orientation=horizontal&safesearch=true`;
  const url = BASE_URL + END_POINT + PARAMS;

  return fetch(url).then(res => res.json());
}
