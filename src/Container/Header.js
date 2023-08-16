import React from 'react'
import '../App.css'
const Header = () => {
  return (
    <section className='bg-light'>
    <div className='container'>
        <nav className='navbar navbar-light  '>
        <a href='/' className='navbar-brand'><span className='text-danger' >R</span>esturant </a>
        <button className='btn btn-primary  position-relative'>
            Orders
            <span className="position-absolute top-0  start-100 translate-middle badge rounded-pill bg-danger">
            99+
            </span>
        </button>
        </nav>
    </div>
    </section>
  )
}

export default Header