import { SubmissionError } from 'redux-form';

export function formApiAdapter(dispatch, actionCreator) {
  /*
    Helper function connecting redux-form and redux-api-middleware.
    http://randycoulman.com/blog/2016/05/03/redux-and-forms-and-apis-oh-my/
  */
  return (...args) =>
    new Promise((resolve, reject) => {
      dispatch(actionCreator(...args)).then(response => {
        if (response.error) {
          reject(new SubmissionError(formatErrors(response)));
        } else {
          resolve(response);
        }
      });
    });
}

function formatErrors(response) {
  const { payload } = response;

  return {
    _error: payload
  };
}
