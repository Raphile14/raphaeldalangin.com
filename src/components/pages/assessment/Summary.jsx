import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import { title } from './Terms';

export default function Evaluation() {
    const referencesLink = "/assessment/references/";
    document.title = "Summary";

    return (
        <div className='intro__wrapper introduction'>
            <CustomNavbar />
            <div className='intro__header'>
                <h2> {title} </h2>
                <hr />
                <h2 className='header__title'> Summary </h2>
                <hr className='mb-5' />
                <img className='intro__image mb-5' src="/images/assessment/summary.jpg" alt="1998 case" />
                <h2 className='header__title'> Microsoft </h2>
                <p className='intro__description'>
                    Microsoft Corporation was charged with Antitrust back in 1998. The company was sued by the US Department of Justice.
                    The company was accused of attempting to become a monopoly by setting its browser software's (Internet Explorer) price to
                    free which led to the collapse of its rival company Netscape. Even Microsoft's decision to add more programs into its
                    operating system (Windows) was considered a monopolistic act. Because of how the company made their products more accessible
                    and the method on how they built their operating system, the government accused them of making the process of installing competing
                    software hard <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#6`}>(Beattie, 2022)</Link>.
                </p>
                <p className='intro__description'>
                    The case that the Department of Justice made was problematic. Many questioned whether or not they should have
                    conducted the case in the first place. Microsoft even stated that their competitors were just jealous of the heights they reached.
                    Multiple products competed against Microsoft's but numerous consumers preferred the company's product more.
                </p>
                <p className='intro__description'>
                    Initially, the ruling of the judge in charge of the case ruled that Microsoft was indeed guilty of the charges. They were instructed
                    to separate into two business entities. The company was separated with the first group containing the operating systems team and the other
                    one containing the software development teams. However, Microsoft was not happy with the judge's decision and attempted to appeal
                    the decision. A settlement was decided between the two parties. Microsoft was no longer required to separate into two different
                    entities and, in return, Microsoft shared the advancements they had with their computing interfaces with competitors.
                    <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#7`}> United States v. Microsoft Corp., 253 F.3d 34 (D.C. Cir. 2001)</Link>
                </p>
                <Container className='mt-5'>
                    <Row>
                        <Col xs={6}> <Link className='nav__buttons' to="/assessment/methodology"> Back to Methodology </Link> </Col>
                        <Col xs={6}> <Link className='nav__buttons' to="/assessment/ethics-worksheet"> Next to Worksheet </Link> </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
