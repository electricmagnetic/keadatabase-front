import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import getBandCombos from '../../actions/bandCombos';

class BandComboSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: '',
      study_area: '',
      bird__status: '',
      colours: '',
      symbols: '',
      is_extended: 1,
      is_featured: 1,
      search: '',
      page_size: 250,
      ordering: 'bird__bird_extended,bird__name'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getBandCombos(queryString.stringify(this.state)));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(getBandCombos(queryString.stringify(this.state)));
  }

  render() {
    return (
      <form className="BandComboSearchForm mb-3" onSubmit={ this.handleSubmit }>
        <div className="form-row">
          <div className="col">
            <label htmlFor="style">Style</label>
            <select className="form-control" name="style" id="style" onChange={ this.handleChange } value={ this.state.style }>
              <option value="">All</option>
              <option value="new">New</option>
              <option value="old">Old</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="symbols">Symbols</label>
            <input type="text" className="form-control"  name="symbols" id="symbols" onChange={ this.handleChange } value={ this.state.symbols } />
          </div>
          <div className="col">
            <label htmlFor="colours">Colour</label>
            <input type="text" className="form-control"  name="colours" id="colours" onChange={ this.handleChange } value={ this.state.colours } />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input type="text" className="form-control"  name="search" id="search" onChange={ this.handleChange } value={ this.state.search } />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
};

const mapStateToProps = (state) => {
  return { bandCombos: state.bandCombos };
}

export default connect(mapStateToProps)(BandComboSearchForm);
