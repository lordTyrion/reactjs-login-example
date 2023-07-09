import * as React from "react";
import { Heading, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <>
      <Heading as="h2" size="lg" m={"30px 20px 15px 20px"}>
        Profile
      </Heading>
      <Text px={"20px"} pb={"10px"}>
        Currently you are on the <strong>Profile</strong> page,{" "}
        <Text as="mark">being logged in</Text>. Otherwise you would not be able
        to see it anyhow.
      </Text>
    </>
  );
}
