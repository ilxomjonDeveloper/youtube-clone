import styled from "styled-components";
import { ReactComponent as burger } from "../../assets/icons/burger.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as video } from "../../assets/icons/video.svg";
import { ReactComponent as menu } from "../../assets/icons/menu.svg";
import { ReactComponent as bell } from "../../assets/icons/bell.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  height: 60px;
  position: sticky;
  top: 0;
  background: #fff;
`

export const Category = styled.div`
  display: flex;
  align-items: center;
`

export const Icons = styled.div``

Icons.Burger = styled(burger)`
  width: 20px;
  height: 20px;
  margin-right: 30px;
  cursor: pointer;
`

Icons.Logo = styled.img`
  width: 100px;
`

export const Input = styled.input`
  height: 35px;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  width: 600px;
  font-size: 16px;
  padding: 8px 15px;
  box-sizing: border-box;
  border-radius: 18px 0px 0px 18px;
  &::placeholder{
    color: #606060;
  }
  &:focus {
    outline: none;
    border-color: #1B95ba;
  }
`

Icons.Search = styled(search)`
  width: 65px;
  height: 35px;
  padding: 6px 15px;
  border: 1px solid #ccc;
  background: #f4f4f4;
  border-radius: 0px 18px 18px 0px;
  border-left: none;
  cursor: pointer;
`

Icons.Video = styled(video)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
Icons.Menu = styled(menu)`
  width: 20px;
  height: 20px;
  margin-left: 30px;
  cursor: pointer;
`
Icons.Bell = styled(bell)`
  width: 20px;
  height: 20px;
  margin-left: 30px;
  cursor: pointer;
`

export const User = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 30px;
  cursor: pointer;
`