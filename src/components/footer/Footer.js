import React from 'react';

//Images
import logo from '../../assets/logo.png';

//CSS File
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (

        <section className='footer'>

            <footer>

                <div className='future'>
                    <div className='footer-logo'>
                    <img src={logo} alt="Logo" />
                    <h2>ASSISTAI</h2>
                    </div>
                    <p>Step into the future of effortless assistance, where innovation meets simplicity.</p>
                </div>

                <div className='product'>
                    <h6>Product</h6>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/examples'>Examples</Link></li>
                    <li><Link to='/integrations'>Integrations</Link></li>
                </div>

                <div className='company'>
                    <h6>Company</h6>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/pricing'>Pricing</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </div>

                <div className='connect'>
                    <h6>Connect</h6>
                    <li><Link to='/twitter'>Twitter</Link></li>
                    <li><Link to='/github'>Github</Link></li>
                    <li><Link to='/discord'>Discord</Link></li>
                </div>

            </footer>

            <div className='copyright'>
                <p>Copyright © 2024 AssistAI. All Rights Reserved.</p>
                <div className='service-policy'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>

        </section>

    )

}

export default Footer;