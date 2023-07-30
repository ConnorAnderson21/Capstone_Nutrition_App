import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FoodFinder() {
  return (
    <div id="FoodFinder" >
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Food Here" />
       
      </Form.Group>

      
   
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form></div>
  );
}

export default FoodFinder;