import React, { Component } from "react";
import Header from './Header.js'
import Footer from './Footer.js'
import Display from "./productDisplay.js";
import JSON from './db.json'

class App extends Component{
  constructor(props){
    super(props)

    this.state={
      productData:JSON,
      filterData:JSON,
    }
  }

  filterData = (keyword) => {
    let output = this.state.productData.filter((data) => {
        return data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
    })

    this.setState({filterData:output});
}

  render(){
  return (
    <div>
      <Header userInput={(data)=>this.filterData(data)}/>
       <Display productData={this.state.productData}/>
      <Footer year='2023' month="Jan"/>
    </div>
  );
}
}

export default App;
