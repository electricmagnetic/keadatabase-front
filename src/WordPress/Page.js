// make global const with wordpress api link

import React, { Component } from 'react';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: []
    };
  }

  getPage() {
    fetch(`${this.context.wordpress_base}${this.context.wordpress_site}/pages/${this.props.id}`)
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
          <div className="Page-content">
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
  id: React.PropTypes.number.isRequired,
  hideTitle: React.PropTypes.bool.isRequired
};

Page.contextTypes = {
  wordpress_base: React.PropTypes.string.isRequired,
  wordpress_site: React.PropTypes.string.isRequired
};

export default Page;
