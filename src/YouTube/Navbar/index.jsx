import React, { Component } from "react";
import { Category, Container, Icons, Input, User } from "./style";
import logo from "../../assets/imgs/Logo.png";
import logoUser from "../../assets/imgs/LogoUser.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Category>
          <Icons.Burger />
          <Icons.Logo src={logo} alt="Logo Img" />
        </Category>
        <Category>
          <Input placeholder="Search"></Input>
          <Icons.Search />
        </Category>
        <Category>
          <Icons.Video />
          <Icons.Menu />
          <Icons.Bell />
          <User src={logoUser} alt="user logo"></User>
        </Category>
      </Container>
    );
  }
}
