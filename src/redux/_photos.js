import { apiPhotosSearch } from "../helpers/api";

// -- Constants ------------------------------------------------------------- //
const PHOTOS_SEARCH_REQUEST = "photos/PHOTOS_SEARCH_REQUEST";
const PHOTOS_SEARCH_SUCCESS = "photos/PHOTOS_SEARCH_SUCCESS";
const PHOTOS_SEARCH_FAILURE = "photos/PHOTOS_SEARCH_FAILURE";

const PHOTOS_SEARCH_UPDATE_QUERY = "photos/PHOTOS_SEARCH_UPDATE_QUERY";

// -- Actions --------------------------------------------------------------- //
export const photosSearch = (query, page) => (dispatch, prevState) => {
  dispatch({ type: PHOTOS_SEARCH_REQUEST });
  const { photos } = prevState();
  const prevPhotos = photos.photos;
  apiPhotosSearch(query, page)
  .then(({ data }) => {
    const newPhotos = data.photos.photo;
    if (query !== photos.query) {
      dispatch({
        type: PHOTOS_SEARCH_UPDATE_QUERY,
        payload: query
      });
      dispatch({
        type: PHOTOS_SEARCH_SUCCESS,
        payload: newPhotos
      });
    } else {
      dispatch({
        type: PHOTOS_SEARCH_SUCCESS,
        payload: [ ...prevPhotos, ...newPhotos ]
      });
    }
  })
  .catch((error) => {
    console.log(error);
    dispatch({ type: PHOTOS_SEARCH_FAILURE });
  });
};

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
  query: '',
  photos: []
};

export const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PHOTOS_SEARCH_REQUEST:
      return { ...state, fetching: true };
    case PHOTOS_SEARCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        photos: action.payload
      };
    case PHOTOS_SEARCH_FAILURE:
      return { ...state, fetching: false };
    case PHOTOS_SEARCH_UPDATE_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};
