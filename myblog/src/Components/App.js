import React from "react";
import { Header } from "./Header/Header";
import { MainBody } from "./Body/MainBody";
import { BgImg } from "./BgIMG/BgIMG";
function App() {
  return (
    <div>
      <BgImg />
      <Header />
      <MainBody />
    </div>
  );
}

export default App;
