import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

function FoodFinder(props) {
  const [foodInput, setFoodInput] = useState('');
  const [nutritionData, setNutritionData] = useState(null);

  const handleFoodSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=4ce8395f&app_key=50ba68fb629700b9d063ed7d7713bc0d&ingr=${foodInput}&nutrition-type=logging`
      );
      const data = response.status === 200 ? response.data : null;
      setNutritionData(data?.hints[0]?.food ?? null);
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
      setNutritionData(null);
    }
  };

  return (
    <div className="food-finder-container">
      <div className="food-finder-content">
        <div className="food-finder-form">
          <Form onSubmit={handleFoodSearch}>
            <Form.Group className="mb-3" controlId="input">
              <Form.Label>Food Finder</Form.Label>
              <Form.Control type="text" placeholder="Enter Food Here" value={foodInput} onChange={(e) => setFoodInput(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </div>

        <div className="nutrition-card">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              {nutritionData ? (
                <>
                  <Card.Title>{nutritionData.label}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Nutrition Facts</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Calories: {Math.floor(nutritionData.nutrients.ENERC_KCAL / 10)}</ListGroup.Item>
                    <ListGroup.Item>Carbohydrate: {Math.floor(nutritionData.nutrients.CHOCDF / 10)} g</ListGroup.Item>
                    <ListGroup.Item>Fat: {Math.floor(nutritionData.nutrients.FAT / 10)} g</ListGroup.Item>
                    <ListGroup.Item>Protein: {Math.floor(nutritionData.nutrients.PROCNT / 10)} g</ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary">Add to Belly</Button>
                </>
              ) : (
                <>
                  <Card.Title>Food Name</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Nutrition Facts</Card.Subtitle>
                  <ListGroup>
                    <ListGroup.Item>Calories:</ListGroup.Item>
                    <ListGroup.Item>Carbohydrate:</ListGroup.Item>
                    <ListGroup.Item>Fat:</ListGroup.Item>
                    <ListGroup.Item>Protein:</ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary">Add to Belly</Button>
                </>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FoodFinder;
