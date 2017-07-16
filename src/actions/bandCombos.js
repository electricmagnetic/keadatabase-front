import { CALL_API } from 'redux-api-middleware';

export const BANDCOMBOS_REQUEST = 'api:/band_combos/REQUEST';
export const BANDCOMBOS_RECEIVE = 'api:/band_combos/RECEIVE';
export const BANDCOMBOS_ERROR = 'api:/band_combos/ERROR';

function fetchBandCombos(query) {
  return {
    [CALL_API]: {
      endpoint: `https://api.keadatabase.nz/band_combos/?ordering=bird__bird_extended,style,bird__name&search=${encodeURIComponent(query)}`,
      method: 'GET',
      types: [
        {
          type: BANDCOMBOS_REQUEST,
          meta: { query: query }
        },
        {
          type: BANDCOMBOS_RECEIVE,
          meta: { query: query }
        },
        {
          type: BANDCOMBOS_ERROR,
          meta: { query: query }
        }
      ]
    }
  }
}

function shouldFetchBandCombos(state, query) {
  // TODO: optimise
  const bandCombosReducer = state.bandCombosReducer;

  if (bandCombosReducer.items.length === 0) {
    return true;
  }

  if (query !== bandCombosReducer.query) {
   return true;
  }

  return false;
}

export function fetchBandCombosIfNeeded(query='') {
  return (dispatch, getState) => {
    // TODO: find a way of retaining search state (also in URL and textbox), but also allow empty searchs
    //query = query || getState().bandCombosReducer.query;

    if (shouldFetchBandCombos(getState(), query)) {
      return dispatch(fetchBandCombos(query));
    }
  }
}
