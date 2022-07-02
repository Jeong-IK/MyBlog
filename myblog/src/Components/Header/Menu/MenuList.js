import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, List, Menues } from './MenuList_style';

export const MenuList = () => (
    <List>
      <Menues>
        <Menu>
          <Link to="/">자기소개</Link>
        </Menu>
        <Menu>
          <Link to="/Project">프로젝트</Link>
        </Menu>
        <Menu>
          <Link to="/Sns">SNS</Link>
        </Menu>
      </Menues>
    </List>
);
