import { Container, Card, CardImg, CardProps, CardGroup,CarouselItem, Col, Row, FormGroup } from 'react-bootstrap';
import Answer from './Answer';

const TestingCard = ({question, ...props}) => {
    return (
    <Container >
        <div class="d-block w-75 mx-auto mt-4">
            <Card >
                    <Card.Body >
                        <div  class="mx-3 pt-3 mb-4">
                            <div class="px-4 pt-1">
                                <Card.Title>
                                    <div class="form-group">
                                      <label for="exampleInputQueNamel1"> Введите текст вопроса</label>
                                      <input type="Name" 
                                      className="form-control"
                                      id="exampleInputQueNamel1" 
                                      aria-describedby="QueHelp" 
                                      placeholder="Текст вопроса"
                                      onChange={e => question.questionName = e.target.value}/>
                                    </div> 
                                </Card.Title>
                            </div>
                           
                             <div class="pt-4 mx-4">
                                {
                                    question.answers.map(ans => <Answer answer={ans}/>)
                                }
                            </div> 
                        </div>
                    </Card.Body>
                </Card>
        </div>
      
        
    </Container>
   
    );
    }
    
export default TestingCard;






