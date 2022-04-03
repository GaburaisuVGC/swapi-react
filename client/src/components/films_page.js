import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

 
export default function FilmsPage() {
 const [form, setForm] = useState({
    title: "",
    episode_id: "",
    opening_crawl: "",
    director: "",
    producer: "",
    release_date: "",
    url: "",
 });
 const params = useParams();
 const navigate = useNavigate();

 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:8080/api/films/${params.id.toString()}`);
 
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
                <Card.Title>{form.title}</Card.Title>
                <Card.Text>{form.opening_crawl}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Episode : {form.episode_id}</ListGroupItem>
                <ListGroupItem>Director : {form.director}</ListGroupItem>
                <ListGroupItem>Producer : {form.producer}</ListGroupItem>
                <ListGroupItem>
                  Release Date : {form.release_date}
                </ListGroupItem>
                <ListGroupItem>URL : {form.url}</ListGroupItem>
              </ListGroup>
            </Card>
      </div>
      <div>
      <Button variant="primary" href="/films">Back to the search list</Button>
      </div>
    </section>
 );
}