import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';



function MacroCalc() {
    return (


<div id="MacroCalc">
        <Form>
      <Row>
        <Col>
          <Form.Control class="textBubble" placeholder="Height in Inches" />
          <br />
          <Form.Control class="textBubble" placeholder="Age" />
        </Col>
        <Col>
          <Form.Control class="textBubble" placeholder="Weight in Pounds" />
          <br />
          <Form.Select class="textBubble" aria-label="Default select example">
        <option>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      
      </Form.Select>
        </Col>
      </Row>
    
    
      </Form>
      </div>
    );
  }
  
  export default MacroCalc;