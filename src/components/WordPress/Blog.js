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
        {this.props.isFetching &&
          <div className="loader"></div>
        }
        {this.props.isError &&
          <div className="error"><p><span className="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>
Hmm, something went wrong here. Try refreshing?</p></div>
        }
        {this.props.items &&
          <div className="items">
            <ul className="list-unstyled">
              {this.props.items.map(post =>
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
        }
      </div>
    );
  }
}

Blog.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
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
