import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

 
export default function SpeciesPage() {
 const [form, setForm] = useState({
   name: "",
   classification: "",
   designation: "",
   average_height: "",
   skin_colors: "",
   hair_colors: "",
   eye_colors: "",
   average_lifespan: "",
   language: "",
   url: ""
 });
 const params = useParams();
 const navigate = useNavigate();

 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:8080/api/species/${params.id.toString()}`);
 
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
      <Card style={{ width: "24rem", left: "33%", margin: "2%" }}>
              <Card.Body>
                <Card.Title>{form.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Classification : {form.classification}</ListGroupItem>
                <ListGroupItem>Designation : {form.designation}</ListGroupItem>
                <ListGroupItem>Average height : {form.average_height}</ListGroupItem>
                <ListGroupItem>Skin colors : {form.skin_colors}</ListGroupItem>
                <ListGroupItem>Hair colors : {form.hair_colors}</ListGroupItem>
                <ListGroupItem>Eye colors : {form.eye_colors}</ListGroupItem>
                <ListGroupItem>Average lifespan : {form.average_lifespan}</ListGroupItem>
                <ListGroupItem>Language : {form.language}</ListGroupItem>
                <ListGroupItem>URL : {form.url}</ListGroupItem>
              </ListGroup>
            </Card>
      </div>
      <div>
      <Button variant="primary" href="/species">Back to the search list</Button>
      </div>
    </section>
 );
}