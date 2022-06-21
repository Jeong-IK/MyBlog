import React from "react";
import { MenuList } from "./Menu/MenuList";
import { Logo, HeaderMenu } from "./Header_style";

export const Header = () => {
  return (
    <HeaderMenu>
      <Logo>logo</Logo>
      <MenuList />
    </HeaderMenu>
  );
};
