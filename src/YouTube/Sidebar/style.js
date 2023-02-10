import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 30px;
`;

export const Title = styled.div`
  text-transform: ${({title}) => title && "uppercase"};
  font-weight: ${({title}) => (title ? "500" : "400")};;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${({title}) => (title ? "#606060" : "#030303")};
`;

export const ItemWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`
