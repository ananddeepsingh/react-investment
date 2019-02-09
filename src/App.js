import React, { Component } from 'react';
import $ from '../node_modules/jquery';
import '../node_modules/jquery-ui'

import JSONObj from './db.json';
import Investment from './components/Investment';
import MarketValue from './components/MarketValue';
import CommitmentDate from './components/CommitmentDate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      'data': JSONObj.data,
      'dataBackup': JSONObj.data
    }
    this.updatedData = null;
    this.sortedByID = false;
    this.marketValueFlag = false;
    this.commitmentFlag = false;
    this.dataSet = this.state.data; 
  }

  
  getSortedData(data = [], prop = '', isAsc, sortDate){
    return data.sort((a, b)=>{
      if(sortDate){
        return new Date(b.commitmentDate) - new Date(a.commitmentDate);
      }else{
        return (a[prop] < b[prop] ? -1: 1 ) * (isAsc ? 1 : -1)
      }
    });
  }

  sortByID = (e) => {
    e.preventDefault();
    let arr = [];

    if(!this.sortedByID){
      arr = this.getSortedData(this.dataSet, 'id', true);
      this.sortedByID = true;
    }else{
      arr = this.getSortedData(this.dataSet, 'id', false);
      this.sortedByID = false;
    }
    
    this.setState({
      'data': arr
    });
  }

  sortByInvestment = (e) => {
    e.preventDefault();
    let arr = [];

    if(!this.sortedByIndex){
      arr = this.getSortedData(this.dataSet, 'investment', true);
      this.sortedByIndex = true;
    }else{
      arr = this.getSortedData(this.dataSet, 'investment', false);
      this.sortedByIndex = false;
    }
    
    this.setState({
      'data': arr
    });
  }

  sortByCommitment(e){
    e.preventDefault();
    let arr = [];

    if(!this.commitmentFlag){
      arr = this.getSortedData(this.dataSet, 'commitmentDate', true, true);
      this.commitmentFlag = true;
    }else{
      arr = this.getSortedData(this.dataSet, 'commitmentDate', false, false);
      this.commitmentFlag = false;
    }

    this.setState({
      'data': arr
    });
  }

  sortByMarketValue(e){
    e.preventDefault();
    let arr = null;

    if(!this.marketValueFlag){
      arr = this.getSortedData(this.dataSet, 'marketValue', true);
      this.marketValueFlag = true;
    }else{
      arr = this.getSortedData(this.dataSet, 'marketValue', false);
      this.marketValueFlag = false;
    }

    this.setState({
      'data': arr
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="row">
          <div id="dataID" className="col colID">
              <div id="investmentHeader" className="header" onClick={ (e) => {this.sortByID(e)}}>ID</div>
              {
                this.state.data.map( (data, i) => {
                  return  <div className="row" key={i}>{data.id}</div>
                })
              }
            </div>
            <div id="investment" className="col">
              <div id="investmentHeader" className="header" onClick={ (e) => {this.sortByInvestment(e)}}>Investment</div>
              <Investment records={this.state.data} />
            </div>
            <div id="commitmentDate" className="col">
              <div id="commitmentDateHeader" className="header" onClick={ (e) => {this.sortByCommitment(e)}}>Commitment Date</div>
              <CommitmentDate records={this.state.data} />
            </div>
            <div id="marketValue" className="col">
              <div id="marketValueHeader" className="header" onClick={ (e) => {this.sortByMarketValue(e)}}>Market Value</div>
              <MarketValue records={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
