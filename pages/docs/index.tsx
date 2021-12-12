import { Container, Spacer, Stack } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import React from "react";
import Header from "../../components/header";
import NextImage from "next/image";

//@ts-expect-error
const myLoader = ({ src, width, quality }) => {
  return src;
};

const Docs = () => {
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
        <chakra.h1>
          Getting started with this library is super simple. For rust just
          import the crate and start coding. The WASM implementation requires a
          little more work.
        </chakra.h1>

        <chakra.h1>
          The WASM build of this library requires that the environment be
          instantiated. To do so, you will need to import and call the init
          function. This function returns a promise of the library instance.
          This libary instance gives you everything you need to get started with
          single threaded sorts. If you want to use multithreaded sorts you will
          need to use the initThreadPool function. This function also returns a
          promise and establishes the threadpool for your browser. Thats it,
          then you can just get to coding. It is important to note that both the
          init and initThreadPool functions can only be called from within a web
          Worker, this limitation is because most browsers (Firefox and chromium
          browsers for certain) do not allow atomic transactions on the main
          thread. So, these functions should be initiated in a mainWorker that
          is the orchestrator of logic that interacts with multithreaded sorts.
          Realistically this is ideal because offloading sorts off the main
          thread will prevent logic from blocking the UI.
        </chakra.h1>

        <chakra.h1>
          Take a look at the example below to get an example of how to use the
          library in the browser
        </chakra.h1>
        <Spacer />
        <NextImage
          src="/carbon.png"
          width={1380}
          height={1712}
          /*@ts-expect-error */
          loader={myLoader}
        />
        <chakra.h1>
          Take a look at the example below to get an example of how to use the
          library natively
        </chakra.h1>
        <Spacer />
        <NextImage
          src="/carbon (1).png"
          width={1952}
          height={1414}
          //@ts-expect-error
          loader={myLoader}
        />
      </Container>
    </>
  );
};

export default Docs;

export const getStaticProps = () => {
  return {
    props: {},
  };
};
