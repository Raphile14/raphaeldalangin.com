import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import { title } from './Terms';
import './Assessment.css';

const data = [
    {
        info: "Chen, J. (2021, May 29). Understanding antitrust laws. Investopedia. Retrieved January 21, 2022, from ",
        link: "https://www.investopedia.com/ask/answers/09/antitrust-law.asp"
    },
    {
        info: "Twin, A. (2022, January 20). Antitrust laws: Keeping healthy competition in the marketplace. Investopedia. Retrieved January 21, 2022, from ",
        link: "https://www.investopedia.com/terms/a/antitrust.asp"
    },
    {
        info: "NC State University. (n.d.). Antitrust: an overview. NCSU. Retrieved January 21, 2022, from ",
        link: "https://ethics.csc.ncsu.edu/commerce/antitrust/study.php"
    },
    {
        info: "Bivins, T. H. (1993). A Worksheet for Ethics Instruction and Exercises in Reason. The Journalism Educator, 48(2), 4–16. ",
        link: "https://doi.org/10.1177/107769589304800201"
    },
    {
        info: "Baškarada, S. (2013). Qualitative Case Study Guidelines. Joint and Operations Analysis Division. from ",
        link: "https://apps.dtic.mil/sti/pdfs/ADA594462.pdf" 
    },
    {
        info: "Beattie, A. (2022, January 21). Why did microsoft face antitrust charges in 1998? Investopedia. Retrieved January 22, 2022, from ",
        link: "https://www.investopedia.com/ask/answers/08/microsoft-antitrust.asp"

    },
    {
        info: "United States v. Microsoft Corp., 253 F.3d 34 (D.C. Cir. 2001)., from ",
        link: "https://law.justia.com/cases/federal/appellate-courts/F3/253/34/576095/"
    },
    {
        info: "Panettieri, J. (2020, July 27). Big Tech antitrust investigations: Amazon, Apple, facebook and google updates. ChannelE2E. Retrieved January 22, 2022, from ",
        link: "https://www.channele2e.com/business/compliance/big-tech-antitrust-regulatory-breakup-updates/" 
    },
    {
        info: "Richey, T. (2016, October 27). Ethics explainer: The Harm Principle. THE ETHICS CENTRE. Retrieved January 22, 2022, from ",
        link: "https://ethics.org.au/ethics-explainer-the-harm-principle/"
    }, 
    {
        info: "Shaver, R. (2019, January 15). Egoism. Stanford Encyclopedia of Philosophy. Retrieved January 22, 2022, from ",
        link: "https://plato.stanford.edu/entries/egoism/"
    },
    {
        info: "Duignan, B. and West, . Henry R. (2021, March 2). utilitarianism. Encyclopedia Britannica. ",
        link: "https://www.britannica.com/topic/utilitarianism-philosophy"
    },
    {
        info: "Daze Info (2021), Microsoft Net Income by Year: FY 1990-2021, from ",
        link: "https://dazeinfo.com/2019/11/11/microsoft-net-income-by-year-graphfarm/"
    }

]

export default function References() {
    document.title = "References";
    return (
        <div className='ref__wrapper reference'>
            <CustomNavbar />
            <div className='ref__header'>
                <h2> {title} </h2>
                <hr />
                <h2 className='header__title'> References </h2>
                <hr className='mb-5' />
                <ol className='ref__items'>
                    {data.map((card, key) => {
                        return <li key={key} id={key + 1}> {card.info} <a className='ref__link' rel="noreferrer" target={"_blank"} href={card.link}> {card.link} </a> </li>
                    })}
                </ol>
                <Container className='mt-5'>
                    <Row>
                        <Col xs={12}> <Link className='nav__buttons' to="/assessment/poster"> Back to Poster </Link> </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
