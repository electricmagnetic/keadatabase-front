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

function formatBirdErrors(birds) {
  return birds.map(bird => {
    if (bird[0]) {
      const error = bird[0];

      // Create as object (instead of array)
      var bird_obj = {};

      // Add error as error on banded field
      bird_obj.banded = [];
      bird_obj.banded.push(error);

      return bird_obj;
    }
    return bird;
  });
}

function formatErrors(response) {
  const { payload } = response;

  // Define error object with field errors
  var errors = payload.response;

  // Set general form error
  errors._error = payload.message;

  // Set location error on coordinates field (otherwise it won't render)
  if (errors.point_location) {
    const location_error = errors.point_location;
    delete errors.point_location;

    errors.point_location = {
      'coordinates': location_error
    };
  }

  // If error on bird object itself, (i.e. is null) apply to first field (so it renders)
  if (errors.birds) {
    errors.birds = formatBirdErrors(errors.birds);
  }

  return errors;
}
