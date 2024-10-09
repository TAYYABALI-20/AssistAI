import React from 'react';

//Images
import user from '../../assets/user.svg';
import bot from '../../assets/logo.png';
import submit from '../../assets/submit.svg';

import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.png';
import team4 from '../../assets/team4.png';
import team5 from '../../assets/team5.png';
import team6 from '../../assets/team6.png';

//CSS File
import './hero.css';

export const Article = () => {

    return (

        <article>
            <h5>Preferred by Teams at</h5>
            <div className='teams'>
                <img src={team1} alt="Team 1" />
                <img src={team2} alt="team 2" />
                <img src={team3} alt="Team 3" />
                <img src={team4} alt="Team 4" />
                <img src={team5} alt="Team 5" />
                <img src={team6} alt="Team 6" />
            </div>
        </article>

    )

}

const Hero = () => {

    return (

        <section className='hero'>

            <div className='hero-content'>

                <h1>Craft an AI Model
                    <br />
                    <span>in Minutes!</span>
                </h1>

                <p>Rapidly Develop a Tailored AI Assistant with OpenAI GPT-3.5: Seamlessly Connect to Resources
                    and Upload Files for Comprehensive Assistance.</p>

                <div className='hero-btns'>
                    <button>
                        Get Started
                    </button>

                    <button>
                        View Pricing
                    </button>
                </div>

            </div>

            <div className='my-chatbot'>

                <div className='user'>
                    <img src={user} alt="User" />
                    <div className='user-info'>
                        <h4>You <small>12:36 PM</small> </h4>
                        <p>What was the revenue generated during the Black Friday Sale 2022 campaign?</p>
                    </div>
                </div>

                <div className='bot'>
                    <img src={bot} alt="Bot" />
                    <div className='bot-info'>
                        <h4>AssistAI <small>12:36 PM</small> </h4>
                        <p>The revenue generated during the Black Friday Sale 2022 campaign was $20,000.</p>
                    </div>
                </div>

                <div className='user'>
                    <img src={user} alt="User" />
                    <div className='user-info'>
                        <h4>You <small>12:36 PM</small> </h4>
                        <p>What was the revenue generated during the Black Friday Sale 2022 campaign?</p>
                    </div>
                </div>

                <div className='bot'>
                    <img src={bot} alt="Bot" />
                    <div className='bot-info'>
                        <h4>AssistAI <small>12:36 PM</small> </h4>
                        <p>The revenue generated during the Black Friday Sale 2022 campaign was $20,000.</p>
                    </div>
                </div>

                <div className='user'>
                    <img src={user} alt="User" />
                    <div className='user-info'>
                        <h4>You <small>12:36 PM</small> </h4>
                        <p>What was the revenue generated during the Black Friday Sale 2022 campaign?</p>
                    </div>
                </div>

                <div className='bot'>
                    <img src={bot} alt="Bot" />
                    <div className='bot-info'>
                        <h4>AssistAI <small>12:36 PM</small> </h4>
                        <p>The revenue generated during the Black Friday Sale 2022 campaign was $20,000.</p>
                    </div>
                </div>

                <div className='message-input'>
                    <input type="text" placeholder='Type your message' />
                    <div className='submit-image'>
                        <img src={submit} alt="Submit" />
                    </div>
                </div>

            </div>

            <Article />

        </section>

    )

}

export default Hero;