import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import { Container, Wrapper } from "./style";
import Navbar from "./Navbar";

export default class YouTube extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Wrapper>
          <Sidebar />
          <Body />
        </Wrapper>
      </Container>
    );
  }
}
