import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postReportSighting } from '../../actions/report';
import { formApiAdapter } from '../../components/helpers/formApiAdapter';
import Banner from '../../components/presentation/Banner/Banner';
import ReportSighting from '../../components/report/sighting/ReportSighting';

class ReportSightingPage extends Component {
  render() {
    return (
      <div className="ReportSightingPage">
        <Helmet title="Report Sighting" />
        <Banner size="small">
          <h1>Report Sighting</h1>
        </Banner>
        <div className="container">
          <ReportSighting onSubmit={ this.props.onSubmit } />
        </div>
      </div>
    );
  }
}

ReportSightingPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: formApiAdapter(dispatch, postReportSighting),
    ...bindActionCreators(dispatch)
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportSightingPage);
