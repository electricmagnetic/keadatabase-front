import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import { getPages } from '../../actions/wordpress';

class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getPages());
  }

  render() {
    const { pages } = this.props;

    if (pages.pending) return <Loader />;
    else if (pages.rejected) return <Error reason={ pages.value.message }/>;
    else if (pages.fulfilled) {
      const page =  pages.value.page[this.props.id];

      return (
        <div className="Page">
          <div className="Page-content" key={ page.id }>
            <h2 dangerouslySetInnerHTML={{__html: page.title.rendered }}></h2>
            <p dangerouslySetInnerHTML={{__html: page.content.rendered }}></p>
          </div>
        </div>
      );
    }
    else return null;
  }
};

Page.propTypes = {
  id: PropTypes.number.isRequired
}


const mapStateToProps = (state) => {
  return { pages: state.pages };
}

export default connect(mapStateToProps)(Page);
