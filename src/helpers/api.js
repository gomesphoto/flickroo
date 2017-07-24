import axios from 'axios';

/**
 * Configuration for  api instance
 * @type axios instance
 */
const api = axios.create({
  baseURL: 'https://api.flickr.com/services/rest/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  params: {
    api_key: '086569840e6b84c713a426996c3a49ef',
    format: 'json'
  }
});

/**
 * @desc validate and login user session
 * @param  {String} [email='']
 * @param  {String} [password='']
 * @return {Promise}
 */
export const apiPhotosSearch = (text = '') =>
  api.get('?method=flickr.photos.search', { text });
