import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Assessment.css';

export default function CustomNavbar() {
    return (
        <Navbar>
            <Container className='justify-content-center'>
                <Row>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/assessment/question">Question</Nav.Link>
                        <Nav.Link as={Link} to="/assessment/introduction">Introduction</Nav.Link>
                        <Nav.Link as={Link} to="/assessment/background">Background</Nav.Link>
                        <Nav.Link as={Link} to="/assessment/methodology">Methodology</Nav.Link>
                        <Nav.Link as={Link} to="/assessment/summary">Summary</Nav.Link>
                        <Nav.Link as={Link} to="/assessment/ethics-worksheet">Worksheet</Nav.Link>
                        <Nav.Link as={Link} to="/assessment/poster">Poster</Nav.Link>
                        <Nav.Link as={Link} to="/assessment/references">References</Nav.Link>
                    </Nav>
                </Row>
            </Container>
        </Navbar>
    );
}
