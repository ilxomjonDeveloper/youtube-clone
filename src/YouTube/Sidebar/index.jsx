import React, { Component } from "react";
import { sidebar, UserAvatar } from "../../utils/sidebar";
import { Container, ItemWrapper, Title, Wrapper } from "./style";

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        {sidebar.map(({ id, title, data }) => (
          <Wrapper key={id}>
            {title === true && <Title title>{title}</Title>}
            {data.map(({id, title: subTitle, icon: Icon, src}) => (
              <ItemWrapper key={id}>
                {Icon ? <Icon /> : <UserAvatar src={src}></UserAvatar>}
                <Title>{subTitle}</Title>
              </ItemWrapper>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
