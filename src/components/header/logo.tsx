import styled from "@emotion/styled";
import { ReactComponent as LogoSvg } from "./logo.svg";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  margin-left: 10px;
`;

export const Logo = () => (
  <StyledLogo>
    <Link to="/">
      <LogoSvg />
    </Link>
  </StyledLogo>
);
