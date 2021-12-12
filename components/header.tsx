import React from "react";
import {
  Container,
  Stack,
  HStack,
  Button,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Container
      as={Stack}
      d={{ base: "none", md: "flex" }}
      maxW="6xl"
      py={4}
      spacing={4}
    >
      <HStack>
        <NextLink href={"/CS35345-final-site/"} passHref>
          <Button as="a" variant="ghost">
            {"Home"}
          </Button>
        </NextLink>
        <NextLink href={"/CS35345-final-site/docs"} passHref>
          <Button as="a" variant="ghost">
            {"Docs"}
          </Button>
        </NextLink>
        <NextLink href={"/CS35345-final-site/downloads"} passHref>
          <Button as="a" variant="ghost">
            {"Downloads"}
          </Button>
        </NextLink>

        <Spacer />
      </HStack>
      <Divider />
    </Container>
  );
};

export default Header;
