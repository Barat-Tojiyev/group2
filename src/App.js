import React, { Component } from 'react'
import { data } from './Data';
export default class App extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            surname:'',
            student:data
        }
    }  
    
  render() {
    const getInput =(e)=>{
        const {value, name}=e.target;
        this.setState({[name]:value})
    }
  
   
    return (
      <div className='text-green-500 m-9'>
         <h3>Name: {this.state.name}</h3>
         <h3>Surname:{this.state.surname}</h3>
         <input type='text' name='name' onChange={getInput} className='px-2 py-1 outline-none  border-2  border-gray-400' /><br/> <br/>
         <input type='text' name='surname' onChange={getInput} className='px-2 py-1 outline-none  border-2  border-gray-400' />


        <div className='container text-black'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400"'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th className='py-3 px-6'>ID</th>
                                <th className='py-3 px-6'>Name</th>
                                <th className='py-3 px-6'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
            {
                this.state.student.map(({id,name,status})=>{
                return(  
                  
                            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                <td className='py-4 px-6'>{id}</td>
                                <td className='py-4 px-6'>{name}</td>
                                <td className='py-4 px-6'>{status}</td>
                            </tr>
                      
                ) 
                })
            }
  </tbody>
                    </table>
        </div>
      </div>
      
    )
  }
}
