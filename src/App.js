import React, { Component } from 'react'
import Card from './Card'

export default class App extends Component {
  render() {
    return (
      <div className='flex justify-center pt-[50px] bg-blue-400 w-screen h-screen'>
        <Card/>
      </div>
    )
  }
}
