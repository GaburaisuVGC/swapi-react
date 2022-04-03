import React from "react";
import axios from "axios";
import "../App.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";


class SearchPeople extends React.Component {
  state = {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    url: "",
    posts: [],
    search: "",
  };

  componentDidMount = () => {
    this.getPeople();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  getPeople = () => {
    axios
      .get("http://localhost:8080/api/people")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
      })
      .catch(() => {
        alert("error");
      });
  };

  displayPeople = (posts) => {
    const dataSearch = this.state.search.toLowerCase();
    if (!posts.length) return null;
    
    return posts
      .filter((postTag) => postTag.name.toLowerCase().includes(dataSearch))
      .map((post, index) => (
        
        <div key={index}>
          <div
          >

            <Card style={{ width: '24rem', left: "33%", margin: "2%" }} className>
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Height : {post.height}</ListGroupItem>
                <ListGroupItem>Mass : {post.mass}</ListGroupItem>
                <ListGroupItem>Hair color : {post.hair_color}</ListGroupItem>
                <ListGroupItem>Skin color : {post.skin_color}</ListGroupItem>
                <ListGroupItem>Eye color : {post.eye_color}</ListGroupItem>
                <ListGroupItem>Birth year : {post.birth_year}</ListGroupItem>
                <ListGroupItem>Gender : {post.gender}</ListGroupItem>
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
        <h1>SWAPI People</h1>
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
        <div>
          {this.displayPeople(this.state.posts)}
        </div>
      </section>
    );
  }
}

export default SearchPeople;
