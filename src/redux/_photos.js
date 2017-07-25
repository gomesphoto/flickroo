import { apiPhotosSearch } from "../helpers/api";

// -- Constants ------------------------------------------------------------- //
const PHOTOS_SEARCH_REQUEST = "photos/PHOTOS_SEARCH_REQUEST";
const PHOTOS_SEARCH_SUCCESS = "photos/PHOTOS_SEARCH_SUCCESS";
const PHOTOS_SEARCH_FAILURE = "photos/PHOTOS_SEARCH_FAILURE";

// -- Actions --------------------------------------------------------------- //
export const photosSearch = (query) => dispatch => {
  dispatch({ type: PHOTOS_SEARCH_REQUEST });
  apiPhotosSearch(query)
  .then(({ data }) => {
    dispatch({
      type: PHOTOS_SEARCH_SUCCESS,
      payload: data.photos.photo
    });
  })
  .catch((error) => {
    console.log(error);
    dispatch({ type: PHOTOS_SEARCH_FAILURE });
  });
};

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false,
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
    default:
      return state;
  }
};
