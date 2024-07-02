import React from 'react'
import { Link } from 'react-router-dom'
import Page02 from './Page02'

const Breadcrumbs = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
    <Link to={`/`} className='text-3xl font-bold underline'>Home</Link>
      {/* main content || Breadcrumbs */}
      <p className='text-5xl font-bold font-serif text-purple-800'> this is my ecomamrce page (13)</p>
      <p className='text-purple-900'>Breadcrumbs</p>
      <Page02/>
      <div className='flex gap-5 mt-10'>
        <Link className='underline' to='/page01'>All Product</Link>
        <div> / </div>
        <Link className='underline' to='/page02'>Breadcrumbs (not implimented yet)</Link>
        <div> / </div>
        <Link className='underline' to='/page03'> Details page ( Do not go there )</Link>
      </div>
    </div>
  )
}

export default Breadcrumbs;