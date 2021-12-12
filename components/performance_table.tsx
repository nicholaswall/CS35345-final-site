import React from "react";
import {
  Flex,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  chakra,
  Stack,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

export default function PerformanceTable() {
  const header = ["Sort", "Data", "Duration"];
  const data = [
    {
      name: "Quicksort",
      data: "150k Random",
      time: "43.02 ms",
    },
    {
      name: "Parallel Quicksort",
      data: "150k Random",
      time: "28.67 ms",
    },
    { name: "Quicksort", data: "10k Random", time: "2.54 ms" },
    { name: "Parallel Quicksort", data: "10k Random", time: "2.42 ms" },
  ];
  return (
    <Stack>
      <Flex w="full" alignItems="center" justifyContent="center" mt={10}>
        <Stack alignItems="center" justifyContent="center">
          <chakra.h1 fontSize={26}>Want Proof?</chakra.h1>
          <chakra.h2>
            All sorts run in the browser with a limit of two worker threads.
          </chakra.h2>
        </Stack>
      </Flex>
      <Flex
        w="full"
        //   bg="gray.600"
        py={10}
        mt={0}
        px={50}
        alignItems="center"
        justifyContent="center"
      >
        <Table
          w="full"
          bg={useColorModeValue("white", "gray.800")}
          display={{
            base: "block",
            md: "table",
          }}
          sx={{
            "@media print": {
              display: "table",
            },
          }}
        >
          <Thead
            display={{
              base: "none",
              md: "table-header-group",
            }}
            sx={{
              "@media print": {
                display: "table-header-group",
              },
            }}
          >
            <Tr>
              {header.map((x) => (
                <Th key={x}>{x}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody
            display={{
              base: "block",
              lg: "table-row-group",
            }}
            sx={{
              "@media print": {
                display: "table-row-group",
              },
            }}
          >
            {data.map((token, tid) => {
              return (
                <Tr
                  key={tid}
                  display={{
                    base: "grid",
                    md: "table-row",
                  }}
                  sx={{
                    "@media print": {
                      display: "table-row",
                    },
                    gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                    gridGap: "10px",
                  }}
                >
                  {Object.keys(token).map((x) => {
                    return (
                      <React.Fragment key={`${tid}${x}`}>
                        <Td
                          display={{
                            base: "table-cell",
                            md: "none",
                          }}
                          sx={{
                            "@media print": {
                              display: "none",
                            },
                            textTransform: "uppercase",
                            color: useColorModeValue("gray.600", "gray.600"),
                            fontSize: "xs",
                            fontWeight: "bold",
                            letterSpacing: "wider",
                            fontFamily: "heading",
                          }}
                        >
                          {x}
                        </Td>
                        <Td
                          color={useColorModeValue("gray.700")}
                          fontSize="md"
                          fontWeight="hairline"
                        >
                          {token[x]}
                        </Td>
                      </React.Fragment>
                    );
                  })}
                  {/* <Td
                  display={{
                    base: "table-cell",
                    md: "none",
                  }}
                  sx={{
                    "@media print": {
                      display: "none",
                    },
                    textTransform: "uppercase",
                    color: useColorModeValue("gray.400", "gray.400"),
                    fontSize: "xs",
                    fontWeight: "bold",
                    letterSpacing: "wider",
                    fontFamily: "heading",
                  }}
                >
                  Actions
                </Td>
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                    />
                    <IconButton colorScheme="green" icon={<AiFillEdit />} />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                    />
                  </ButtonGroup>
                </Td> */}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Flex>
    </Stack>
  );
}
