import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';
import BirdCard from '../birds/BirdCard';

// TODO: Fix key (band combos don't always have bird?)

class BandCombosList extends Component {
  render() {
    const { bandCombos } = this.props;

    if (bandCombos.pending) return <Loader />;
    else if (bandCombos.rejected) return <Error reason={ bandCombos.value.message }/>;
    else if (bandCombos.fulfilled) {
      return (
        <div className="BandCombosList">
          <div className="row">
            { bandCombos.value.results.map((bandCombo) =>
              <div className="col-6 col-sm-4 col-md-3 mb-3" key={ bandCombo.bird.slug }>
                <BirdCard bird={ bandCombo.bird }  />
              </div>
            )}
          </div>
        </div>
      );
    }
    else return null;
  }
};

const mapStateToProps = (state) => {
  return { bandCombos: state.bandCombos };
}

export default connect(mapStateToProps)(BandCombosList);
