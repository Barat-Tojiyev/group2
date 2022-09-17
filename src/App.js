import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
    super(props);
      this.state={
    son:0
     }

    }
    
  render() {
    
    const plus=()=>{
     this.setState({son:this.state.son+1})
    }
    const minus=()=>{     
        this.setState({son:this.state.son-1})
    }  

    return (
      <div className='text-2xl text-center p-9'>
      <button onClick={minus} className='bg-red-700 inline-block text-white font-bold rounded-md w-[50px] h-[50px]' >-</button>
        <span className='px-8'>Hello, {this.state.son}</span>
        <button onClick={plus} className='bg-green-700 inline-block text-white font-bold rounded-md w-[50px] h-[50px]' >+</button>
      </div>
    )
  }
}
