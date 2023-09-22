import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
//import { Ethereum } from '@thirdweb-dev/chains';
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import Head from "next/head";

// This is the chainId your dApp will work on.
//const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  
  return (
      <ThirdwebProvider 
        activeChain="ethereum"
        clientId="332688349d519bbd50a8aacab757b80a" 
        //sdkOptions={{ gatewayUrls: ["https://gateway.ipfscdn.io/ipfs/"],}}
      >
      <Head>
        <title>Meg4mint Website</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        <meta name="description" content="Meg4mint Pixel Art for nostalgics" />
        <meta
          name="keywords"
          content="Pixel Art, Freemint, No royalties, NFT, NFTs, ETH, NFTartiste, NFTartwork"
        />
      </Head>
      <Component {...pageProps} />
      {/* <Analytics /> */}
    </ThirdwebProvider>
  );
}
export default MyApp;
