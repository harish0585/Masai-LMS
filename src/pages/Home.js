import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Routers } from '../Components/Routers'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Routers/>
        <br/>
        <button className='btn btn-danger'>Logout</button>
    </div>
  )
}
