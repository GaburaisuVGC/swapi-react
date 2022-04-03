import React from "react";
import axios from "axios";
import "../App.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class SearchSpecies extends React.Component {
  state = {
    name: "",
    classification: "",
    designation: "",
    average_height: "",
    skin_colors: "",
    hair_colors: "",
    eye_colors: "",
    average_lifespan: "",
    language: "",
    posts: [],
    search: "",
    url: ""
  };

  componentDidMount = () => {
    this.getSpecies();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  getSpecies = () => {
    axios
      .get("http://localhost:8080/api/species")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
      })
      .catch(() => {
        alert("error");
      });
  };

  displaySpecies = (posts) => {
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
                <ListGroupItem>Classification : {post.classification}</ListGroupItem>
                <ListGroupItem>Designation : {post.designation}</ListGroupItem>
                <ListGroupItem>Average height : {post.average_height}</ListGroupItem>
                <ListGroupItem>Skin colors : {post.skin_colors}</ListGroupItem>
                <ListGroupItem>Hair colors : {post.hair_colors}</ListGroupItem>
                <ListGroupItem>Eye colors : {post.eye_colors}</ListGroupItem>
                <ListGroupItem>Average lifespan : {post.average_lifespan}</ListGroupItem>
                <ListGroupItem>Language : {post.language}</ListGroupItem>
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
        <h1>SWAPI Species</h1>
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
        <div>{this.displaySpecies(this.state.posts)}</div>
      </section>
    );
  }
}

export default SearchSpecies;
