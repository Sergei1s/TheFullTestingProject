import { Container, Card, CardProps, CardGroup,CarouselItem, Col, Row } from 'react-bootstrap';
import LevelIndex from './LevelIndex';

export default function ProgressShower() {
    return (

        <Container >
        <div class="d-block w-75 mx-auto mt-4">
            <Card >
                    <Card.Body class="mx-auto" >
                        <div class=" my-4 pb-4 ">
                            <h3 class=" mb-3 text-center ">Вопросы</h3>
                                <Row xs="0" md="auto" className="g-0">
                                {Array.from({ length: 14 }).map((_, idx) => (
                                    <Col> 
                                        <LevelIndex/>
                                    </Col>
                                ))}
                                </Row>
                                <Row xs="0" md="auto" className="g-0">
                                {Array.from({ length: 14 }).map((_, idx) => (
                                    <Col> 
                                        <LevelIndex/>
                                    </Col>
                                ))}
                                </Row>

                        </div>

                    </Card.Body>
                </Card>
        </div>
      
        
    </Container>


    );


}