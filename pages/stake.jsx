import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button
} from "@thirdweb-dev/react"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import NFTCard from "../components/NFTCard"
import {
  nftDropContractAddress,
  stakingContractAddress,
  tokenContractAddress
} from "../consts/contractAddresses"
import styles from "../styles/Home.module.css"

const Stake = () => {
  const address = useAddress()
  const { contract: nftDropContract } = useContract(
    nftDropContractAddress,
    "nft-drop"
  )
  const { contract: tokenContract } = useContract(tokenContractAddress, "token")
  const { contract, isLoading } = useContract(stakingContractAddress)
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address)
  const { data: tokenBalance } = useTokenBalance(tokenContract, address)
  const { mutateAsync: claimRewards } = useContractWrite(
    contract,
    "claimRewards"
  )
  const [claimableRewards, setClaimableRewards] = useState()
  const { data: stakedTokens } = useContractRead(
    contract,
    "getStakeInfo",
    [address]
  )

  useEffect(() => {
    if (!contract || !address) return

    async function loadClaimableRewards() {
      console.log(address)
      //const stakeInfo = await contract?.call("getStakeInfo", address)
      const stakeInfo = await contract?.call("getStakeInfo", [address])
      setClaimableRewards(stakeInfo[1])
    }

    loadClaimableRewards()
  }, [address, contract])

  async function stakeNft(id) {
    if (!address) return

    const isApproved = await nftDropContract?.isApproved(
      address,
      stakingContractAddress
    )
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(stakingContractAddress, true)
    }
    await contract?.call("stake", [id])
  }

  if (isLoading) {
    return <div className={styles.loadingOrError}>Loading</div>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Stake Your Meg4mint NFTs</h1>
      <hr className={`${styles.divider} ${styles.spacerTop}`} />

      {!address ? (
        <ConnectWallet accentColor="lightgrey"/>   
      ) : (
        <>
          <h2>Your MEG Tokens</h2>
          <div className={styles.tokenGrid}>
            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
              <p className={styles.tokenValue}>
                <b>
                  {!claimableRewards
                    ? "Loading..."
                    : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>
            </div>
            <div className={styles.tokenItem}>
              <h3 className={styles.tokenLabel}>Current Balance</h3>
              <p className={styles.tokenValue}>
                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
              </p>
            </div>
          </div>

          <Web3Button 
            accentColor="lightgrey"
            action={() => claimRewards([])}
            contractAddress={stakingContractAddress}
          >
            Claim Rewards
          </Web3Button>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h2>Your Staked NFTs</h2>
          <div className={styles.nftBoxGrid}>
            {stakedTokens &&
              stakedTokens[0]?.map(stakedToken => (
                <NFTCard
                  tokenId={stakedToken.toNumber()}
                  key={stakedToken.toString()}
                />
              ))}
          </div>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h2>Your Unstaked NFTs</h2>
          <div className={styles.nftBoxGrid}>
            {ownedNfts?.map(nft => (
              <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className={styles.nftMedia}
                />
                <h3>{nft.metadata.name}</h3>
                <Web3Button
                  accentColor="lightgrey"
                  contractAddress={stakingContractAddress}
                  action={() => stakeNft(nft.metadata.id)}
                >
                  Stake
                </Web3Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Stake
