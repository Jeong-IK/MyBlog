import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
body{
  margin:0px;
}`;

export const Background_Img = styled.div`
  position: absolute;
  background-color: pink;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;
