import React, { useState } from 'react';

//Images
import check from '../../assets/check.svg';

//CSS File
import './pricing.css';

const Pricing = () => {

    const [selectedPeriod, setSelectedPeriod] = useState('monthly');

    const handleSubscriptionPeriod = (period) => setSelectedPeriod(period);

    return (

        <section className='pricing'>

            <h1>Select a <span>Pricing Plan</span> </h1>

            <div className='time-duration'>

                <button
                    className={selectedPeriod === 'monthly' ? 'clicked' : ''}
                    type='button'
                    onClick={() => handleSubscriptionPeriod('monthly')}>
                    Monthly
                </button>

                <button
                    className={selectedPeriod === 'yearly' ? 'clicked' : ''}
                    type='button'
                    onClick={() => handleSubscriptionPeriod('yearly')}>
                    Yearly
                </button>

            </div>

            <div className='pricing-cards'>

                <div className='pricing-card'>

                    <h1>Starter</h1>
                    <p>Perfect for individuals.</p>

                    <h1 className='dollar'>
                        {selectedPeriod === 'yearly' ? <>$99<small>/y</small></> : <>$9<small>/m</small></>}
                    </h1>
                    <p>Pause or cancel anytime</p>

                    <button className='pricing-card-btn-1' type='button'>Start Trial</button>

                    <button className='pricing-card-btn-2' type='button'>Subscribe</button>

                    <div className='pricing-card-properties'>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Team members: 1</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Users: Unlimited</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Integrations: Unlimited</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Total message: 150</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Assistants: 2</h6>
                        </li>

                    </div>

                </div>

                <div className='pricing-card'>

                    <h1>Starter</h1>
                    <p>Perfect for small businesses.</p>

                    <h1 className='dollar'>
                        {selectedPeriod === 'yearly' ? <>$269<small>/y</small></> : <>$29<small>/m</small></>}
                    </h1>
                    <p>Pause or cancel anytime</p>

                    <button className='pricing-card-btn-1' type='button'>Start Trial</button>

                    <button className='pricing-card-btn-2' type='button'>Subscribe</button>

                    <div className='pricing-card-properties'>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Team members: 3</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Users: Unlimited</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Integrations: Unlimited</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Total message: 650</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Assistants: 5</h6>
                        </li>

                    </div>

                </div>

                <div className='pricing-card'>

                    <h1>Starter</h1>
                    <p>Perfect for large businesses.</p>

                    <h1 className='dollar'>
                        {selectedPeriod === 'yearly' ? <>$699<small>/y</small></> : <>$59<small>/m</small></>}
                    </h1>
                    <p>Pause or cancel anytime</p>

                    <button className='pricing-card-btn-1' type='button'>Start Trial</button>

                    <button className='pricing-card-btn-2' type='button'>Subscribe</button>

                    <div className='pricing-card-properties'>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Team members: 1</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Users: Unlimited</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Integrations: Unlimited</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Total message: 1650</h6>
                        </li>

                        <li>
                            <img src={check} alt="Check" />
                            <h6>Assistants: 12</h6>
                        </li>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Pricing;