import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

 
export default function PlanetsPage() {
 const [form, setForm] = useState({
   name: "",
   rotation_period: "",
   orbital_period: "",
   diameter: "",
   climate: "",
   gravity: "",
   terrain: "",
   surface_water: "",
   population: "",
   url: ""
 });
 const params = useParams();
 const navigate = useNavigate();

 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:8080/api/planets/${params.id.toString()}`);
 
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
                <ListGroupItem>Rotation period : {form.rotation_period}</ListGroupItem>
                <ListGroupItem>Orbital period : {form.orbital_period}</ListGroupItem>
                <ListGroupItem>Diameter : {form.diameter}</ListGroupItem>
                <ListGroupItem>Climate : {form.climate}</ListGroupItem>
                <ListGroupItem>Gravity : {form.gravity}</ListGroupItem>
                <ListGroupItem>Terrain : {form.terrain}</ListGroupItem>
                <ListGroupItem>
                  Surface water (%) : {form.surface_water}
                </ListGroupItem>
                <ListGroupItem>
                  Population : {form.population}
                </ListGroupItem>
                <ListGroupItem>URL : {form.url}</ListGroupItem>
              </ListGroup>
            </Card>
      </div>
      <div>
      <Button variant="primary" href="/planets">Back to the search list</Button>
      </div>
    </section>
 );
}