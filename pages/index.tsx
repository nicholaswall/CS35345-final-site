import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Features from "../components/features";
import Efficiency from "../components/efficiency";
import PerformanceTable from "../components/performance_table";

const Hero = () => {
  const router = useRouter();

  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            // mt={{ base: 10 }}
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              textAlign="center"
              w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
              mx="auto"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color={useColorModeValue("gray.900", "white")}
              >
                <chakra.span display={{ base: "block", xl: "inline" }}>
                  Sort your arrays{" "}
                </chakra.span>
                <chakra.span
                  display={{ base: "block", xl: "inline" }}
                  color={useColorModeValue("blue.600", "blue.400")}
                >
                  using Rust
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: "auto", lg: 0 }}
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.500"
                lineHeight="base"
              >
                SortLib is a rust crate and wasm package that allows you to sort
                your arrays fast and easily. Built using Rust, this library
                enables efficient and safe concurrency for both native runtimes
                and in the browser.
              </chakra.p>
              <Stack
                direction={{ base: "column", sm: "column", md: "row" }}
                mb={{ base: 4, md: 8 }}
                spacing={{ base: 4, md: 2 }}
                justifyContent="center"
              >
                <Box
                  rounded="full"
                  shadow="md"
                  onClick={() => {
                    router.push("/docs");
                  }}
                >
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="white"
                    bg="blue.600"
                    _hover={{ bg: "blue.700" }}
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    cursor="pointer"
                  >
                    Get started
                  </chakra.a>
                </Box>
                <Box
                  mt={[3, 0]}
                  ml={[null, 3]}
                  onClick={() => {
                    // router.push("/demo");
                    router.push("https://sorting-avfafd6e7q-uc.a.run.app/");
                  }}
                >
                  <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    border="solid 1px transparent"
                    fontSize={{ base: "md", md: "lg" }}
                    rounded="md"
                    color="blue.700"
                    bg="blue.100"
                    _hover={{ bg: "blue.200" }}
                    cursor="pointer"
                  >
                    Live demo
                  </chakra.a>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Home: NextPage = () => {
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
        <Hero />
      </Container>
      <Features />
      <PerformanceTable />
      <Efficiency />
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  return {
    props: {},
  };
};
