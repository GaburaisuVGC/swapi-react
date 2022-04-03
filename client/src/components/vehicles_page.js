import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

 
export default function VehiclesPage() {
 const [form, setForm] = useState({
   name: "",
   model: "",
   manufacturer: "",
   cost_in_credits: "",
   length: "",
   max_atmosphering_speed: "",
   crew: "",
   passengers: "",
   cargo_capacity: "",
   consumables: "",
   vehicle_class: "",
   url: ""
 });
 const params = useParams();
 const navigate = useNavigate();

 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:8080/api/vehicles/${params.id.toString()}`);
 
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
                <ListGroupItem>Model : {form.model}</ListGroupItem>
                <ListGroupItem>Manufacturer : {form.manufacturer}</ListGroupItem>
                <ListGroupItem>Cost in credits : {form.cost_in_credits}</ListGroupItem>
                <ListGroupItem>Length (m) : {form.length}</ListGroupItem>
                <ListGroupItem>Max Atmosphering Speed : {form.max_atmosphering_speed}</ListGroupItem>
                <ListGroupItem>Crew : {form.crew}</ListGroupItem>
                <ListGroupItem>Passengers : {form.passengers}</ListGroupItem>
                <ListGroupItem>Cargo capacity: {form.cargo_capacity}</ListGroupItem>
                <ListGroupItem>Consumables : {form.consumables}</ListGroupItem>
                <ListGroupItem>Starship class : {form.vehicle_class}</ListGroupItem>
                <ListGroupItem>URL : {form.url}</ListGroupItem>
              </ListGroup>
            </Card>
      </div>
      <div>
      <Button variant="primary" href="/vehicles">Back to the search list</Button>
      </div>
    </section>
 );
}