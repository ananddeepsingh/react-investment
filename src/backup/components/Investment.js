import React, { Component } from 'react';

class Poll extends Component {

  constructor( props ){
    super(props);
    this.state = {
      records: this.props.records
    };
  }

  renderData() {
    // this.state.records
  }
  render() {
    return(
      <React.Fragment>
          <td>{this.state.records}</td>
      </React.Fragment>
    )
  }
}
 
export default Poll;