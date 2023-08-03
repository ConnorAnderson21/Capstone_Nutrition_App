
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useUser } from 'reactfire';


function calculateBMR(userData) {
  const { heightInches, age, weightPounds, gender } = userData;

  let bmr;
  if (gender === 'Male') {
    // Adult male: 66 + (6.3 x body weight in lbs.) + (12.9 x height in inches) - (6.8 x age in years) = BMR
    bmr = 66 + 6.3 * weightPounds + 12.9 * heightInches - 6.8 * age;
  } else if (gender === 'Female') {
    // Adult female: 655 + (4.3 x weight in lbs.) + (4.7 x height in inches) - (4.7 x age in years) = BMR
    bmr = 655 + 4.3 * weightPounds + 4.7 * heightInches - 4.7 * age;
  } else {
    
    bmr = 0;
  }

  return bmr;
}

function MacroCalc() {
  const [userData, setUserData] = useState({
    heightInches: 70,
    age: 30,
    weightPounds: 160,
    gender: ''
  });

  const [bmr, setBMR] = useState(0);
  const [activityFactor, setActivityFactor] = useState(1);
  const [showTotalCalories, setShowTotalCalories] = useState(false);
  const { data:user } = useUser();
  const [CFP, setCFP] = useState({carbohydrate: 0, protein: 0, fat: 0})


  // carbohydrate: (setActivityFactor(parseFloat(value)) * bmr) * .5,
  // fat: (setActivityFactor(parseFloat(value)) * bmr) * .25,
  // protein: (setActivityFactor(parseFloat(value)) * bmr) * .25



  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const calculatedBMR = calculateBMR(userData);
    setBMR(calculatedBMR);
    console.log('BMR:', bmr);


    let copyCFP = {
      carbohydrate: parseInt(((calculatedBMR * activityFactor) * .5) / 4), 
      protein: parseInt(((calculatedBMR * activityFactor) * .25) / 4), 
      fat: parseInt(((calculatedBMR * activityFactor) * .25) / 9)
    };

    setCFP(copyCFP);

  

    const formData = {
      ...userData,
      bmr: calculatedBMR,
      activityFactor: parseFloat(activityFactor),
      username: user.displayName,
      email: user.email,
      carbohydrate: CFP.carbohydrate,
      fat: CFP.fat,
      protein: CFP.protein

    };
    console.log(formData)
    
      fetch(`http://127.0.0.1:5000/api/submit_form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      .then((res) => res.json())
      .then((data) => console.log(data));
    

    setShowTotalCalories(true);
  };

const handleActivityFactorChange = (event) => {
    const { value } = event.target;
    setActivityFactor(parseFloat(value));
    };
  
  
  return (
    <div id="MacroCalc">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Height in Inches:</Form.Label>
              <Form.Control
                name="heightInches"
                className="textBubble"
                type="number"
                placeholder="Enter height in inches"
                value={userData.heightInches}
                onChange={handleInputChange}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Age:</Form.Label>
              <Form.Control
                name="age"
                className="textBubble"
                type="number"
                placeholder="Enter age"
                value={userData.age}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Weight in Pounds:</Form.Label>
              <Form.Control
                name="weightPounds"
                className="textBubble"
                type="number"
                placeholder="Enter weight in pounds"
                value={userData.weightPounds}
                onChange={handleInputChange}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Select Gender:</Form.Label>
              <Form.Select
                name="gender"
                className="textBubble"
                aria-label="Select gender"
                value={userData.gender}
                onChange={handleInputChange}
              >
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <br />
        <Button type="submit">Calculate BMR</Button>
      </Form>
      {showTotalCalories && (
        <div>
          <h3>BMR: {parseInt(bmr)}</h3>
          <Form.Group>
            <Form.Label>Activity Factor:</Form.Label>
            <Form.Select
              name="activityFactor"
              value={activityFactor}
              onChange={handleActivityFactorChange}
            >
              <option>Select Activity Level</option>
              <option value={1.2}>Sedentary (Little to no exercise)</option>
              <option value={1.375}>Light Activity (Light exercise/sports 1-3 days/week)</option>
              <option value={1.55}>Moderate Activity (Moderate exercise/sports 3-5 days/week)</option>
              <option value={1.725}>Very Active (Hard exercise/sports 6-7 days/week)</option>
            </Form.Select>
          </Form.Group>
          <h4>Total Daily Calorie Needs: {parseInt(bmr * activityFactor)}</h4>
        </div>
      )}

    </div>
  );
}

export default MacroCalc;









