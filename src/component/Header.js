import React,{Component} from 'react'
import './Header.css'

class Header extends Component{
  
  constructor(){
    super()

    this.state={
      title:'React App',
      keyword:"User Input Here"
    }
  }
  // test="Hi"
  
  handleChange=(e)=>{
    // console.log(e.target.value)
    this.setState({keyword:e.target.value?e.target.value:'User Text Here'})
    // calling props of app
    this.props.userInput(e.target.value)
  }

  render(){
    console.log("when ever state is updated it be printed")
    return (
      <div>
        <header>
          <div className='logo'>{this.state.title}</div>
          <center>
            <input onChange={this.handleChange}/>
            {/* <div style={{color:"white",fontSize:"20px"}}>{this.state.keyword}</div> */}
            <div style={{color:"white",fontSize:"20px"}}>{this.state.keyword}</div>
            {/* {this.props.name} */}
          </center>
        </header>
        <hr/>
        {/* {this.test} */} 
      </div>
    )
  }
}

export default Header;

// export default function Header() {
//   return (
//     <div>
//         <h1 style={{textAlign:"center"}}>React App</h1>
//         <hr/>
//     </div>
//   )
// }
