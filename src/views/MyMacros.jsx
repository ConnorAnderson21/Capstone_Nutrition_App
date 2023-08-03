import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useUser } from "reactfire";

import Table from 'react-bootstrap/Table';





function MyMacros({ calculatedBMR, activityFactor, bmr }) {

  const formData = {
    
    carbohydrate: (parseFloat(activityFactor) * bmr) * 0.5,
    fat: (parseFloat(activityFactor) * bmr) * 0.25,
    protein: (parseFloat(activityFactor) * bmr) * 0.25,
  };
  return (
     <div id="MacroTable">
    <Table id="table">
      <thead>
        <tr>
          <th>My Macros</th>
          <th>Target Intake</th>
          <th>Today's Intake</th>
          <th>Daily Average</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>Calories</td>
              <td>{bmr * activityFactor}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Carbohydrate</td>
              <td>{formData.carbohydrate}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{formData.protein}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{formData.fat}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
}

export default MyMacros;








// function MyMacros() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Header>My Macros</Card.Header>
//       <ListGroup variant="flush">
//         <ListGroup.Item>Calories</ListGroup.Item>
//         <ListGroup.Item>Carbohydrates</ListGroup.Item>
//         <ListGroup.Item>Protein</ListGroup.Item>
//         <ListGroup.Item>Fat</ListGroup.Item>
//       </ListGroup>
//     </Card>
//   );
// }

// export default MyMacros;