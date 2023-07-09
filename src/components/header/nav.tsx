import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const StyledNav = styled.ul`
  display: flex;

  li {
    list-style: none;
    color: white;
    margin: 0 15px;
  }
`;

export const Nav = () => (
  <StyledNav>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/profile">Profile</NavLink>
    </li>
  </StyledNav>
);
