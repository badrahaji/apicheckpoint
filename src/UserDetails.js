import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useParams,Link} from "react-router-dom"
function UserDetails(data) {
    let {id}=useParams()
    const user = data.find(user => user.id === parseInt(id));
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
    <ListGroup.Item>phone number : {user.phone}</ListGroup.Item>
    <ListGroup.Item>adresse : {user.adresse.street} {user.adresse.city} {user.adresse.zipcode}</ListGroup.Item>
    <ListGroup.Item>website : {user.website} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"><Link to="/"> Back to Home Page </Link></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserDetails;