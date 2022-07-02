import React from 'react';
import { MenuList } from './Menu/MenuList';
import { Logo, HeaderMenu } from './header_style';

export const Header = () => (
    <HeaderMenu>
      <Logo>logo</Logo>
      <MenuList />
    </HeaderMenu>
);
