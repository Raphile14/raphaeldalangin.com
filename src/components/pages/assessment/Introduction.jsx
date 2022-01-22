import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Assessment.css';
import CustomNavbar from './CustomNavbar';
import { title } from './Terms';

export default function Introduction() {
    const referencesLink = "/assessment/references/";
    document.title = "Introduction";

    return (
        <>
            <div className="intro__wrapper introduction">
                <CustomNavbar />
                <div className='intro__header'>
                    <h2> {title} </h2>
                    <hr />
                    <h2 className='header__title'> Introduction </h2>
                    <hr className='mb-5' />
                    <img className='intro__image mb-5' src="/images/assessment/sherman-antitrust-act.jpeg" alt="antitrust" />
                    <p className='intro__description'>
                        "<i>Antitrust</i>" correspond to laws designed by governments to protect consumers from
                        businesses that perform predatory practices while highlighting fair competition.
                        The laws apply to an extensive list of questionable activities performed by businesses
                        such activities include market allocation, bid-rigging, price-fixing, and monopolies <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#1`}>(Chen, 2021)</Link>.
                    </p>

                    <p className='intro__description'>
                        The Antitrust laws were also formulated to encourage competition in any market.
                        They do this by reducing the capabilities of certain businesses that have become monopolies through
                        multiple methods such as mergers and acquisitions. The Antitrust law is capable of dividing businesses that have
                        become monopolies <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#2`}>(Twin, 2021)</Link>.
                    </p>

                    <p className='intro__description'>
                        The term "trusts" in the context of the law pertains to individuals, organizations, and/or businesses that
                        have gathered a huge concentration of wealth. Such events may have negative effects on the economy and marketplace.
                        Prices of goods, products, and services may become unpredictable, undesirable, and uncontrollable <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#3`}>(NC State University, n.d)</Link>.
                    </p>

                    <p className='intro__description'>
                        This case study focuses on and analyzes individuals, organizations, and businesses that have been charged with Antitrust charges
                        in the field of information technology. The study also aims to achieve the following:
                    </p>

                    <ol className='intro__description'>
                        <li> To recognize an ethical issue based on an actual situation </li>
                        <li> To understand how ethics philosophers and writers have considered your chosen issue </li>
                        <li> To critically analyze a case, acknowledging ambiguities </li>
                    </ol>

                    <p className='intro__description'>
                        Solutions were formulated by the researcher to suggest courses of action
                        to assist those affected. The study also answers questions based on the <i>Ethics Worksheet</i> for case studies
                        created by Thomas H. Bivins from the University of Oregon,
                        <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#4`}>(Bivins, 1993)</Link>.
                    </p>
                    <Container className='mt-5'>
                        <Row>
                            <Col xs={6}> <Link className='nav__buttons' to="/assessment/question"> Back to Question </Link> </Col>
                            <Col xs={6}> <Link className='nav__buttons' to="/assessment/background"> Next to Background </Link> </Col>
                        </Row>                                                
                    </Container>
                </div>
            </div>
        </>
    );
}
