export const REQUEST_BANDCOMBOS = 'REQUEST_BANDCOMBOS';
export const RECEIVE_BANDCOMBOS = 'RECEIVE_BANDCOMBOS';

function requestBandCombos() {
  return {
    type: REQUEST_BANDCOMBOS
  }
}

function receiveBandCombos(json) {
  return {
    type: RECEIVE_BANDCOMBOS,
    bandcombos: json.results,
    receivedAt: Date.now()
  }
}

function fetchBandCombos() {
  return dispatch => {
    dispatch(requestBandCombos());
    return fetch('https://api.keadatabase.nz/band_combos/?ordering=bird__bird_extended,style,bird__name')
      .then(response => response.json())
      .then(json => dispatch(receiveBandCombos(json)));
  }
}

export function fetchBandCombosIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchBandCombos());
  }
}
