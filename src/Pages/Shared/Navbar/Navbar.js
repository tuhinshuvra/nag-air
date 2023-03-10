import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo/nag-air-logo.png';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar nav_bg navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand spin_logo">
                        <img className='nav_img' src={Logo} alt="" />
                    </Link>

                    {/* <p><i class="fa fa-spinner w3-spin" style="font-size:64px"></i></p> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbar-nav d-flex justify-content-center align-items-center mx-auto ">
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/booking">Booking</Link>
                            </li>
                            {/* <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/trip">Trip</Link>
                            </li> */}
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/info">FlightInfo</Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/services">Services</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/about">AboutUs</Link>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/contact">Contact</Link>
                            </li>

                            <li className=' mav-item mb-2'>
                                <form className=" " role="search">
                                    {/* <FaSearch></FaSearch> */}
                                    <input className=" align-items-center form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </li>

                            {/* <li className=' d-flex mb-3'>
                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-outline-primary btn-sm">EN</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm">BN</button>
                                </div>
                            </li> */}

                            <li className="nav-item dropdown mb-2">
                                <Link className="  dropdown-toggle fw-bold nav_btn" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profile</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkRight">
                                    {/* <li><Link className="dropdown-item fw-bold nav_btn" to="#">Passenger</Link></li> */}
                                    {/* <li><Link className="dropdown-item fw-bold nav_btn" to="#">Admin</Link></li> */}
                                    <li>
                                        <Link className="nest_nav_btn fw-bold" to="#">Passenger &raquo; </Link>
                                        <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                            <li>
                                                <Link className="  fw-bold nest_nav_btn" to="/passengerEntry">Passenger Entry</Link>
                                            </li>
                                            <li>
                                                <Link className="fw-bold nest_nav_btn" to="/passengerList">Passenger List</Link>
                                            </li>
                                            <li>
                                                <Link className="fw-bold nest_nav_btn" to="/passengerProfile">Passenger Profile</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link className="nest_nav_btn fw-bold" to="#">Admin &raquo; </Link>
                                        <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                                            <li>
                                                <Link className=" ropdown-item fw-bold nest_nav_btn" to="/adminEntry">Admin Entry</Link>
                                            </li>
                                            <li>
                                                <Link className="fw-bold nest_nav_btn" to="/adminList">Admin List</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item mb-2">
                                <Link className=" border-0  mx-lg-1  fw-bold nav_btn" aria-current="page" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;