import React from "react";
import axios from "axios";
import "../App.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class SearchPlanets extends React.Component {
  state = {
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
    population: "",
    posts: [],
    search: "",
    url: ""
  };

  componentDidMount = () => {
    this.getPlanets();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  getPlanets = () => {
    axios
      .get("http://localhost:8080/api/planets")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
      })
      .catch(() => {
        alert("error");
      });
  };

  displayPlanets = (posts) => {
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
                <ListGroupItem>Rotation period : {post.rotation_period}</ListGroupItem>
                <ListGroupItem>Orbital period : {post.orbital_period}</ListGroupItem>
                <ListGroupItem>Diameter : {post.diameter}</ListGroupItem>
                <ListGroupItem>Climate : {post.climate}</ListGroupItem>
                <ListGroupItem>Gravity : {post.gravity}</ListGroupItem>
                <ListGroupItem>Terrain : {post.terrain}</ListGroupItem>
                <ListGroupItem>
                  Surface water (%) : {post.surface_water}
                </ListGroupItem>
                <ListGroupItem>
                  Population : {post.population}
                </ListGroupItem>
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
        <h1>SWAPI Planets</h1>
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
        <div>{this.displayPlanets(this.state.posts)}</div>
      </section>
    );
  }
}

export default SearchPlanets;
