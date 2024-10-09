import React from 'react';

//React-Router-Dom
import { Link } from 'react-router-dom';

//Logo
import logo from '../../assets/logo.png';

//CSS File
import './navbar.css';

const Navbar = () => {

    return (

        <nav className='navbar'>

            <div className='nav-left-side'>
                <img className='logo' src={logo} alt="Logo" />
                <h1 className='logo-text'>ASSISTAI</h1>
            </div>

            <div className='nav-anchor-tags'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/examples'>Examples</Link>
                    </li>
                    <li>
                        <Link to='/effortlessintegrations'>Integrations</Link>
                    </li>
                    <li>
                        <Link to='/pricingplans'>Pricing</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className='nav-right-side'>
                <button>
                    Get Started
                </button>
            </div>

        </nav>

    )

}

export default Navbar;