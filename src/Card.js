import React, { Component } from 'react'

export default class Card extends Component {
constructor(props){
    super(props);
    this.state={
        title:'Here is the name',
        password:'Here is the password'
    }
}
  render() {
    
    const getInt1=(e)=>{
        this.setState({title:e.target.value})        
    }
    const getInt2=(e)=>{       
        this.setState({password:e.target.value})
    }
    return (<>


<div  className='w-[30%] h-[900px]  mx-2  pt-[70px] text-slate-600 bg-white rounded-xl'>
<h1 className='text-6xl pl-9 font-semibold '>Sign Up</h1>
    <div className='w-[80%] mx-[auto]'>

    <div className='pt-11 text-4xl'>
        <h4 className='py-3' >Name</h4>
        <input type='text' onChange={getInt1} className='w-[100%] p-4 required:border-red-500 border-4 outline-none rounded-md border-slate-500' />
    </div>
    <div className='pt-11 text-4xl'>
        <h4 className='py-3' >Password</h4>
        <input type='password' onChange={getInt2} className='w-[100%] p-4 required:border-red-500 border-4 outline-none rounded-md border-slate-500' />
    </div>
    <div className='pt-11 text-4xl'>
       <button className='w-[100%] bg-[#EE5784] py-5 rounded-md text-white'>Sign Up</button>
    </div>
    <div className='pt-11 text-4xl'>
        <h4 className='py-3' >Name: <span className='text-green-600'>{this.state.title}</span></h4>
       
    </div>
    <div className='pt-11 text-4xl'>
        <h4 className='py-3' >Password: <span className='text-blue-600'>{this.state.password}</span></h4>
       
    </div>
    </div>
    
</div>


    </>
     
    )
  }
}
