import React, { Component } from "react";
import { Container, Card } from "./style";

export default class Body extends Component {
  state = {
    data: [],
  };
  getData() {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=9b02e22de941a3d770c1fede57e99110&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data,
        });
      })
      .catch((error) => console.error(error));
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        {
          data?.results?.map(({poster_path, id, title, original_name, vote_average, release_date}) => (
            <Card key={id}>
              <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/" + poster_path} alt="movie img" />
              <h3>{title? title : original_name}</h3>
              <p>Average: {Math.floor(vote_average * 10)}%</p>
              <p>Release date: {release_date}</p>
            </Card>
          ))
        }
      </Container>
    );
  }
}
