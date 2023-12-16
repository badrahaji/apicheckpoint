//importing librarys we need to use 
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState,useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {useParams,Link} from "react-router-dom"
function UserDetails() {
  const [data,setData]=useState([])
    let {id}=useParams()
    // making a request from the server to get the user data by id
    useEffect(() => {
      const Data = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
              setData(response.data);
              // data setter being filled with the serveur response 
          };
      Data();
  },);
   return (
    // using a bootstap card 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title> name : {data.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
    <ListGroup.Item>phone number : {data.phone}</ListGroup.Item>
    <ListGroup.Item>website : {data.website} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* using link to back to home page  */}
        <Card.Link href="#"><Link to="/"> Back to Home Page </Link></Card.Link>
      </Card.Body>
    </Card>
  );
}

export default UserDetails;