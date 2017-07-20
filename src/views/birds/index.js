import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Banner from '../../components/presentation/Banner/Banner';
import Birds from '../../components/birds/Birds';
// import BirdsFilterForm from '../../components/birds/search/BirdsFilterForm';
import BirdsSearchForm from '../../components/birds/search/BirdsSearchForm';
import { fetchBandCombosIfNeeded } from '../../actions/bandCombos.js';

class BirdsPage extends Component {
  submit = (data, dispatch) => {
    const query = data.search || '';
    dispatch(fetchBandCombosIfNeeded(query));
  }

  render() {
    return (
      <div className="BirdsPage">
        <Helmet title="Birds" />
        <Banner size="small">
          <h1>Birds</h1>
        </Banner>
        <div className="container">
          <BirdsSearchForm onSubmit={this.submit} />
          {/* <div className="row">
            <div className="col-sm-4 col-md-3">
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="heading">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" href="#filters" aria-expanded="true" aria-controls="filters">
                      Filters
                    </a>
                    &nbsp;
                    <span className="caret"></span>
                  </h4>
                </div>
                <div id="filters" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading">
                  <div className="panel-body">
                    <BirdsFilterForm onSubmit={this.submit} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8 col-md-9">*/}
              <Birds />
            {/* </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default BirdsPage;
