import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import { title } from './Terms';
import './Assessment.css';

export default function Methodology() {
    const referencesLink = "/assessment/references/";
    document.title = "Methodology";

    return (
        <>
            <div className='intro__wrapper introduction'>
                <CustomNavbar />
                <div className='intro__header'>
                    <h2> {title} </h2>
                    <hr />
                    <h2 className='header__title'> Methodology </h2>
                    <hr className='mb-5' />
                    <p className='intro__description'>
                        This case study uses the <b> Qualitative Explanatory Case Study</b> research design. 
                        This research design aims to find and explain details and data that would be used to gain deeper knowledge
                        and understanding. According to the "Quality Case Study Guidelines" written by 
                        <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#5`}> Saša Baškarada (2013)</Link>
                        , explanatory case studies are usually conducted to investigate relationships. 
                        This is primarily used to build theories and spark interest in theory testing.
                    </p>

                    <p className='intro__description'>
                        The author of this case study aims to provide details and analysis regarding the Antitrust charge in 1998 
                        pointed at Microsoft Corporation.
                    </p>
                    
                    <Container className='mt-5'>
                        <Row>
                            <Col xs={6}> <Link className='nav__buttons' to="/assessment/background"> Back to Background </Link> </Col>
                            <Col xs={6}> <Link className='nav__buttons' to="/assessment/summary"> Next to Summary </Link> </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
