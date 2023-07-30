import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


import Table from 'react-bootstrap/Table';

function MyMacros() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Target Intake</th>
          <th>Today's Intake</th>
          <th>Daily Average</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          {Array.from({ length: 3 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>Carbohydrate</td>
          {Array.from({ length: 3 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>Protein</td>
          {Array.from({ length: 3 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>Fat</td>
          {Array.from({ length: 3 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>

      </tbody>
    </Table>
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