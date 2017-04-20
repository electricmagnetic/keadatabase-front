import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: []
    };
  }

  getPage() {
    fetch(`${this.context.wordpress_base}/${this.context.wordpress_site}/pages/${this.props.id}`)
    .then(response => {
      response.json()
      .then(data => {
        this.setState({ page: [data] });
      })
      .catch(error => {
        console.error(error);
      });
    });
  }

  componentDidMount() {
    this.getPage();
  }

  render() {
    return(
      <div className="Page">
        {this.state.page.map(page =>
          <div className="Page-content" key={ page.id }>
            {
              this.props.hideTitle === false &&
              <h2 dangerouslySetInnerHTML={{__html: page.title.rendered }}></h2>
            }
            <p dangerouslySetInnerHTML={{__html: page.content.rendered }}></p>
          </div>
        )}
      </div>
    );
  }
}

Page.defaultProps = {
  hideTitle: false
};

Page.propTypes = {
  id: PropTypes.number.isRequired,
  hideTitle: PropTypes.bool.isRequired
};

Page.contextTypes = {
  wordpress_base: PropTypes.string.isRequired,
  wordpress_site: PropTypes.string.isRequired
};

export default Page;
