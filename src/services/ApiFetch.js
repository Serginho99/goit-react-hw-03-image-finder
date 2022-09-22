import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '29133730-ff48db7824e8d0937789cb566';

export async function fetchImages(query, page) {
  const PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 15,
    page,
    q: query,
  };

  const response = await axios.get(URL, {
    params: PARAMS,
  });
  return response.data;
}
