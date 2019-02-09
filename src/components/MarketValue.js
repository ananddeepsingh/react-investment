import React, { Component } from 'react';

class MarketValue extends Component {
  
  constructor( props ){
    super(props);
    this.state = {
      records: this.props.records
    };
  }

  renderData() {
    var arr = [];
    this.state.records.map( (record,i) => {
      arr.push(<div className="row" key={i}>{record.marketValue}</div>)
    })

    return arr
  }
  render() {
    return(
      <React.Fragment>
          {this.renderData()}
      </React.Fragment>
    )
  }
}
 
export default MarketValue;