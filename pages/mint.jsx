// import {
//   ChainId,
//   useClaimedNFTSupply,
//   useContract,
//   useContractMetadata,
//   useNetwork,
//   useNFTDrop,
//   useSignatureDrop,
//   useUnclaimedNFTSupply,
//   useActiveClaimCondition,
//   useClaimNFT,
//   useWalletConnect,
//   useCoinbaseWallet,
// } from "@thirdweb-dev/react";
// import { useNetworkMismatch } from "@thirdweb-dev/react";
// import { useAddress, useMetamask } from "@thirdweb-dev/react";
// import { formatUnits, parseUnits } from "ethers/lib/utils";
// import { useState } from "react";
// import DrawAppBar from "../components/DrawAppBar";
// import styles from "../styles/Theme.module.css";
// import Image from "next/image";

//// Put Your NFT Drop Contract address from the dashboard here
//// const myNftDropContractAddress = '0x1c48f9C78Ade6136590a53157B9FbC0507394B76';
////const myNftDropContractAddress = '0xCa8aed9078f3acDCA8b06c906F71A1C4DCf7c72c';

//const Mint = () => {
// return (
//   <div align="center">
//     <iframe
//       src="https://gateway.ipfscdn.io/ipfs/Qmcine1gpZUbQ73nk7ZGCcjKBVFYXrEtqrhujXk3HDQ6Nn/erc721.html?contract=0xcB324a4C479D7b33d3377932227c675f5eF3ec9B&chainId=1"
//       width="600px"
//       height="600px"
//       //style="max-width:100%;"
//       frameborder="10"
//     ></iframe>
//   </div>
// );

// //const nftDrop = useNFTDrop(myNftDropContractAddress);

// const { contract: nftDrop } = useContract(
//   "0xcB324a4C479D7b33d3377932227c675f5eF3ec9B",
//   "signature-drop"
// ); //useSignatureDrop(myNftDropContractAddress);
// const address = useAddress();
// const connectWithMetamask = useMetamask();
// const connectWithWalletConnect = useWalletConnect();
// const connectWithCoinbaseWallet = useCoinbaseWallet();
// const isOnWrongNetwork = useNetworkMismatch();
// const claimNFT = useClaimNFT(nftDrop);
// const [, switchNetwork] = useNetwork();
// // The amount the user claims
// const [quantity, setQuantity] = useState(3); // default to 1
// // Load contract metadata
// const { data: contractMetadata } = useContractMetadata(nftDrop);
// // Load claimed supply and unclaimed supply
// const { data: unclaimedSupply } = useUnclaimedNFTSupply(nftDrop);
// const { data: claimedSupply } = useClaimedNFTSupply(nftDrop);
// // Load the active claim condition
// const { data: activeClaimCondition } = useActiveClaimCondition(nftDrop);
// // Check if there's NFTs left on the active claim phase
// const isNotReady =
//   activeClaimCondition &&
//   parseInt(activeClaimCondition?.availableSupply) === 0;
// // Check if there's any NFTs left
// const isSoldOut = unclaimedSupply?.toNumber() === 0;
// // Check price
// const price = parseUnits(
//   activeClaimCondition?.currencyMetadata.displayValue || "0",
//   activeClaimCondition?.currencyMetadata.decimals
// );
// // Multiply depending on quantity
// const priceToMint = price.mul(quantity);
// // Loading state while we fetch the metadata
// if (!nftDrop || !contractMetadata) {
//   return <div className={styles.container}>Loading...</div>;
// }
// // Function to mint/claim an NFT
// const mint = async () => {
//   if (isOnWrongNetwork) {
//     switchNetwork && switchNetwork(ChainId.Mainnet);
//     return;
//   }
//   claimNFT.mutate(
//     { to: address, quantity },
//     {
//       onSuccess: () => {
//         alert(`Successfully minted NFT${quantity > 1 ? "s" : ""}!`);
//       },
//       onError: (err) => {
//         console.error(err);
//         alert(err?.message || "Something went wrong");
//       },
//     }
//   );
// };
// return (
//   <div className={styles.container}>
//     {/* <DrawAppBar /> */}
//     <div className={styles.mintInfoContainer}>
//       <div className={styles.imageSide}>
//         {/* Image Preview of NFTs */}
//         {/* <img className={styles.image} src={contractMetadata?.image} alt={`${contractMetadata?.name} preview image`}/> */}
//         <Image
//           className={styles.image}
//           src="/images/Logo1.png" // Route of the image file
//           height={337} // Desired size with correct aspect ratio
//           width={464} // Desired size with correct aspect ratio
//           alt="Logo1"
//         />

//         <div className={styles.infoSide}>
//           {/* Title of your NFT Collection */}
//           {/* <h1>{contractMetadata?.name}</h1> */}
//           {/* <h1>Meg4mint</h1> */}
//           {/* Description of your NFT Collection */}
//           {/* <p className={styles.description}>{contractMetadata?.description}</p> */}
//           <p>
//             Welcome on the minting page, Meg4mint NFTs are free - OG mint (3
//             NFTs per wallet) - 05/12 - 6:00PM CET
//           </p>
//         </div>
//         {/* Amount claimed so far */}
//         <div className={styles.mintCompletionArea}>
//           {/* <div className={styles.mintAreaLeft}>
//             <p>Total Minted :</p>
//           </div> */}
//           <div className={styles.mintAreaRight}>
//             {claimedSupply && unclaimedSupply ? (
//               <p>
//                 Total Minted :{"  "}
//                 {/* Claimed supply so far */}
//                 <b>{claimedSupply?.toNumber()}</b>
//                 {" / "}
//                 {
//                   // Add unclaimed and claimed supply to get the total supply
//                   claimedSupply?.toNumber() + unclaimedSupply?.toNumber()
//                 }
//               </p>
//             ) : (
//               // Show loading state if we're still loading the supply
//               <p>Loading...</p>
//             )}
//           </div>
//         </div>

//         {/* Show claim button or connect wallet button */}
//         {address ? (
//           // Sold out or show the claim button
//           isSoldOut ? (
//             <div>
//               <h2>Coming Soon on the Ethereum Mainnet</h2>
//               {/* <h2>Sold Out</h2> */}
//             </div>
//           ) : isNotReady ? (
//             <div>
//               <h2>Not ready to be minted yet</h2>
//             </div>
//           ) : (
//             <>
//               <p>Quantity</p>
//               <div className={styles.quantityContainer}>
//                 <button
//                   className={`${styles.quantityControlButton}`}
//                   onClick={() => setQuantity(quantity - 1)}
//                   disabled={quantity <= 1}
//                 >
//                   -
//                 </button>

//                 <h4>{quantity}</h4>

//                 <button
//                   className={`${styles.quantityControlButton}`}
//                   onClick={() => setQuantity(quantity + 1)}
//                   disabled={
//                     quantity >=
//                     parseInt(
//                       activeClaimCondition?.quantityLimitPerTransaction || "0"
//                     )
//                   }
//                 >
//                   +
//                 </button>
//               </div>

//               <button
//                 className={`${styles.mainButton} ${styles.spacerTop} ${styles.spacerBottom}`}
//                 onClick={mint}
//                 disabled={claimNFT.isLoading}
//               >
//                 {claimNFT.isLoading
//                   ? "Minting..."
//                   : `Mint${quantity > 1 ? ` ${quantity}` : ""}${
//                       activeClaimCondition?.price.eq(0)
//                         ? " (Free)"
//                         : activeClaimCondition?.currencyMetadata.displayValue
//                         ? ` (${formatUnits(
//                             priceToMint,
//                             activeClaimCondition.currencyMetadata.decimals
//                           )} ${
//                             activeClaimCondition?.currencyMetadata.symbol
//                           })`
//                         : ""
//                     }`}
//               </button>
//             </>
//           )
//         ) : (
//           <div className={styles.buttons}>
//             <button
//               className={styles.mainButton}
//               onClick={connectWithMetamask}
//             >
//               Connect with MetaMask
//             </button>
//             <button
//               className={styles.mainButton}
//               onClick={connectWithWalletConnect}
//             >
//               Connect with Wallet Connect
//             </button>
//             <button
//               className={styles.mainButton}
//               onClick={connectWithCoinbaseWallet}
//             >
//               Connect with Coinbase Wallet
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// );
//};
//export default Mint;
import {
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";
//import type { NextPage } from "next";
import { useMemo, useState } from "react";
import styles from "../styles/Theme.module.css";
import { parseIneligibility } from "../utils/parseIneligibility";
import Image from "next/image";

// Put Your NFT Drop Contract address from the dashboard here
const myNftDropContractAddress = "0xcB324a4C479D7b33d3377932227c675f5eF3ec9B";

const Mint = () => {
  const { contract: nftDrop } = useContract(myNftDropContractAddress);

  const address = useAddress();
  const [quantity, setQuantity] = useState(2);

  const { data: contractMetadata } = useContractMetadata(nftDrop);

  const claimConditions = useClaimConditions(nftDrop);

  const activeClaimCondition = useActiveClaimConditionForWallet(
    nftDrop,
    address || ""
  );
  const claimerProofs = useClaimerProofs(nftDrop, address || "");
  const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
    quantity,
    walletAddress: address || "",
  });
  const unclaimedSupply = useUnclaimedNFTSupply(nftDrop);
  const claimedSupply = useClaimedNFTSupply(nftDrop);

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0)
      .add(BigNumber.from(unclaimedSupply.data || 0))
      .toString();
  }, [claimedSupply.data, unclaimedSupply.data]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

    let max;
    if (maxAvailable.lt(bnMaxClaimable)) {
      max = maxAvailable;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    unclaimedSupply.data,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  console.log("claimIneligibilityReasons", claimIneligibilityReasons.data);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      claimedSupply.isLoading ||
      !nftDrop
    );
  }, [
    activeClaimCondition.isLoading,
    nftDrop,
    claimedSupply.isLoading,
    unclaimedSupply.isLoading,
  ]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  );
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Sold Out";
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      );
      if (pricePerToken.eq(0)) {
        return "Mint (Free)";
      }
      return `Mint (${priceToMint})`;
    }
    if (claimIneligibilityReasons.data?.length) {
      return parseIneligibility(claimIneligibilityReasons.data, quantity);
    }
    if (buttonLoading) {
      return "Checking eligibility...";
    }

    return "Claiming not available";
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.mintInfoContainer}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Image
              className={styles.image}
              src="/images/Logo1.png" // Route of the image file
              height={337} // Desired size with correct aspect ratio
              width={464} // Desired size with correct aspect ratio
              alt="Logo1"
            />
            <div className={styles.infoSide}>
              {/* Title of your NFT Collection */}
              {/* <h1>{contractMetadata?.name}</h1> */}
              {/* Description of your NFT Collection */}
              {/* <p className={styles.description}>
                {contractMetadata?.description}
              </p> */}
              <p>
                Welcome on the minting page, Meg4mint NFTs are free - WL Mint (2
                NFTs per wallet) will be open 19/12 - 7:00PM CET
              </p>
            </div>

            <div className={styles.imageSide}>
              {/* Image Preview of NFTs */}
              {/* <img
                className={styles.image}
                src={contractMetadata?.image}
                alt={`${contractMetadata?.name} preview image`}
              /> */}

              {/* Amount claimed so far */}
              <div className={styles.mintCompletionArea}>
                {/* <div className={styles.mintAreaLeft}>
                  <p>Total Minted :</p>
                </div> */}
                <div className={styles.mintAreaRight}>
                  {claimedSupply && unclaimedSupply ? (
                    <p>
                      Total Minted : <b>{numberClaimed}</b>
                      {" / "}
                      {numberTotal}
                    </p>
                  ) : (
                    // Show loading state if we're still loading the supply
                    <p>Loading...</p>
                  )}
                </div>
              </div>

              {claimConditions.data?.length === 0 ||
              claimConditions.data?.every(
                (cc) => cc.maxClaimableSupply === "0"
              ) ? (
                <div>
                  <h2>
                    This drop is not ready to be minted yet. (No claim condition
                    set)
                  </h2>
                </div>
              ) : (
                <>
                  <p>Quantity</p>
                  <div className={styles.quantityContainer}>
                    <button
                      className={`${styles.quantityControlButton}`}
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>

                    <h4>{quantity}</h4>

                    <button
                      className={`${styles.quantityControlButton}`}
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= maxClaimable}
                    >
                      +
                    </button>
                  </div>

                  <div className={styles.mintContainer}>
                    {isSoldOut ? (
                      <div>
                        <h2>Sold Out</h2>
                      </div>
                    ) : (
                      <Web3Button
                        contractAddress={nftDrop?.getAddress() || ""}
                        action={(cntr) => cntr.erc721.claim(quantity)}
                        isDisabled={!canClaim || buttonLoading}
                        onError={(err) => {
                          console.error(err);
                          alert("Error claiming NFTs");
                        }}
                        onSuccess={() => {
                          setQuantity(1);
                          alert("Successfully claimed NFTs");
                        }}
                      >
                        {buttonLoading ? "Loading..." : buttonText}
                      </Web3Button>
                    )}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
      {/* Powered by thirdweb */}{" "}
      {/* <img
        src="/logo.png"
        alt="thirdweb Logo"
        width={135}
        className={styles.buttonGapTop}
      /> */}
    </div>
  );
};

export default Mint;
