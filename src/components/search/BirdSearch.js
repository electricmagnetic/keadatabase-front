import React, { Component } from 'react';
import { connect } from 'react-refetch';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';

import { processBirds, getCriteria, filterBirds } from './engine/helpers';
import {
  generateTypeaheadOptions,
  generateTypeaheadToken,
  generateTypeaheadMenuItemChildren,
} from './engine/typeahead';
import Banner from '../../components/presentation/Banner';
import Bird from '../birds/Bird';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

import './BirdSearch.scss';

const API_URL = `${process.env.REACT_APP_API_BASE}/birds/?page_size=10000&ordering=bird_extended,name`;

const Birds = ({ birds }) => (
  <div className="Birds">
    <div className="container">
      <div className="row">
        {birds.map(bird => (
          <Bird
            key={bird.slug}
            bird={bird}
            type="card"
            className="col-sm-6 col-md-4 col-lg-3 mb-3"
          />
        ))}
      </div>
    </div>
  </div>
);

/**
  BirdSearch fetches a series of birds
  */
class BirdSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }

  componentDidMount() {
    this.props.lazyFetchBirds();
  }

  render() {
    if (this.props.birdsFetch) {
      const { birdsFetch, ...others } = this.props;
      const { selected } = this.state;

      if (birdsFetch.pending) {
        return <Loader />;
      } else if (birdsFetch.rejected) {
        return <Error message="Error fetching birds" />;
      } else if (birdsFetch.fulfilled) {
        const birds = processBirds(birdsFetch.value.results);
        const criteria = getCriteria(birds);
        const options = generateTypeaheadOptions(criteria);
        const filteredBirds = selected.length > 0 ? filterBirds(birds, selected) : birds;

        return (
          <div className="BirdSearch">
            <Banner size="small" className="mb-3">
              <h1 className="mb-3">Search Birds</h1>
              <Typeahead
                className="BirdTypeahead mb-3"
                options={options}
                selectHintOnEnter
                highlightOnlyResult
                name="bird"
                placeholder="Type band symbol, colour, name or primary (metal) band"
                id="bird"
                ignoreDiacritics={false}
                maxResults={100}
                paginationText="Display more…"
                multiple
                selected={selected}
                onChange={selected => this.setState({ selected: selected })}
                labelKey={option => option.label}
                renderToken={(...props) => generateTypeaheadToken(...props)}
                renderMenuItemChildren={(...props) => generateTypeaheadMenuItemChildren(...props)}
              />
            </Banner>
            <Birds birds={filteredBirds} {...others} />
          </div>
        );
      }
    } else return null;
  }
}

BirdSearch.propTypes = {
  type: PropTypes.string.isRequired,
};

BirdSearch.defaultProps = {
  type: 'card',
};

export default connect(props => ({
  lazyFetchBirds: () => ({
    birdsFetch: { url: `${API_URL}` },
  }),
}))(BirdSearch);
