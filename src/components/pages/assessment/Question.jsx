import React from 'react';
import { Link } from 'react-router-dom';
import './Assessment.css';
import Typewriter from 'typewriter-effect';

export default function Introduction() {
    document.title = "Question";
    return (
        <>
            <div className="question__wrapper ethics__whole__page question">
                {/* Question: 1 */}
                <div className='question__vertical question__header'>
                    <Typewriter
                        options={{
                            strings: [
                                'Why are big technological companies scrutinized and investigated with "Antitrust" charges by regulators and government officials worldwide?',
                                // 'an answer to the question: What is the ethical issue/problem in one sentence? State this in the form of an ethical question an IT practitioner would need to consider.',
                                'A Case Study'
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 5,
                            delay: 50,
                            pauseFor: 5000
                        }}
                    />
                    <div className='mt-5'>
                        <Link className='nav__buttons' to="/assessment/introduction"> Next to Introduction </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
