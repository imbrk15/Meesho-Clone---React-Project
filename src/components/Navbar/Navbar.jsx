import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faCartShopping, faMobile } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'


export default function Navbar(props) {
    const [Logged, setLogged] = useState(localStorage.getItem("loggedin"));
    const cartItems = props.cartItems;
    const handleLogout = () => {
        if (window.confirm("Sure to Logout")) {
            localStorage.setItem("loggedin", false);
            setLogged(false);
        }
    }

    return (
        <div>
            <nav className='navbar navbar-expand bg-white py-1 shadow-sm '>
                <div className='container '>
                    <NavLink className='navbar-brand fs-4' to='/'>
                        <img src={require('./images/meesho-logo.png').default} alt="logo" />
                    </NavLink>
                    <div className='inputDiv'>
                        <img className='searchicon' src={require('./images/search-icon.png').default} alt="search-Icon" />
                        <input type="text" id='input' placeholder='Try Saree, Kurti or Search by Product Code' />
                    </div>

                    <div className='collapse navbar-collapse ' id='navbarcontent'>
                        <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                            <li className="nav-item px-3">
                                <FontAwesomeIcon icon={faMobile} />
                                Download App
                            </li>
                            <li className="nav-item">
                                Become a Supplier
                            </li>
                        </ul>
                        <div className="buttons">
                            {
                                Logged ? (
                                    <button className='btn btn-outline-dark' onClick={handleLogout}>
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                        Log Out
                                    </button>
                                ) : (
                                    <NavLink to='/login' className='btn btn-outline-dark'>
                                        <FontAwesomeIcon icon={faRightFromBracket} />
                                        Log In
                                    </NavLink>
                                )
                            }
                            <NavLink className='btn btn-outline-dark ms-2' to='/cart'>
                                <FontAwesomeIcon icon={faCartShopping} />
                                Cart ({cartItems?.length})
                            </NavLink>
                        </div>
                    </div>

                </div>
            </nav>
            <div className='navbar navbar-expand-lg bg-white py-1 shadow-sm'>
                <div className='collapse navbar-collapse' id='navbarcontent'>
                    <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                        <li className="nav-item">
                            <NavLink className='nav-link active' aria-current='page' to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/products'>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/contact'>
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/about'>
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
