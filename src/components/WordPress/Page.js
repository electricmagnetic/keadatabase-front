import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPagesIfNeeded } from '../../actions/pages.js';

class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPagesIfNeeded());
  }

  render() {
    const page = this.props.pages.filter(page => { return page.id  === this.props.id });
    return(
      <div className="Page">
        {!this.props.pages.length &&
          <p><div className="loader"></div></p>
        }
        {page.map(page =>
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
  hideTitle: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { pagesStore } = state;

  const {
      isFetching,
      lastUpdated,
      items: pages
  } = pagesStore || {
    isFetching: true,
    items: []
  }

  return {
    isFetching,
    lastUpdated,
    pages,
  }
}

export default connect(mapStateToProps)(Page);
