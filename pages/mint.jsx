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

  return (
    <div align="center">
      <iframe
         src="https://bafybeidpp4d3znpjxlvlhitaylbqwmyk2gzcxazp5wkftvwu7r3lsyku2q.ipfs.thirdwebstorage.com/?contract=0xcB324a4C479D7b33d3377932227c675f5eF3ec9B&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%7D&primaryColor=blue"
        width="600px"
        height="600px"
        //style="max-width:100%;"
        frameborder="10"
      ></iframe>
    </div>
  );
//   const { contract: nftDrop } = useContract(myNftDropContractAddress);

//   const address = useAddress();
//   const [quantity, setQuantity] = useState(1);

//   const { data: contractMetadata } = useContractMetadata(nftDrop);

//   const claimConditions = useClaimConditions(nftDrop);

//   const activeClaimCondition = useActiveClaimConditionForWallet(
//     nftDrop,
//     address || ""
//   );
//   const claimerProofs = useClaimerProofs(nftDrop, address || "");
//   const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
//     quantity,
//     walletAddress: address || "",
//   });
//   const unclaimedSupply = useUnclaimedNFTSupply(nftDrop);
//   const claimedSupply = useClaimedNFTSupply(nftDrop);

//   const numberClaimed = useMemo(() => {
//     return BigNumber.from(claimedSupply.data || 0).toString();
//   }, [claimedSupply]);

//   const numberTotal = useMemo(() => {
//     return BigNumber.from(claimedSupply.data || 0)
//       .add(BigNumber.from(unclaimedSupply.data || 0))
//       .toString();
//   }, [claimedSupply.data, unclaimedSupply.data]);

//   const priceToMint = useMemo(() => {
//     const bnPrice = BigNumber.from(
//       activeClaimCondition.data?.currencyMetadata.value || 0
//     );
//     return `${utils.formatUnits(
//       bnPrice.mul(quantity).toString(),
//       activeClaimCondition.data?.currencyMetadata.decimals || 18
//     )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
//   }, [
//     activeClaimCondition.data?.currencyMetadata.decimals,
//     activeClaimCondition.data?.currencyMetadata.symbol,
//     activeClaimCondition.data?.currencyMetadata.value,
//     quantity,
//   ]);

//   const maxClaimable = useMemo(() => {
//     let bnMaxClaimable;
//     try {
//       bnMaxClaimable = BigNumber.from(
//         activeClaimCondition.data?.maxClaimableSupply || 0
//       );
//     } catch (e) {
//       bnMaxClaimable = BigNumber.from(1_000_000);
//     }

//     let perTransactionClaimable;
//     try {
//       perTransactionClaimable = BigNumber.from(
//         activeClaimCondition.data?.maxClaimablePerWallet || 0
//       );
//     } catch (e) {
//       perTransactionClaimable = BigNumber.from(1_000_000);
//     }

//     if (perTransactionClaimable.lte(bnMaxClaimable)) {
//       bnMaxClaimable = perTransactionClaimable;
//     }

//     const snapshotClaimable = claimerProofs.data?.maxClaimable;

//     if (snapshotClaimable) {
//       if (snapshotClaimable === "0") {
//         // allowed unlimited for the snapshot
//         bnMaxClaimable = BigNumber.from(1_000_000);
//       } else {
//         try {
//           bnMaxClaimable = BigNumber.from(snapshotClaimable);
//         } catch (e) {
//           // fall back to default case
//         }
//       }
//     }

//     const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

//     let max;
//     if (maxAvailable.lt(bnMaxClaimable)) {
//       max = maxAvailable;
//     } else {
//       max = bnMaxClaimable;
//     }

//     if (max.gte(1_000_000)) {
//       return 1_000_000;
//     }
//     return max.toNumber();
//   }, [
//     claimerProofs.data?.maxClaimable,
//     unclaimedSupply.data,
//     activeClaimCondition.data?.maxClaimableSupply,
//     activeClaimCondition.data?.maxClaimablePerWallet,
//   ]);

//   const isSoldOut = useMemo(() => {
//     try {
//       return (
//         (activeClaimCondition.isSuccess &&
//           BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
//             0
//           )) ||
//         numberClaimed === numberTotal
//       );
//     } catch (e) {
//       return false;
//     }
//   }, [
//     activeClaimCondition.data?.availableSupply,
//     activeClaimCondition.isSuccess,
//     numberClaimed,
//     numberTotal,
//   ]);

//   console.log("claimIneligibilityReasons", claimIneligibilityReasons.data);

//   const canClaim = useMemo(() => {
//     return (
//       activeClaimCondition.isSuccess &&
//       claimIneligibilityReasons.isSuccess &&
//       claimIneligibilityReasons.data?.length === 0 &&
//       !isSoldOut
//     );
//   }, [
//     activeClaimCondition.isSuccess,
//     claimIneligibilityReasons.data?.length,
//     claimIneligibilityReasons.isSuccess,
//     isSoldOut,
//   ]);

//   const isLoading = useMemo(() => {
//     return (
//       activeClaimCondition.isLoading ||
//       unclaimedSupply.isLoading ||
//       claimedSupply.isLoading ||
//       !nftDrop
//     );
//   }, [
//     activeClaimCondition.isLoading,
//     nftDrop,
//     claimedSupply.isLoading,
//     unclaimedSupply.isLoading,
//   ]);

//   const buttonLoading = useMemo(
//     () => isLoading || claimIneligibilityReasons.isLoading,
//     [claimIneligibilityReasons.isLoading, isLoading]
//   );
//   const buttonText = useMemo(() => {
//     if (isSoldOut) {
//       return "Sold Out";
//     }

//     if (canClaim) {
//       const pricePerToken = BigNumber.from(
//         activeClaimCondition.data?.currencyMetadata.value || 0
//       );
//       if (pricePerToken.eq(0)) {
//         return "Mint (Free)";
//       }
//       return `Mint (${priceToMint})`;
//     }
//     if (claimIneligibilityReasons.data?.length) {
//       return parseIneligibility(claimIneligibilityReasons.data, quantity);
//     }
//     if (buttonLoading) {
//       return "Checking eligibility...";
//     }

//     return "Claiming not available";
//   }, [
//     isSoldOut,
//     canClaim,
//     claimIneligibilityReasons.data,
//     buttonLoading,
//     activeClaimCondition.data?.currencyMetadata.value,
//     priceToMint,
//     quantity,
//   ]);

//   return (
//     <div className={styles.container}>
//       <div className={styles.mintInfoContainer}>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           <>
//             <Image
//               className={styles.image}
//               src="/images/Logo1.png" // Route of the image file
//               height={337} // Desired size with correct aspect ratio
//               width={464} // Desired size with correct aspect ratio
//               alt="Logo1"
//             />
//             <div className={styles.infoSide}>
//               {/* Title of your NFT Collection */}
//               {/* <h1>{contractMetadata?.name}</h1> */}
//               {/* Description of your NFT Collection */}
//               {/* <p className={styles.description}>
//                 {contractMetadata?.description}
//               </p> */}
//               <p>
//                 Welcome on the minting page, Legendary drop is now open for WL
//                 MP(WL) : 0.06eth
//                 - MP(Public) : 0.1eth
//               </p>
//             </div>
//             <Image
//               className={styles.image}
//               src="/images/Phases.png" // Route of the image file
//               height={620} // Desired size with correct aspect ratio
//               width={1276} // Desired size with correct aspect ratio
//               alt="Phases"
//             />
//             <div className={styles.imageSide}>
//               {/* Image Preview of NFTs */}
//               {/* <img
//                 className={styles.image}
//                 src={contractMetadata?.image}
//                 alt={`${contractMetadata?.name} preview image`}
//               /> */}

//               {/* Amount claimed so far */}
//               <div className={styles.mintCompletionArea}>
//                 {/* <div className={styles.mintAreaLeft}>
//                   <p>Total Minted :</p>
//                 </div> */}
//                 <div className={styles.mintAreaRight}>
//                   {claimedSupply && unclaimedSupply ? (
//                     <p>
//                       Total Minted : <b>{numberClaimed}</b>
//                       {" / "}
//                       {numberTotal}
//                     </p>
//                   ) : (
//                     // Show loading state if we're still loading the supply
//                     <p>Loading...</p>
//                   )}
//                 </div>
//               </div>

//               {claimConditions.data?.length === 0 ||
//               claimConditions.data?.every(
//                 (cc) => cc.maxClaimableSupply === "0"
//               ) ? (
//                 <div>
//                   <h2>
//                     This drop is not ready to be minted yet. (No claim condition
//                     set)
//                   </h2>
//                 </div>
//               ) : (
//                 <>
//                   <p>Quantity</p>
//                   <div className={styles.quantityContainer}>
//                     <button
//                       className={`${styles.quantityControlButton}`}
//                       onClick={() => setQuantity(quantity - 1)}
//                       disabled={quantity <= 1}
//                     >
//                       -
//                     </button>

//                     <h4>{quantity}</h4>

//                     <button
//                       className={`${styles.quantityControlButton}`}
//                       onClick={() => setQuantity(quantity + 1)}
//                       disabled={quantity >= maxClaimable}
//                     >
//                       +
//                     </button>
//                   </div>

//                   <div className={styles.mintContainer}>
//                     {isSoldOut ? (
//                       <div>
//                         <h2>Sold Out</h2>
//                       </div>
//                     ) : (
//                       <Web3Button
//                         contractAddress={nftDrop?.getAddress() || ""}
//                         action={(cntr) => cntr.erc721.claim(quantity)}
//                         isDisabled={!canClaim || buttonLoading}
//                         onError={(err) => {
//                           console.error(err);
//                           alert("Error claiming NFTs");
//                         }}
//                         onSuccess={() => {
//                           setQuantity(1);
//                           alert("Successfully claimed NFTs");
//                         }}
//                       >
//                         {buttonLoading ? "Loading..." : buttonText}
//                       </Web3Button>
//                     )}
//                   </div>
//                 </>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
 };

export default Mint;
