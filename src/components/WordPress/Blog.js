import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      link: ''
    };
  }

  getLink() {
    this.setState({ link: 'https://' + this.context.wordpress_site });
  }

  getPosts() {
    fetch(`${this.context.wordpress_base}/${this.context.wordpress_site}/posts?per_page=${this.props.number}`)
    .then(response => {
      response.json()
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
          console.error(error);
      });
    });
  }

  componentDidMount() {
    this.getLink();
    this.getPosts();
  }

  render() {
    return(
      <div className="Blog">
        <h2>Blog</h2>
        <ul className="list-unstyled">
          {this.state.posts.map(post =>
            <li key={ post.id }>
              <a href={ post.link }>
                <h3 dangerouslySetInnerHTML={{__html: post.title.rendered }}></h3>
              </a>
              <h4 dangerouslySetInnerHTML={{__html: post.date }}></h4>
              <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered }}></div>
            </li>
          )}
        </ul>
        { this.state.link && <a href={ this.state.link }>More posts</a>}
      </div>
    );
  }
}

Blog.propTypes = {
  number: React.PropTypes.number
};

Blog.defaultProps = {
  number: 3
};

Blog.contextTypes = {
  wordpress_base: React.PropTypes.string.isRequired,
  wordpress_site: React.PropTypes.string.isRequired
};

export default Blog;
