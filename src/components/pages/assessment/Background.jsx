import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import { title } from './Terms';
import './Assessment.css';

export default function Background() {
    const referencesLink = "/assessment/references/";
    document.title = "Background";
    return (
        <>
            <div className='intro__wrapper introduction'>
                <CustomNavbar />
                <div className='intro__header'>
                    <h2> {title} </h2>
                    <hr />
                    <h2 className='header__title'> Background </h2>
                    <hr />
                    <p className='intro__description'>
                        Through the years, humanity's technological capabilities have grown exponentially. The current state of
                        technology is immensely superior to what was before allowing our species to be more effective and efficient
                        and capable of performing feats that were not even possible decades ago. Concerning this, the needs and
                        wants of every individual have also changed.
                    </p>

                    <p className='intro__description'>
                        Certain businesses and organizations that focused on serving technological products to the public have gotten very wealthy.
                        A business or organization is considered <b> big</b> if its net worth has reached millions or billions or even trillions.
                    </p>

                    <p className='intro__description'>
                        Because of this, regulators and governments have proposed laws that would control the growth of these businesses to
                        make sure that they would not negatively affect the economy and become monopolies. Fair and healthy market competition 
                        is highly encouraged to prevent stagnation and promote faster development and innovation.
                    </p>

                    <p className='intro__description'>
                        Businesses that face or are being considered to be charged with Antitrust charges include 
                        <i> Amazon.com, Inc.</i>, <i> Apple Inc.</i>, <i>Meta Platforms, Inc.</i> (previously known as Facebook), and <i> Microsoft Corporation</i> 
                        <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#8`}> (Panettieri, 2020)</Link>. 
                        However, this case study primarily focuses on the Antitrust case charged to Microsoft Corporation back in 1998.                        
                    </p>                    

                    <Container className='mt-5'>
                        <Row>
                            <Col xs={6}> <Link className='nav__buttons' to="/assessment/introduction"> Back to Introduction </Link> </Col>
                            <Col xs={6}> <Link className='nav__buttons' to="/assessment/methodology"> Next to Methodology </Link> </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
