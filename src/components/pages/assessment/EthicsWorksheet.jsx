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
                                The ideas between Microsoft and the Department of Justice conflict. Microsoft's technological advancement goals paired
                                with exponential growth is againsts the Department of Justice's goal in maintaining fair market competition within
                                the society's economic space.
                            </p>

                            <p className='ethics__description'>
                                As a student inline with the information technology field, I honor Microsoft's goal first. Anyone should be given the right to
                                develop and innovate. The Department of Justice's ideas come next. However, the department's understanding and vision in terms
                                of economics far supersedes my knowledge. Their judgement is key in maintaining balance within our civilization while also
                                making sure that others could contribute to development and innovation, not just one company. Microsoft's  reach encompases
                                numerous countries and not just the United States.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 7 */}
                    <Accordion.Item eventKey='6' >
                        <Accordion.Header> <h3> #7 What are your options, and which would be favored by each affected party? (List at least three.) </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                Based on my understanding of the case, the first option would be allowing Microsoft to continue doing what they were doing.
                                This is heavily in favor of the company's party. However, this action would lead to Microsoft becoming a monopoly.
                            </p>
                            <p className='ethics__description'>
                                The second option is to continue the ruling of dividing the company into two. The first company contains the operating systems
                                development team, and the second contains the software development team. However, this action will prevent Microsoft from
                                becoming a monopoly for the time being. This action is in favor of the Department of Justice and Microsoft's competitors.
                            </p>
                            <p className='ethics__description'>
                                The third option is to make Microsoft share its advancements with its competitors. This action would allow other companies to
                                catch up with Microsoft's progress. However, this action will completely change Microsoft's impact and capabilities in the technological
                                community.
                            </p>
                            <p className='ethics__description'>
                                Regardless of any options presented above, the advancements Microsoft would be contributing to the world would be entirely different
                                from the technology we have right now in the year 2022.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 8 */}
                    <Accordion.Item eventKey='7' >
                        <Accordion.Header> <h3> #8 Which options could cause harm to any claimant? </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                Option 1, the option of allowing Microsoft to continue its path would cause harm to the claimant. The claimant's goal
                                as a government organization in the context of this case is to oversee and make sure that companies do not become monopolies.
                                Failing to do so would prevent them from performing their tasks and risk the status of the technological economy.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 9 */}
                    <Accordion.Item eventKey='8' >
                        <Accordion.Header> <h3> #9 Would honoring any of the ideals listed above invalidate any of your options? </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                Honoring the ideals of Microsoft would invalidate options 2 and 3 since these are aimed to control the progress of Microsoft.
                                Honoring the ideals of the Department of Justice would invalidate option 1 since this option's goal is to allow Microsoft
                                to continue doing what they were doing.
                            </p>
                            <p className='ethics__description'>
                                Honoring the ideals of Microsoft is against the purpose and goals of the Antitrust law.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 10 */}
                    <Accordion.Item eventKey='9' >
                        <Accordion.Header> <h3> #10 Are there any rules, principles, or codes (legal, professional, organizational, or other) that automatically invalidate any of your options? </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                Option 1 would automatically be invalidated due to the characteristics and definition of the Antitrust law given that Microsoft
                                does perform monopolistic actions.
                            </p>
                            <p className='ethics__description'>
                                Option 2 would technically not automatically be invalidated. However, the integrity and security of the jobs of the people involved
                                will be affected positively and negatively.
                            </p>
                            <p className='ethics__description'>
                                Option 3 would not be automatically invalidated. However, copyright laws might be triggered if the companies receiving Microsoft's
                                technological advancements breach laws involving intellectual properties and rights.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 11 */}
                    <Accordion.Item eventKey='10' >
                        <Accordion.Header> <h3> #11 Which ethical theories support or reject which options? Explain. </h3> </Accordion.Header>
                        <Accordion.Body>
                            <div className='ethics__description'>
                                <ul>
                                    <p className='ethics__description text-center'> <b>Consequential</b> </p>
                                    <li>
                                        Mill's "Harm Principle."
                                        <p className='ethics__description'>
                                            In an article published by <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#9`}>Richey (2016)</Link>,
                                            the principle states that anyone is free to do whatever they wish as long as they do not bring harm to others.
                                            In the context of economies and the status of companies, this ethical theory supports options 2 and 3, and against option 1.
                                            The monopolistic actions of Microsoft if left unchecked would have harmed the status and economy of competitors.
                                        </p>
                                    </li>
                                    <li>
                                        Ethical egoism.
                                        <p className='ethics__description'>
                                            In an article published by <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#10`}>Shaver (2019)</Link>,
                                            ethical egoism describes the act of a moral agent (or individual) performing actions if and only if, and because, that action
                                            satisfies their self-interest. In the context of this case, this ethical theory supports option 1 and opposes options 2 and 3.
                                            This is because option 1 advocates Microsoft to continue what they were doing. This ethical theory supports the notion that they
                                            are only satisfying their self-interest.
                                        </p>
                                    </li>
                                    <li>
                                        Utilitarianism or risk-benefit analysis.
                                        <p className='ethics__description'>
                                            In an article published by <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#11`}>Duignan and West (2021)</Link>,
                                            utilitarianism describes actions as correct if it brings happiness and wrong if it leads to unhappiness or pain. In addition, a risk-benefit
                                            analysis pertains to the analysis of actions to determine and compare which of the following are worth taking or if the risks are too high.
                                        </p>
                                        <p className='ethics__description'>
                                            From the point of view of Microsoft, option 1 heavily supports utilitarianism and opposes options 2 and 3. Meanwhile, from the point of view
                                            of the Department of Justice, options 2 and 3 are considered as positive actions while option 1 is not.
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <p className='ethics__description text-center'> <b>Nonconsequential</b> </p>
                                    <li>
                                        Ross's duties.
                                        <p className='ethics__description'>
                                            Ross's duties or the <b> Prima Facie </b> describes a list of duties that is binding or obligatory to each individual unless it
                                            conflicts with the morals of others. With this in mind, this ethical theory supports options 2 and 3 since the actions of Microsoft
                                            should also ethically consider the status of their competitors. This ethical theory opposes option 1.
                                        </p>
                                    </li>
                                    <li>
                                        Kant's "Categorical Imperative."
                                        <p className='ethics__description'>
                                            Categorical Imperative is an ethical theory that was introduced by Immanuel Kant in the 1700s. The ethical theory
                                            states that each individual must follow commands or moral laws regardless of their self-interests, desires, and circumstances.
                                            This binds everyone. In the context of this case, this theory supports options 2 and 3 and opposes option 1 with reasons similar
                                            to other ethical theories above.
                                        </p>
                                    </li>
                                </ul>
                                <ul>
                                    <p className='ethics__description text-center'> <b>Other duties (religious, etc.).</b> </p>
                                    <p className='ethics__description'>
                                        This case is not connected to other duties such as religion.
                                    </p>
                                </ul>
                            </div>

                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 12 */}
                    <Accordion.Item eventKey='11' >
                        <Accordion.Header> <h3> #12 Determine a course of action based on your analysis. </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                Based on the analysis of data gathered from the <Link className='intro__reference' target={"_blank"} to={`${referencesLink}#7`}>United States vs Microsoft</Link>, 
                                the best course of action is option 3, the act of making Microsoft share their advancements with other technical competitors
                                as long as other laws are not breached such as the Copyright Law.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                    {/* 13 */}
                    <Accordion.Item eventKey='12' >
                        <Accordion.Header> <h3> #13 Defend your decision in writing to your most adamant detractor. </h3> </Accordion.Header>
                        <Accordion.Body>
                            <p className='ethics__description'>
                                As a student in the field of information technology, option 3 is the best possible course of action to uphold the 
                                characteristics and goals of the Antitrust law. This method will prevent Microsoft from becoming a monopoly while ensuring
                                fair market competition. From the perspective of a businessman, this is the worst decision. However, as a technological 
                                enthusiast, this option will promote innovation and development that would be positive for our species long term.
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
        </div >
    );
}
