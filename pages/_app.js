import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react';



function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: {
        50: "#332f36",
        100: "#f0ece4",
      }
    }
  });
  return (
    <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
          )
}

          export default MyApp
