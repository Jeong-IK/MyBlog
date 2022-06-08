import React from "react";
import { Header } from "./Header/Header";
import { MainBody } from "./Body/MainBody";
import { Background_Img } from "./BgIMG_style";

function App() {
  return (
    <Background_Img>
      <Header />
      <MainBody />
    </Background_Img>
  );
}

export default App;
