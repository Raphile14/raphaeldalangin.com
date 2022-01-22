import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Assessment.css';
import CustomNavbar from './CustomNavbar';
import { title } from './Terms';

export default function EthicsWorksheet() {
    const referencesLink = "/assessment/references/";
    document.title = "Ethics Worksheet";

    return (
        <div className="intro__wrapper introduction">
            <CustomNavbar />
            <div className='intro__header'>
                <h2>{title}</h2>
                <hr />
                <h2 className='header__title'> Ethics Worksheet </h2>
                <hr />
                <p className='ethics__font text-center pt-5 pb-5'>
                    This section will answer questions from the ethics worksheet created by <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#4`}>Thomas H. Bivins</Link> from the University of Oregon.
                    <br /> <i>NOTE: To view the answers, click the Accordion (or dropdown buttons) to view answers corresponding to the number.</i>
                </p>

                {/* Answers */}
                <Accordion className='ethics__font'>
                    {/* 1 */}
                    <Accordion.Item eventKey='0' >
                        <Accordion.Header> <h3> #1 What is the ethical issue/problem in one sentence? State this in the form of an ethical question an IT practitioner would need to consider.</h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                Why are big technological companies scrutinized and investigated with "Antitrust" charges by regulators and government officials worldwide?
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 2 */}
                    <Accordion.Item eventKey='1' >
                        <Accordion.Header> <h3> #2 What facts have the most bearing on the ethical decision you must render in this case? Note: facts do not include ethical judgments at this point. </h3> </Accordion.Header>
                        <Accordion.Body>
                            <div className='ethics__description'>
                                <p>
                                    Numerous facts regarding Microsoft will have the most bearing with the ethical decision I am rendering in this case.
                                    Details include the following:
                                </p>
                                <ol>
                                    <li> company's net worth back in 1998 which was $14.48 billion </li>
                                    <li> activities or actions executed by the company that were considered against the Antitrust law </li>
                                    <li> the status of Microsoft's competitors directly affected with Microsoft's monopolistic actions </li>
                                </ol>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 3 */}
                    <Accordion.Item eventKey='2' >
                        <Accordion.Header> <h3> #3 Are there any other external or internal factors to be considered? (Economic, political, etc.) </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                Yes, there are numerous external and internal factors to be considered. The most important of which is the economic side.
                                The result of the case directly affects the economic balance between technological companies in the United States. Having
                                Microsoft dominates the scene will most likely result in monopoly and the reduction of both rate of innovation and market competition.
                            </p>

                            <p className='ethics__description'>
                                The stability and security of the jobs of everyone affected were also factors to be considered. The probability
                                of people losing jobs is high if the case was not handled properly.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 4 */}
                    <Accordion.Item eventKey='3' >
                        <Accordion.Header> <h3> #4 Who are the claimants, and in what way are you obligated to each of them? (List all affected by your decision.) </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                In this particular case, the primary claimants are the people under the United States Department of Justice while also
                                including the people that they represent that were affected by Microsoft's actions. My decision will directly affect the status
                                of Microsoft and its competitors. The effects may both be positive and/or negative.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 5 */}
                    <Accordion.Item eventKey='4' >
                        <Accordion.Header> <h3> #5 What are the operant ideals? Note: ideals are values and behaviors based on them. </h3> </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <ul>
                                    <li>
                                        <p className='ethics__description'> <b>For you.</b> </p>
                                        <p className='ethics__description'>
                                            The way I understand the situation of the case, I see two operant ideals.
                                            One operant ideal comes from Microsoft, and the other comes from the Department of Justice.
                                            In Microsoft's case, I can see that they are trying their best to provide the best service. They are
                                            clearly aiming to provide quality service for their customers. The numerous customer's preference of their
                                            products over other brands support this statement. Meanwhile, the Department of Justice's ideals describes
                                            the need to provide a fair field with the intention of creating an environment that would positively bring results
                                            to the entire society in the long term. This is because, with the Antitrust law in mind, monopoly has a high chance
                                            of stagnating the rate of development and innovation which would result in negative repercussions in the future.
                                        </p>
                                    </li>
                                    <li>
                                        <p className='ethics__description'> <b>For the client/organization/profession.</b> </p>
                                        <p className='ethics__description'>
                                            For the client, pointing to the consumers availing the services of any company, they will always avail the best service they can
                                            to spend the least amount of money while maximizing the potential peak efficiency  and effectivity.
                                        </p>
                                        <p className='ethics__description'>
                                            In terms of the organization, certainly, the idea is to develop a system or method that would bring the best result always.
                                            A monopolistic method may be preferred here to achieve and reach the best rate and income possible. Primarily leaning on the economic side.
                                        </p>
                                        <p className='ethics__description'>
                                            For the IT profession, the ideal is that development, research, discovery, and innovation should not be stopped and
                                            hindered in any way. Promoting and encouraging competition certainly allows the competitors to develop top-notch products
                                            all the time.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 6 */}
                    <Accordion.Item eventKey='5' >
                        <Accordion.Header> <h3> #6 Do any of these ideas conflict? In what order would you honor them? </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                answer 6
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 7 */}
                    <Accordion.Item eventKey='6' >
                        <Accordion.Header> <h3> #7 What are your options, and which would be favored by each affected party? (List at least three.) </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                answer 7
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 8 */}
                    <Accordion.Item eventKey='7' >
                        <Accordion.Header> <h3> #8 Which options could cause harm to any claimant? </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                answer 8
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 9 */}
                    <Accordion.Item eventKey='8' >
                        <Accordion.Header> <h3> #9 Would honoring any of the ideals listed above invalidate any of your options? </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                answer 9
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 10 */}
                    <Accordion.Item eventKey='9' >
                        <Accordion.Header> <h3> #10 Are there any rules, principles, or codes (legal, professional, organizational, or other) that automatically invalidate any of your options? </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                answer 10
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 11 */}
                    <Accordion.Item eventKey='10' >
                        <Accordion.Header> <h3> #11 Which ethical theories support or reject which options? Explain. </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                answer 11
                            </p>
                            <ul>
                                Consequential:
                                <li>
                                    Mill's "Harm Principle."
                                    <p className='ethics__answer'> </p>
                                </li>
                                <li>
                                    Ethical egoism.
                                    <p className='ethics__answer'> </p>
                                </li>
                                <li>
                                    Utilitarianism or risk-benefit analysis.
                                    <p className='ethics__answer'> </p>
                                </li>
                            </ul>
                            <ul>
                                Nonconsequential:
                                <li>
                                    Ross's duties.
                                    <p className='ethics__answer'> </p>
                                </li>
                                <li>
                                    Kant's "Categorical Imperative."
                                </li>
                            </ul>
                            <ul>
                                Other duties (religious, etc.).
                                <p className='ethics__answer'> </p>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 12 */}
                    <Accordion.Item eventKey='11' >
                        <Accordion.Header> <h3> #12 Determine a course of action based on your analysis. </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                answer 12
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 13 */}
                    <Accordion.Item eventKey='12' >
                        <Accordion.Header> <h3> #13 Defend your decision in writing to your most adamant detractor. </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                answer 13
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Container className='mt-5'>
                    <Row>
                        <Col xs={6}> <Link className='nav__buttons' to="/assessment/summary"> Back to Summary </Link> </Col>
                        <Col xs={6}> <Link className='nav__buttons' to="/assessment/poster"> Next to Poster </Link> </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
