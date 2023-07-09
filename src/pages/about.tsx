import * as React from "react";

import { Heading, Text } from "@chakra-ui/react";

import { LoginContext } from "../context/loginContext";

export default function About() {
  const { isLoggedIn } = React.useContext(LoginContext);

  return (
    <>
      <Heading as="h2" size="lg" m={"30px 20px 15px 20px"}>
        About
      </Heading>
      <Text px={"20px"} pb={"10px"}>
        Currently you are on the <strong>About</strong> page,{" "}
        <Text as="mark">{!isLoggedIn && "not"} being logged in</Text>.
      </Text>
      <Text px={"20px"}>
        It does not matter though, since this page is accessible for everybody,
        being logged in or not.
      </Text>
    </>
  );
}
