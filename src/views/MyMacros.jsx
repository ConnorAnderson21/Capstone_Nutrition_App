import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useUser } from "reactfire";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';



function MyMacros(props) {
  // const { data:user } = useUser();

  // const getMyMacros = async () => {
  //   console.log(user)
  //       let response = await axios.post(`http://127.0.0.1:5000/api/get_macros`, JSON.stringify(user), {
  //         headers: { "Content-Type": "application/json" }
  //     });
        
  //       return response.status === 200 ? response.data : null

  //   }
  //   const loadMyMacros = async () => {
  //       let data = await getMyMacros();

  //       setMyMacros(data.get_macros);
  //   }


  //   const [get_macros, setMyMacros] = useState(() => loadMyMacros());
  
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
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Carbohydrate</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Protein</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Fat</td>
              <td></td>
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