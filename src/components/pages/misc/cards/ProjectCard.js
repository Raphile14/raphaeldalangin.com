import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

export default function ProjectCard(card) {
    let info = card.card;
    return (
        <>
            <Container className='posts text-justify'>
                <Row className='justify-content-center text-justify'>
                    <Col xs={12}> <h2 className='text-center mt-5 mb-3 card__title'>{info.name}</h2> </Col>
                    <CardGroup className='card__group'>
                        {info.data.map((val, key) => {
                            return (
                                <Col className='card-col' key={key} xs={12} md={6}>
                                    <Card key={key}>
                                        <div className='text-center pt-5'>
                                            <Card.Img variant="top" src={val.image} style={{ width: "85%" }} />
                                        </div>
                                        <Card.Body>
                                            <div className="text-center mt-3">
                                                <Card.Title className='card__name card__link' style={{ fontSize: "25px" }}> {val.name} </Card.Title>
                                                <Card.Subtitle as={"p"} className="text-muted card__subtitle"> {val.role} </Card.Subtitle>
                                                <Card.Subtitle as={"p"} className="mb-2 text-muted card__subtitle"> {val.date} </Card.Subtitle>
                                            </div>
                                            <div className='mt-5 card__description card__description'>
                                                <Card.Text> {val.description} </Card.Text>
                                            </div>
                                            <div className='text-center mt-5 mb-5'>
                                                <Card.Link target="_blank" href={val.actionLink}> <button className='action__button'> {val.action} </button> </Card.Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </CardGroup>
                </Row>
            </Container>
        </>
    );
}
