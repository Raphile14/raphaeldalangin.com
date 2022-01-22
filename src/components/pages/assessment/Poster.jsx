import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import { title } from './Terms';
import './Assessment.css';

export default function Poster() {
    document.title = "Poster";
    return (
        <>
            <div className='intro__wrapper introduction'>
                <CustomNavbar />
                <div className='intro__header'>
                    <h2> {title} </h2>
                    <hr />
                    <h2 className='header__title'> Poster </h2>
                    <hr className='mb-5' />
                    <Container className='mt-5'>
                        <Row>
                            <Col xs={6}> <Link className='nav__buttons' to="/assessment/ethics-worksheet"> Back to Worksheet </Link> </Col>
                            <Col xs={6}> <Link className='nav__buttons' to="/assessment/references"> Next to References </Link> </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
