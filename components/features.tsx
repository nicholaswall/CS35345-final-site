import React from "react";

import {
  chakra,
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Button,
  VStack,
  useColorModeValue,
  Container,
  Stack,
} from "@chakra-ui/react";

const Feature = (props: any) => {
  return (
    <Flex>
      <Icon
        boxSize={5}
        mt={1}
        mr={2}
        color={useColorModeValue("blue.500", "blue.300")}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      <chakra.p
        fontSize="lg"
        color={useColorModeValue("gray.700", "gray.400")}
        {...props}
      />
    </Flex>
  );
};

const Features = (props: any) => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Container
        as={Stack}
        d={{ base: "none", md: "flex" }}
        maxW="6xl"
        py={4}
        spacing={4}
      >
        <Box
          shadow="xl"
          bg={useColorModeValue("white", "gray.800")}
          px={8}
          py={20}
          mx="auto"
        >
          <SimpleGrid
            alignItems="center"
            columns={{ base: 1, lg: 2 }}
            spacingY={{ base: 10, lg: 32 }}
            spacingX={{ base: 10, lg: 24 }}
          >
            <Box>
              <chakra.h2
                mb={3}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("black", "black")}
                lineHeight="shorter"
                letterSpacing="tight"
              >
                Tons of sorting algorithms
              </chakra.h2>
              <chakra.p
                mb={6}
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.500")}
              >
                Sort your data in any algorithm you choose. Sorts come in tons
                of variations and even paralleized implementations of several
                sorts.
              </chakra.p>
              <Button
                as="a"
                variant="solid"
                w={{ base: "full", sm: "auto" }}
                colorScheme="blue"
                size="lg"
              >
                Become a Partner
              </Button>
            </Box>
            <VStack
              direction="column"
              flexGrow={1}
              spacing={5}
              alignItems="start"
            >
              <Feature>Quicksort</Feature>
              <Feature>Merge Sort</Feature>
              <Feature>Selection Sort</Feature>
              <Feature>Insertion Sort</Feature>
              <Feature>Bubble Sort</Feature>
              <Feature>Parallel Quicksort</Feature>
              <Feature>Parallel Mergesort</Feature>
              <Feature>
                Automatic threadpooling and concurrency management
              </Feature>
              <Feature>WebWorker support</Feature>
              <Feature>Automatic memory handling for WASM</Feature>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Flex>
  );
};

export default Features;
