import React from 'react';

//Images
import img1 from '../../assets/productivityimg1.svg';
import img2 from '../../assets/productivityimg2.svg';
import img3 from '../../assets/productivityimg3.svg';

//CSS File
import './productivity.css';

const Productivity = () => {

    return (

        <section className='productivity'>

            <h1>Elevate Your Productivity <span>to New Heights</span> </h1>

            <div className='productivity-cards'>

                <div className='productivity-card'>
                    <img src={img1} alt="Productivity 1" />
                    <h2>Skilled Companion</h2>
                    <p>Save time with automated information retrieval, eliminating the need for manual searches or team inquiries.</p>
                </div>

                <div className='productivity-card'>
                    <img src={img2} alt="Productivity 2" />
                    <h2>Service Bot</h2>
                    <p>Link integrations, sync spreadsheets, or upload documents to instantly engage with the chatbot.</p>
                </div>

                <div className='productivity-card'>
                    <img src={img3} alt="Productivity 3" />
                    <h2>Smart Helper</h2>
                    <p>Your assistant learns from your responses and grows more intelligent, evolving into your ultimate know-it-all helper.</p>
                </div>

            </div>

        </section>

    )

}

export default Productivity;