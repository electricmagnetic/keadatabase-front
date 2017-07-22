import { BANDCOMBOS_REQUEST, BANDCOMBOS_RECEIVE, BANDCOMBOS_ERROR } from '../actions/bandCombos';

const initialBandCombosState = {
  query: '',
  isFetching: false,
  items: [],
  isError: false
};

const bandCombosReducer = (state = initialBandCombosState, action) => {
  switch (action.type) {
    case BANDCOMBOS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.meta.query
      });
    case BANDCOMBOS_RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload.results,
        isError: false
      });
    case BANDCOMBOS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        items: null,
        isError: true
      });
  default:
    return state;
  }
};

export default bandCombosReducer;
