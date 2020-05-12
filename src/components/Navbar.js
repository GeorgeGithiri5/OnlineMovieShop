import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <div className= "navbar bg-dark">
            <div className='navbar-header'>
                <Link to='/' className='navbar-brand'>MovieShop</Link>
            </div>
            <ul className="nav navbar-nav">
                <li className="nav-item nav-link">
                    <Link to='/Movies'>Movies</Link>
                </li>
            </ul>
        </div>
    )
}