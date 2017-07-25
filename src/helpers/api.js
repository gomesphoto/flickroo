import axios from 'axios';

/**
 * Configuration for flickr api instance
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
 * @desc make search request for flickr photo
 * @param  {String} [text='']
 * @param  {Number} [page=1]
 * @return {Promise}
 */
export const apiPhotosSearch = (text = '', page = 1) =>
  api.get(`?method=flickr.photos.search&text=${text}&per_page=24&page=${page}&sort=relevance&extras=description,license,date_upload,date_taken,owner_name,icon_server,original_format,last_update,geo,tags,machine_tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o&nojsoncallback=1`);
