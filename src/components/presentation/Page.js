import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import { getPages } from '../../actions/wordpress';

import './Page.css';

class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getPages());
  }

  render() {
    const { pages, hideTitle, id } = this.props;

    // Add sr-only (screen-reader only) class
    const className = hideTitle ? 'sr-only' : '';

    if (pages.pending) return <Loader />;
    else if (pages.rejected) return <Error reason={pages.value.message} />;
    else if (pages.fulfilled) {
      const page = pages.value.page[id];

      return (
        <div className="Page">
          <div className="Page-content" key={page.id}>
            <h2 dangerouslySetInnerHTML={{ __html: page.title.rendered }} className={className} />
            <p dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
          </div>
        </div>
      );
    } else return null;
  }
}

Page.propTypes = {
  id: PropTypes.number.isRequired,
  hideTitle: PropTypes.bool.isRequired,
};

Page.defaultProps = {
  hideTitle: false,
};

const mapStateToProps = state => {
  return { pages: state.pages };
};

export default connect(mapStateToProps)(Page);
