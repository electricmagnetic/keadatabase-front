import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import Error from '../Helpers/Error';
import Loader from '../Helpers/Loader';
import { fetchPostsIfNeeded } from '../../actions/posts.js';

import './Blog.css';

class BlogPost extends Component {
  render () {
    const { post } = this.props;

    return(
      <li className="BlogPost">
        <a href={ post.link }>
          <h3 dangerouslySetInnerHTML={{__html: post.title.rendered }}></h3>
        </a>
        <h4><Moment format='dddd DD MMMM YYYY, hh:mm a'>{ post.date }</Moment></h4>
        <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}></div>
      </li>
    );
  }
}

class Blog extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    if (this.props.isFetching) {
      return (<Loader />);
    }
    else if (this.props.isError) {
      return (<Error />);
    }
    else {
      return(
        <div className="Blog">
          <h2>Blog</h2>
          <ul className="list-unstyled">
            {this.props.items.map(post =>
              <BlogPost post={ post } key={ post.id }/>
            )}
          </ul>
          <a href="https://blog.keadatabase.nz/">More posts</a>
        </div>
      );
    }
  }
}

Blog.propTypes = {
  items: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const { postsReducer } = state;

  const {
      isFetching,
      items,
      isError
  } = postsReducer || {
    isFetching: true,
    items: [],
    isError: false
  }

  return {
    isFetching,
    items,
    isError
  }
}

export default connect(mapStateToProps)(Blog);
