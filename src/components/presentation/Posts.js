import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import { getPosts } from '../../actions/wordpress';

import './Posts.scss';

const Post = ({ post }) => {
  return (
    <li className="Post mb-3">
      <a href={post.link}>
        <h3 className="h5 mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      </a>
      <h4 className="h6">
        <Moment format="dddd DD MMMM YYYY [at] h:mm a">{post.date}</Moment>
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </li>
  );
};

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getPosts());
  }

  render() {
    const { posts } = this.props;

    if (posts.pending) return <Loader />;
    else if (posts.rejected) return <Error reason={posts.value.message} />;
    else if (posts.fulfilled) {
      return (
        <div className="Posts">
          <ul className="list-unstyled">
            {posts.value.map(post => (
              <Post post={post} key={post.id} />
            ))}
          </ul>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(Posts);
