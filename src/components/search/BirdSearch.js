import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';
import useSWR from 'swr';

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
const PAGE_SIZE = 96;
const CACHE_TIME = 24 * 60 * 60 * 1000;
const fetcher = url => fetch(url).then(r => r.json());

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
const BirdSearch = props => {
  const [selected, setSelected] = useState([]);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const { ...others } = props;

  const { data, error, isValidating } = useSWR(`${API_URL}`, fetcher, {
    dedupingInterval: CACHE_TIME,
  });

  if (isValidating) {
    return <Loader message="Loading birds" />;
  } else if (error) {
    return <Error message="Error fetching birds" />;
  } else if (data) {
    const birds = processBirds(data.results);
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
            onChange={selected => {
              setSelected(selected);
              setVisible(PAGE_SIZE);
            }}
            labelKey={option => option.label}
            renderToken={(...props) => generateTypeaheadToken(...props)}
            renderMenuItemChildren={(...props) => generateTypeaheadMenuItemChildren(...props)}
          />
        </Banner>
        <Birds birds={filteredBirds.slice(0, visible)} {...others} />
        {visible <= filteredBirds.length && (
          <section className="my-3 text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setVisible(visible + PAGE_SIZE)}
            >
              Load more
            </button>
          </section>
        )}
      </div>
    );
  } else return null;
};

BirdSearch.propTypes = {
  type: PropTypes.string.isRequired,
};

BirdSearch.defaultProps = {
  type: 'card',
};

export default BirdSearch;
