import * as React from 'react';
import './Nav.css';
import logo from './Images/logoimg.jfif';


function Nav() {
    return (
        <nav className='navbar' >

            <img src={logo} className='logocls' alt="logo" />

            <h1>பாண்டித்யம்</h1>

            <ul className='nav-lists'>
                <li>

                    <a href="/" className='home'> HOME </a>
                </li>

                <li>

                    <a href="/About" className='About'> ABOUT US </a>

                </li>

                <li>

                    <a href="/ratings & review" className='ratings & review'>RATINGS & REVIEW </a>

                </li>

                <li>

                    <a href="/Login" className='login'> LOGIN </a>

                </li>

                <li>

                    <a href="/signup" className='signup'>SIGNUP </a>

                </li>

            </ul>

        </nav>

    )


}

export default Nav;







