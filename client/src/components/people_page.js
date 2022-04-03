import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

 
export default function PeoplePage() {
 const [form, setForm] = useState({
   name: "",
   height: "",
   mass: "",
   hair_color: "",
   skin_color: "",
   eye_color: "",
   birth_year: "",
   gender: "",
   url: ""
 });
 const params = useParams();
 const navigate = useNavigate();

 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:8080/api/people/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       console.log(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       console.log(`Mission with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 

 
 return (
    <section className="container-md">
      <div>
      <Card style={{ width: '24rem', left: "33%", margin: "2%" }} className>
              <Card.Body>
                <Card.Title>{form.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Height : {form.height}</ListGroupItem>
                <ListGroupItem>Mass : {form.mass}</ListGroupItem>
                <ListGroupItem>Hair color : {form.hair_color}</ListGroupItem>
                <ListGroupItem>Skin color : {form.skin_color}</ListGroupItem>
                <ListGroupItem>Eye color : {form.eye_color}</ListGroupItem>
                <ListGroupItem>Birth year : {form.birth_year}</ListGroupItem>
                <ListGroupItem>Gender : {form.gender}</ListGroupItem>
                <ListGroupItem>URL : {form.url}</ListGroupItem>
              </ListGroup>
            </Card>
      </div>
      <div>
      <Button variant="primary" href="/people">Back to the search list</Button>
      </div>
    </section>
 );
}