import * as React from "react";

import { Link } from "react-router-dom";

import { toggleLogin } from "../../utils/toggleLogin";

import { LoginContext } from "../../context/loginContext";

import { login } from "../../utils/login";

import { Button } from "@chakra-ui/react";

import styled from "@emotion/styled";
import { css } from "@emotion/css";

const StyledAccount = styled.div``;

export const Account = () => {
  const { isLoggedIn, loading, setLoading, setIsLoggedIn } = React.useContext(
    LoginContext
  );

  const onLogout = async () => {
    if (setLoading) setLoading(true);
    try {
      await toggleLogin();
      if (setIsLoggedIn) setIsLoggedIn(false);
    } catch (err) {
      if (setLoading) setLoading(false);
    }
    if (setLoading) setLoading(false);
  };

  return (
    <StyledAccount>
      {!isLoggedIn ? (
        <Link to="/login">
          <Button
            variant="link"
            size="sm"
            className={css`
              color: white;
              width: 75px !important;
            `}
          >
            Login
          </Button>
        </Link>
      ) : (
        <Button
          isLoading={loading}
          onClick={() => onLogout()}
          size="sm"
          isDisabled={loading}
          className={css`
            width: 75px !important;
          `}
        >
          Logout
        </Button>
      )}
    </StyledAccount>
  );
};
