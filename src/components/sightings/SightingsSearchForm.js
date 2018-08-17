import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import qs from 'qs';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

import Banner from '../../components/presentation/Banner';
import { setSightingsFilter } from '../../actions/sightingsFilter';

const MACHINE_DATE_FORMAT = 'YYYY-MM-DD';

class SightingsSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.convertQueryToState();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  convertQueryToState() {
    const query = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    return {
      geocode: query.geocode || '',
      date_from: query.date_from ? moment(query.date_from, MACHINE_DATE_FORMAT) : null,
      date_to: query.date_to ? moment(query.date_to, MACHINE_DATE_FORMAT) : null,
      contributor: query.contributor || '',
      group_size: query.group_size || 0,
      group_size_validator: query.group_size_validator || '>=',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setSightingsFilter(this.state));
  }

  componentDidUpdate(prevProps) {
    const { dispatch, location } = this.props;
    if (location.search !== prevProps.location.search) {
      this.setState(
        this.convertQueryToState(),
        () => dispatch(setSightingsFilter(this.state))
      );
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setSightingsFilter(this.state));
    const query = qs.stringify({
      geocode: this.state.geocode,
      date_from: this.state.date_from && this.state.date_from.format(MACHINE_DATE_FORMAT),
      date_to: this.state.date_to && this.state.date_to.format(MACHINE_DATE_FORMAT),
      contributor: this.state.contributor,
      group_size: this.state.group_size,
      group_size_validator: this.state.group_size_validator,
    });
    dispatch(push(`/sightings?${query}`));
  }

  render() {
    return (
      <Banner size="small" additionalClasses="mb-4">
        <form className="SightingsSearchForm" onSubmit={ this.handleSubmit }>
          <div className="form-row mb-3">
            <div className="col-md">
              <label htmlFor="date_from">Date from</label>
              <DatePicker
                selected={ this.state.date_from }
                onChange={ date => this.setState({ date_from: date }) }
                dateFormat="D MMM YYYY"
                className="form-control"
                id="date_from"
              />
            </div>

            <div className="col-md">
              <label htmlFor="date_to">Date to</label>
              <DatePicker
                selected={ this.state.date_to }
                onChange={ date => this.setState({ date_to: date }) }
                dateFormat="D MMM YYYY"
                className="form-control"
                id="date_to"
              />
            </div>

            <div className="col-md">
              <label htmlFor="geocode">Location</label>
              <input type="text" className="form-control"  name="geocode" id="geocode" onChange={ this.handleChange } value={ this.state.geocode } />
            </div>

            <div className="col-md">
              <label htmlFor="contributor">Contributor</label>
              <input type="text" className="form-control"  name="contributor" id="contributor" onChange={ this.handleChange } value={ this.state.contributor } />
            </div>
          </div>

          <div className="form-row mb-3">
            <div className="col-4 col-md-2">
              <label htmlFor="group_size_validator">Group size</label>
              <select className="form-control" name="group_size_validator" id="group_size_validator" onChange={ this.handleChange } value={ this.state.group_size_validator }>
                <option value=">=" default>{'>='}</option>
                <option value="<=">{'<='}</option>
                <option value="=">{'='}</option>
              </select>
            </div>

            <div className="col-4 col-md-2">
              <label htmlFor="group_size" style={{ color: 'transparent' }}>number</label>
              <input type="number" className="form-control" name="group_size" id="group_size" onChange={ this.handleChange } value={ this.state.group_size } />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </Banner>
    );
  }
};

export default compose(withRouter, connect())(SightingsSearchForm);
