import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header/Header';
import { MainBody } from './Body/mainBody';
import { BackgroundImg } from './BgIMG_style';

const App = () => {
  return (
    <BackgroundImg>
      <BrowserRouter>
        <Header />
        <MainBody />
      </BrowserRouter>
    </BackgroundImg>
  );
};

export default App;
