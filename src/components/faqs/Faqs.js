import React, { useState } from 'react';

//CSS File
import './faqs.css';

const Faqs = () => {

    const faqItems = [

        {
            question: 'What is the limit on creating assistants?',
            answer: 'Create as many assistants as you need! Enjoy unlimited flexibility by connecting each assistant to unique integrations and data sources. This allows them to cater to various teams, employees, or specific use cases seamlessly, with no restrictions.',
        },

        {
            question: 'Is it possible to control the data accessible to an assistant?',
            answer: 'Create as many assistants as you need! Enjoy unlimited flexibility by connecting each assistant to unique integrations and data sources. This allows them to cater to various teams, employees, or specific use cases seamlessly, with no restrictions.',
        },

        {
            question: 'Is it possible to personalize my assistant chat page?',
            answer: 'Create as many assistants as you need! Enjoy unlimited flexibility by connecting each assistant to unique integrations and data sources. This allows them to cater to various teams, employees, or specific use cases seamlessly, with no restrictions.',
        },

        {
            question: 'What the time frame for setting up and launching the assistant?',
            answer: 'Create as many assistants as you need! Enjoy unlimited flexibility by connecting each assistant to unique integrations and data sources. This allows them to cater to various teams, employees, or specific use cases seamlessly, with no restrictions.',
        },

        {
            question: 'How customizable is the AI assistant interface and functionality?',
            answer: 'Create as many assistants as you need! Enjoy unlimited flexibility by connecting each assistant to unique integrations and data sources. This allows them to cater to various teams, employees, or specific use cases seamlessly, with no restrictions.',
        },

    ];

    const [isDropDownOpen, setIsDropDownOpen] = useState(Array(faqItems.length).fill(false));

    const handleDropDown = (index) => {

        setIsDropDownOpen((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });

    };

    return (

        <section className='faqs'>

            <h1>Frequently Asked <span>Questions</span> </h1>

            <div className='questions'>

                {faqItems.map((item, index) => (

                    <div

                        key={index}
                        className={isDropDownOpen[index] ? 'question expand' : 'question collapse'}
                        onClick={() => handleDropDown(index)}

                    >

                        <p>{item.question}</p>

                        <div className={isDropDownOpen[index] ? 'answer show' : 'answer hidden'}>
                            <p>{item.answer}</p>
                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}

export default Faqs;