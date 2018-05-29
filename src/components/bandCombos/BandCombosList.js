import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../helpers/Loader';
import Error from '../helpers/Error';

// TODO: Fix key (band combos don't always have bird?)

class BandCombosList extends Component {
  render() {
    const { bandCombos } = this.props;

    if (bandCombos.pending) return <Loader />;
    else if (bandCombos.rejected) return <Error reason={ bandCombos.value.message }/>;
    else if (bandCombos.fulfilled) {
      return (
        <div className="BandCombosList">
          { bandCombos.value.results.map((bandCombo) =>
            <li key={ bandCombo.bird.slug }>{ bandCombo.name } &middot; { bandCombo.bird && bandCombo.bird.name }</li>
          )}
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
