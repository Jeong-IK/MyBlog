import react from "react";
import { Menu, List } from "./MenuList_style";

export const MenuList = () => {
  return (
    <List>
      <Menu>자기소개</Menu>
      <Menu>프로젝트</Menu>
      <Menu>SNS</Menu>
    </List>
  );
};
