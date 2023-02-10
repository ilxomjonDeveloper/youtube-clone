import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 8px;
  height: 490px;
  width: 280px;
  img {
    border-radius: 12px;
  }
  h3 {
    font-weight: 500;
    margin: 10px 0;
    margin-bottom: 5px;
  }
  p {
    width: 80%;
    margin: 1px 0;
    font-size: 14px;
    color: #606060;
  }
`;
