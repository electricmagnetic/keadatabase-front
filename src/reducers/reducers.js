import { combineReducers } from 'redux';

const initialBirdsState = {};
const birds = (state = initialBirdsState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const initialPagesState = {};
const pages = (state = initialPagesState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const initialPostsState = {};
const posts = (state = initialPostsState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default combineReducers({
  birds,
  pages,
  posts
});
