import React from "react";
import axios from "axios";
import "../App.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class SearchFilms extends React.Component {
  state = {
    title: "",
    episode_id: "",
    opening_crawl: "",
    director: "",
    producer: "",
    release_date: "",
    posts: [],
    search: "",
    url: ""
  };

  componentDidMount = () => {
    this.getFilms();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  getFilms = () => {
    axios
      .get("http://localhost:8080/api/films")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
      })
      .catch(() => {
        alert("error");
      });
  };

  displayFilms = (posts) => {
    const dataSearch = this.state.search.toLowerCase();
    if (!posts.length) return null;

    return posts
      .filter((postTag) => postTag.title.toLowerCase().includes(dataSearch))
      .map((post, index) => (
        <div key={index}>
          <div>
            <Card style={{ width: "24rem", left: "33%", margin: "2%" }}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.opening_crawl}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Episode : {post.episode_id}</ListGroupItem>
                <ListGroupItem>Director : {post.director}</ListGroupItem>
                <ListGroupItem>Producer : {post.producer}</ListGroupItem>
                <ListGroupItem>
                  Release Date : {post.release_date}
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
        <h1>SWAPI Films</h1>
        <div>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              name="search"
              placeholder="Search by title"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div>{this.displayFilms(this.state.posts)}</div>
      </section>
    );
  }
}

export default SearchFilms;
