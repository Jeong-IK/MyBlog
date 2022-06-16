import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header/Header";
import { MainBody } from "./Body/MainBody";
import { Background_Img } from "./BgIMG_style";

function App() {
  return (
    <Background_Img>
      <BrowserRouter>
        <Header />
        <MainBody />
      </BrowserRouter>
    </Background_Img>
  );
}

export default App;
