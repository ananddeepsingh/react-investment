import React, { Component } from 'react';

class CommitmentDate extends Component {
  constructor( props ){
    super( props);
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
 
export default CommitmentDate;