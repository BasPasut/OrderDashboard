import React from 'react'
import {NavLink} from 'react-router-dom'
import banner from '../../img/banner.jpg'

const Navbar = () => {
    return (
        <nav className ="nav-wrapper grey darken-3">
             <div className="container">
                <NavLink to='/' className="brand-logo">PEGA</NavLink>
                <ul className="right">
                    <li><NavLink to='/createOrder'>Create Order</NavLink></li>
                </ul>
            </div>       
        </nav>
    )
}

export default Navbar
