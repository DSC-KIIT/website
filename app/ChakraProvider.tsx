"use client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";

function ChakraProviderClient({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default ChakraProviderClient;
