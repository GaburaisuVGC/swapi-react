import React from "react";
import axios from "axios";
import "../App.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class SearchStarships extends React.Component {
  state = {
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
    hyperdrive_rating: "",
    MGLT: "",
    starship_class: "",
    posts: [],
    search: "",
    url: ""
  };

  componentDidMount = () => {
    this.getStarships();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  getStarships = () => {
    axios
      .get("http://localhost:8080/api/starships")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
      })
      .catch(() => {
        alert("error");
      });
  };

  displayStarships = (posts) => {
    const dataSearch = this.state.search.toLowerCase();
    if (!posts.length) return null;

    return posts
      .filter((postTag) => postTag.name.toLowerCase().includes(dataSearch))
      .map((post, index) => (
        <div key={index}>
          <div>
            <Card style={{ width: "24rem", left: "33%", margin: "2%" }}>
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Model : {post.model}</ListGroupItem>
                <ListGroupItem>Manufacturer : {post.manufacturer}</ListGroupItem>
                <ListGroupItem>Cost in credits : {post.cost_in_credits}</ListGroupItem>
                <ListGroupItem>Length (m) : {post.length}</ListGroupItem>
                <ListGroupItem>Max Atmosphering Speed : {post.max_atmosphering_speed}</ListGroupItem>
                <ListGroupItem>Crew : {post.crew}</ListGroupItem>
                <ListGroupItem>Passengers : {post.passengers}</ListGroupItem>
                <ListGroupItem>Cargo capacity: {post.cargo_capacity}</ListGroupItem>
                <ListGroupItem>Consumables : {post.consumables}</ListGroupItem>
                <ListGroupItem>Hyperdrive rating : {post.hyperdrive_rating}</ListGroupItem>
                <ListGroupItem>MGLT : {post.MGLT}</ListGroupItem>
                <ListGroupItem>Starship class : {post.starship_class}</ListGroupItem>
                <ListGroupItem>URL : {post.url}</ListGroupItem>
              </ListGroup>
            </Card>
          </div>
        </div>
      ));
  };

  render() {
    return (
      <section className="container-md">
        <h1>SWAPI Starships</h1>
        <div>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              name="search"
              placeholder="Search by name"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>{this.displayStarships(this.state.posts)}</div>
      </section>
    );
  }
}

export default SearchStarships;
