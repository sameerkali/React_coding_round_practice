import React from 'react'
import { Link } from 'react-router-dom'

const Thirteen = () => {
  return (
    <div>
      {/* main content || Breadcrumbs */}
      <p>Breadcrumbs</p>
      <Link to='/page01'>page01</Link>
      <Link to='/page02'>page02</Link>
      <Link to='/page03'>page03</Link>
    </div>
  )
}

export default Thirteen