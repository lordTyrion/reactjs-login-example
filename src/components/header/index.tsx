import { Logo } from "./logo";
import { Nav } from "./nav";
import { Account } from "./account";
import styled from "@emotion/styled";

const StyledHeader = styled.div`
  width: 100%;
  height: 52px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  li {
    color: white;
  }
`;

export const Header = () => (
  <StyledHeader>
    <Logo />
    <Nav />
    <Account />
  </StyledHeader>
);
