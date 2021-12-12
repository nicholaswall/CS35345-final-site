import React from "react";
import Header from "../../components/header";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Link,
  Container,
  Stack,
} from "@chakra-ui/react";

const Card = () => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Box mt={2}>
          <Link
            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            Download and install the library
          </Link>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            The library comes with the source for the native library and WASM
            builds. Also shipped is a demo application showing how to implement
            the library for the browser and in a native app. If you do not want
            the demo for web you can delete: serve.json, webpack.config.js,
            package.*.json, main.ts, and index.html. Using the WASM build is
            easy, just import mylib.ts and get started with the docs. For native
            all you need is cargo.toml, rust-toolchain, and the src directory.
            Inside the src directory, the bin directory contains the native demo
            if you no longer want it.
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
            href="/CS35345-final-site/library.zip"
          >
            Download ZIP
          </Link>

          <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
            href="https://github.com/nicholaswall/CSE5345-Labs/tree/main/Lab3/Code"
          >
            View code on github (requires access)
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

const Downloads = () => {
  return (
    <>
      <Header />
      <Container
        as={Stack}
        d={{ base: "none", md: "flex" }}
        maxW="6xl"
        py={4}
        spacing={4}
      >
        <Card />
      </Container>
    </>
  );
};

export default Downloads;

export const getStaticProps = () => {
  return {
    props: {},
  };
};
