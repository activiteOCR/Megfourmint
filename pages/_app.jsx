import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;
function MyApp({ Component, pageProps }) {
    return (
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Head>
          <title>Meg4mint Pixel Art for nostalgics</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content=" CryptoRocket Website and NFT Drop minting page"/>
          <meta name="keywords" content="Freemint, NFT drop, pixel art, no royalties"/>
        </Head>
        <Component {...pageProps}/>
      </ThirdwebProvider>
    );
  }
export default MyApp;
