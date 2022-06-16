import { Menu, List } from "./MenuList_style";
import { Link } from "react-router-dom";
export const MenuList = () => {
  return (
    <List>
      <Link to="/">자기소개</Link>
      <Link to="/Project">프로젝트</Link>
      <Link to="/Sns">SNS</Link>
    </List>
  );
};
