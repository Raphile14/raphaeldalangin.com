import React from 'react';
import ProjectCard from './cards/ProjectCard';
import { academic, web, game, music } from './../../../classes/data/Projects';
import SocMedCard from './cards/SocMedCard';

export default function landing() {
    document.title = "Raphael Dalangin's Portfolio";
    return (
        // < !--Wrapper -- >
        <div id='wrapper' className='fade-in'>
            {/* <!-- Main --> */}
            <div id='main'>
                {/* Main Description, Image, and Social Media */}
                <div className='main__header justify-content-center'>
                    <img
                        className='main__img'
                        src='images/Raphael Dalangin.jpg'
                        alt='me'
                    />
                    <br />
                    <p className='main__center'>
                        Hi, I am{' '}
                        <i>
                            <b>Raphael Dalangin</b>
                        </i>
                        , an aspiring Software, Game, and Web Developer from the
                        Philippines. A Bachelor of Science in Computer Science
                        graduate from Mapua Malayan Colleges Mindanao. I love
                        playing video games, playing the guitar, and composing
                        music! Contact me <a href='#contacts'> here </a>
                    </p>
                    <br />

                    <SocMedCard />
                </div>
            </div>

            {/* <!-- Posts --> */}
            <div className='posts__header'>
                <ProjectCard card={web} />
                <ProjectCard card={academic} />
                <ProjectCard card={game} />
                <ProjectCard card={music} />
            </div>

            {/* <!-- Contacts --> */}
            <div id='contacts' className='text-center mt-5'>
                <h2 className='mb-4 card__title'> Contact Details </h2>
                <h5>
                    <a
                        className='contacts__link'
                        href='mailto: rl.dalangin@works-telemondo.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        email: rl.dalangin@works-telemondo.com
                    </a>
                </h5>
                {/* <h5>
                    <a className='contacts__link' href="/assets/files/v2 Raphael Dalangin - Resume.pdf" target="_blank" rel="noreferrer"> file: resume </a>
                </h5> */}

                <SocMedCard />
                <br />
                <br />
            </div>
        </div>
    );
}
