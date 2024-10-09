import React from 'react';

//Images
import logo from '../../assets/logo.png';

import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.png';
import team4 from '../../assets/team4.png';
import team5 from '../../assets/team5.png';
import team6 from '../../assets/team6.png';

//CSS File
import './contact.css';

const Contact = () => {

    return (

        <section className='contact'>

            <div className='contact-content'>

                <h1>Contact   <span>Us</span> </h1>
                <p>Got questions? Reach out! We're here and ready to assist.</p>

            </div>

            <h1>Get <span>in Touch</span> </h1>

            <div className='contact-us'>

                <div className='contact-info'>

                    <div className='contact-logo'>
                    <img className='logo' src={logo} alt="Logo" />
                    <h2>ASSISTAI</h2>
                    </div>

                    <div className='web-info'>
                        <p>OpenAI presented AssistAI with a range of challenging tasks, featuring tight latency requirements, substantial ambiguity, and instances of incorrect answers. In turn, AssistAI collaborated closely to tailor their QA systems to our specific requirements.</p>
                    </div>

                    <h5 className='client-info'>John Lawson <br /> <small>Member of Technical Staff</small> </h5>

                    <div className='border-line' />

                    <div className='teams-info'>

                        <h6>Trusted by the world‘s most ambitious teams</h6>

                        <div className='teams-info-images'>
                            <img src={team1} alt="Team 1" />
                            <img src={team2} alt="team 2" />
                            <img src={team3} alt="Team 3" />
                            <img src={team4} alt="Team 4" />
                            <img src={team5} alt="Team 5" />
                            <img src={team6} alt="Team 6" />
                        </div>

                    </div>

                </div>

                <div className='contact-info'>

                    <div className='web-info'>
                        <h2>Quick Responses Await!</h2>
                        <p>Connect with us! Feel free to ask any questions or share your thoughts. We‘ll respond promptly.</p>
                    </div>

                    <form className='contact-form'>

                        <div className='contact-form-input-group'>

                            <input type="text" placeholder='First Name*' />

                            <input type="text" placeholder='Last Name*' />

                            <input type="text" placeholder='Company Name*' />

                            <input type="text" placeholder='Job Title*' />

                            <input type="text" placeholder='Email Address*' />

                            <input type="text" placeholder='Phone Number*' />

                            <input type="text" placeholder='How can we help?' />

                        </div>

                        <div className='terms-conditions'>
                            <input type="checkbox" />
                            <p>I read and accept terms and conditions, privacy policy.</p>
                        </div>

                        <button type='submit'>Submit</button>

                    </form>

                </div>

            </div>

        </section>

    )

}

export default Contact;