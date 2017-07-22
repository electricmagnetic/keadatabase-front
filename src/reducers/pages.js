import { PAGES_REQUEST, PAGES_RECEIVE, PAGES_ERROR } from '../actions/pages';

const initialPagesState = {
  isFetching: false,
  items: [],
  isError: false
};

const pagesReducer = (state = initialPagesState, action) => {
  switch (action.type) {
    case PAGES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case PAGES_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload,
        isError: false
      });
    case PAGES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: null,
        isError: true
      });
  default:
    return state;
  }
};

export default pagesReducer;
