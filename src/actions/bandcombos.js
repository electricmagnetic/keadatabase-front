export const REQUEST_BANDCOMBOS = 'REQUEST_BANDCOMBOS';
export const RECEIVE_BANDCOMBOS = 'RECEIVE_BANDCOMBOS';

function requestBandCombos(query) {
  return {
    type: REQUEST_BANDCOMBOS,
    query
  }
}

function receiveBandCombos(query, json) {
  return {
    type: RECEIVE_BANDCOMBOS,
    query,
    bandcombos: json.results,
    receivedAt: Date.now()
  }
}

function fetchBandCombos(query) {
  return dispatch => {
    dispatch(requestBandCombos(query));
    return fetch(`https://api.keadatabase.nz/band_combos/?ordering=bird__bird_extended,style,bird__name&search=${query}`)
      .then(response => response.json())
      .then(json => dispatch(receiveBandCombos(query, json)));
  }
}

function shouldFetchBandCombos(state, query) {
  return true;
}

export function fetchBandCombosIfNeeded(query='') {
  return (dispatch, getState) => {
    if (shouldFetchBandCombos(getState(), query)) {
      return dispatch(fetchBandCombos(query));
    }
  }
}
