import * as React from "react";
import { Heading, Text } from "@chakra-ui/react";

import { LoginContext } from "../context/loginContext";

export default function Home() {
  const { isLoggedIn } = React.useContext(LoginContext);

  return (
    <>
      <Heading as="h2" size="lg" m={"30px 20px 15px 20px"}>
        Home
      </Heading>
      <Text px={"20px"} pb={"10px"}>
        Currently you are on the <strong>Home</strong> page,{" "}
        <Text as="mark">{!isLoggedIn && "not"} being logged in</Text>. In the
        header you see two navigation items. The <strong>About</strong> page is
        accessible for everybody. For accessing your <strong>Profile</strong>{" "}
        you need to be logged in.
      </Text>
      <Text px={"20px"}>
        If you navigate to the <strong>Profile</strong> page not being logged
        in, you are going to be redirected to the <strong>Login</strong> page.
        If you navigate to the <strong>Login</strong> page already being logged
        in, you are going to be redirected to where you came from.
      </Text>
    </>
  );
}
