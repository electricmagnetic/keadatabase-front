import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { formValueSelector } from 'redux-form'

import { getReportSightingOptions } from '../../actions/report';
import { postReportSighting } from '../../actions/report';
import { formApiAdapter } from '../../components/helpers/formApiAdapter';

import Error from '../../components/helpers/Error';
import Loader from '../../components/helpers/Loader';
import Banner from '../../components/presentation/Banner/Banner';
import ReportSighting from '../../components/report/sighting/ReportSighting';

class ReportSightingPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getReportSightingOptions());
  }

  render() {
    if (this.props.isError) {
      return (<div className="container"><Error /></div>);
    }
    else if (this.props.isFetching) {
      return (<div className="container"><Loader /></div>);
    }
    else if (this.props.sightingOptions) {
      return (
        <div className="ReportSightingPage">
          <Helmet title="Report Sighting" />
          <Banner size="small">
            <h1>Report Sighting</h1>
          </Banner>
          <div className="container">
            <ReportSighting
              onSubmit={ this.props.onSubmit }
              onSubmitSuccess={ this.props.onSubmitSuccess }
              sightingOptions={ this.props.sightingOptions }
              sightingType={ this.props.sightingType }
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

ReportSightingPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired,
  sightingOptions: PropTypes.object,
  sightingType: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: formApiAdapter(dispatch, postReportSighting),
    onSubmitSuccess: (result, dispatch, props) => {
      if(result.payload.id) {
        dispatch(push(`/report/sighting/success/${result.payload.id}`));
      }
      else {
        dispatch(push('/report/sighting/success'));
      }
      props.reset();
    },
    dispatch,
    ...bindActionCreators(dispatch)
  }
}

function mapStateToProps(state) {
  const { reportReducer } = state;

  const selector = formValueSelector('reportSighting');
  const sightingType = selector(state, 'sighting_type');

  const {
    isFetching,
    sightingOptions,
    isError
  } = reportReducer || {
    isFetching: true,
    sightingOptions: {},
    isError: false
  };

  return {
    isFetching,
    sightingOptions,
    isError,
    sightingType
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportSightingPage);
