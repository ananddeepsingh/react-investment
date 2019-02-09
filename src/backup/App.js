import React, { Component } from 'react';
import JSONObj from './db.json';
import RenderRows from './components/RenderRows';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      'data': JSONObj.data
    }
  }

  renderRows(){
    let arr = [];

    this.state.data.map( (record, i) => {
      arr.push(<RenderRows record={record} key={i}/>)
    })

    return arr
  }
  
  handleHeaderClick(e){
    e.preventDefault();

    let val = e.target.innerText;
    console.log(val)
  }

  sortByTrue(a, b) {
    var genreA = a.status;
    var genreB = b.status;
    
    var  comparison = 0;
    if (genreA < genreB) {
    comparison = 1;
    } else if (genreA > genreB) {
    comparison = -1;
    }
    return comparison;
  }

  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <div id="investment">
            <table>
              <thead>
                <tr>
                  <td onClick={(e) => {this.handleHeaderClick(e)} }> Investment </td>
                  <td onClick={(e) => {this.handleHeaderClick(e)}}> Commitment Date </td>
                  <td onClick={(e) => {this.handleHeaderClick(e)}}> MarketValue </td>
                </tr>
              </thead>
              <tbody>
                  {this.renderRows()}               
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
