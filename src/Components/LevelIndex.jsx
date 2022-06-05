import { Container, Card, CardProps, CardGroup,CarouselItem, Col, Row } from 'react-bootstrap';

export default function LevelIndex({ questionNumber, ...props }) {
    return (
        <Container>
        <div className=" mx-1 p-0 mt-0 my-2 w-auto">
            <Card>
                    <Card.Body>
                        <h6 className=" mx-1 my-0" value={questionNumber}>
                        
                        </h6>
                    </Card.Body>
                </Card>
        </div>
      

        
    </Container>
    
    
    );


}