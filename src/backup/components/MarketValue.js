import React, { Component } from 'react';

class MarketValue extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      records: this.props.records
    }
  }
   
  render() {
    return(
      <React.Fragment>
        <td>{this.state.records}</td>
      </React.Fragment>
    )
  }
}
 
export default MarketValue;