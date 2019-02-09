import React, { Component } from 'react';
import Investment from './Investment';
import CommitmentDate from './CommitmentDate';
import MarketValue from './MarketValue';

class RenderRows extends Component {

  constructor( props ){
    super(props);
    this.state = {
      records: this.props.record
    };
  }

  renderData() {
    // this.state.records
  }
  render() {
    return(
      <React.Fragment>
        <tr>
          <Investment records={this.state.records.investment}/>
          <CommitmentDate records={this.state.records.commitmentDate}/>
          <MarketValue records={this.state.records.marketValue}/>
        </tr>
      </React.Fragment>
    )
  }
}
 
export default RenderRows;