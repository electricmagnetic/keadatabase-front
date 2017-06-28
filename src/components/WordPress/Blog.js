import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPostsIfNeeded } from '../../actions/posts.js';

import './Blog.css';

class Blog extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    return(
      <div className="Blog">
        <h2>Blog</h2>
        {!this.props.posts.length &&
          <p><div className="loader"></div></p>
        }
        <ul className="list-unstyled">
          {this.props.posts.map(post =>
            <li className="BlogPost" key={ post.id }>
              <a href={ post.link }>
                <h3 dangerouslySetInnerHTML={{__html: post.title.rendered }}></h3>
              </a>
              <h4 dangerouslySetInnerHTML={{__html: new Date(post.date).toLocaleString()}}></h4>
              <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}></div>
            </li>
          )}
        </ul>
        <a href="https://blog.keadatabase.nz/">More posts</a>
      </div>
    );
  }
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { postsStore } = state;

  const {
      isFetching,
      lastUpdated,
      items: posts
  } = postsStore || {
    isFetching: true,
    items: []
  }

  return {
    isFetching,
    lastUpdated,
    posts,
  }
}

export default connect(mapStateToProps)(Blog);
