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
        {/* <div  className="divTableRow">
          <div className="divTableCell" id="investment"><Investment records={this.state.records.investment}/></div>
          <div className="divTableCell" id="commitmentDate"><CommitmentDate records={this.state.records.commitmentDate}/></div>
          <div className="divTableCell" id="marketValue"><MarketValue records={this.state.records.marketValue}/></div>
        </div> */}
          <div className="row">anand</div>
          <div className="row">deep</div>
          <div className="row">singh</div>
      </React.Fragment>
    )
  }
}
 
export default RenderRows;