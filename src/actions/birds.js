export const REQUEST_BIRDS = 'REQUEST_BIRDS';
export const RECEIVE_BIRDS = 'RECEIVE_BIRDS';

function requestBirds() {
  return {
    type: REQUEST_BIRDS
  }
}

function receiveBirds(json) {
  return {
    type: RECEIVE_BIRDS,
    birds: json.results,
    receivedAt: Date.now()
  }
}

function fetchBirds() {
  return dispatch => {
    dispatch(requestBirds());
    return fetch('https://api.keadatabase.nz/birds/?ordering=bird_extended,name')
      .then(response => response.json())
      .then(json => dispatch(receiveBirds(json)));
  }
}

export function fetchBirdsIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchBirds());
  }
}
