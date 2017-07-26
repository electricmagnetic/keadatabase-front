import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import { getReportNonSightingOptions } from '../../actions/report';
import { postReportNonSighting } from '../../actions/report';
import { formApiAdapter } from '../../components/helpers/formApiAdapter';

import Error from '../../components/helpers/Error';
import Loader from '../../components/helpers/Loader';
import Banner from '../../components/presentation/Banner/Banner';
import ReportNonSighting from '../../components/report/nonSighting/ReportNonSighting';

class ReportNonSightingPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReportNonSightingOptions());
  }

  render() {
    if (this.props.isError) {
      return (<div className="container"><Error /></div>);
    }
    else if (this.props.isFetching) {
      return (<div className="container"><Loader /></div>);
    }
    else if (this.props.nonSightingOptions) {
      return (
        <div className="ReportNonSightingPage">
          <Helmet title="Report Non-Sighting" />
          <Banner size="small">
            <h1>Report Non-Sighting</h1>
          </Banner>
          <div className="container">
            <ReportNonSighting
              onSubmit={ this.props.onSubmit }
              onSubmitSuccess={ this.props.onSubmitSuccess }
              nonSightingOptions={ this.props.nonSightingOptions }
            />
          </div>
        </div>
      );
    }
    else {
      return (null);
    }
  }
}

ReportNonSightingPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  nonSightingOptions: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: formApiAdapter(dispatch, postReportNonSighting),
    onSubmitSuccess: (result, dispatch, props) => {
      dispatch(push('/report/non-sighting/success'));
      props.reset();
    },
    dispatch,
    ...bindActionCreators(dispatch)
  }
}

function mapStateToProps(state) {
  const { reportReducer } = state;

  const {
    isFetching,
    nonSightingOptions,
    isError
  } = reportReducer || {
    isFetching: true,
    nonSightingOptions: {},
    isError: false
  };

  return {
    isFetching,
    nonSightingOptions,
    isError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportNonSightingPage);
