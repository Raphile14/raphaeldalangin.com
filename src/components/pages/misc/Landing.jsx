import React from 'react';
import ProjectCard from './cards/ProjectCard';
import { academic, web, game } from './../../../classes/data/Projects';
import SocMedCard from './cards/SocMedCard';

export default function landing() {
    return (
        // < !--Wrapper -- >
        <div id="wrapper" className="fade-in">
            {/* <!-- Main --> */}
            <div id="main">

                {/* Main Description, Image, and Social Media */}
                <div className='main__header justify-content-center'>
                    <img className='main__img' src="images/Raphael Dalangin.jpg" alt="me" />
                    <br />
                    <p className='main__center'>
                        Hi, I am <i><b>Raphael Dalangin</b></i>, an aspiring Software, Game, and Web
                        Developer from the Philippines. Currently a 4th Year College Student at Malayan Colleges
                        Mindanao. Taking up Bachelor of Science in Computer Science. I love playing video games,
                        playing the guitar, and writing and composing music!
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
            </div>

            {/* <!-- Contacts --> */}
            <div id="contacts" className='text-center mt-5'>
                <h2 className='mb-4 card__title'> Contact Details </h2>
                <h5>
                    <a className='contacts__link' href="mailto: raphaeldalangin@codingcatharsis.com" target="_blank" rel="noreferrer">raphaeldalangin@codingcatharsis.com</a>
                </h5>
                <h5>
                    <a className='contacts__link' href="/assets/files/v2 Raphael Dalangin - Resume.pdf" target="_blank" rel="noreferrer"> resume </a>
                </h5>

                <SocMedCard />
                <br />
                <br />
            </div>
        </div>
    );
}
