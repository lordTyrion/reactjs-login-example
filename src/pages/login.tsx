import * as React from "react";

import { Redirect } from "react-router";

import { toggleLogin } from "../utils/toggleLogin";

import { LoginContext } from "../context/loginContext";

import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  Input,
  Button
} from "@chakra-ui/react";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export default function Login({ location }: any) {
  const { from } = location.state || { from: { pathname: "/" } };

  const { loading, setLoading, isLoggedIn, setIsLoggedIn } = React.useContext(
    LoginContext
  );

  const onLogin = async () => {
    if (setLoading) setLoading(true);
    try {
      await toggleLogin();
      if (setIsLoggedIn) setIsLoggedIn(true);
    } catch (err) {
      if (setLoading) setLoading(false);
    }
    if (setLoading) setLoading(false);
  };

  if (isLoggedIn) {
    return <Redirect to={from} />;
  } else {
    return (
      <Flex
        height="calc(100vh - 52px)"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          p={[6, 8]}
          bg="white"
          borderRadius="lg"
          boxShadow="1px 1px 5px #E2E8F0"
          maxW="sm"
          w="90%"
          borderWidth="1px"
          css={css`
            opacity: 0;
            animation: ${fadeIn} 0.4s ease-in-out forwards;
            animation-delay: 0.1s;
          `}
        >
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={8}>
              Login
            </Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form autoComplete="off">
              <FormControl>
                <Input
                  autoComplete="off"
                  type="email"
                  placeholder="john.doe@mail.com"
                  value="john.doe@mail.com"
                  readOnly
                  focusBorderColor="gray.600"
                />
              </FormControl>
              <FormControl mt={4}>
                <Input
                  autoComplete="off"
                  type="password"
                  placeholder="secret"
                  value="secret"
                  readOnly
                  focusBorderColor="gray.600"
                />
              </FormControl>
              <Button
                width="full"
                mt={6}
                fontWeight={500}
                onClick={() => onLogin()}
                isLoading={loading}
              >
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    );
  }
}
