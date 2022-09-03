import React from "react";
import Faq from "react-faq-component";
import styled from "styled-components";

export default function TheFaq() {
  return (
    <div>
        <Wrapper>
            <Content>
                <h1><u>FAQ</u></h1>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </Content>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2% 2% 2% 2%;
  background-color: #1d1d1b;
  //border: 1px solid #ffdd00;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
  gap: 12px;
  h1 {
    font-family: "Bebas Regular";
    font-size: 80px;
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: white;
    min-width: 0;
  }
  u {
    text-decoration: underline;
    text-decoration-color: #ffdd00;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem; 
  }
`;
const data = {
    rows: [
        {
            title: "What is an NFT ?",
            content: `NFT stands for “Non-fungible token” and is a cool way of saying it’s a truly unique digital item that YOU can buy, own, and trade.`,
        },
        {
            title: "What is metamask ?",
            content:
                "Metamask is a crypto-wallet that can store your Ethereum, and is needed to purchase and mint a HGC. Having a wallet gives you an Ethereum address (i.e. 0xSPOO….666), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io).",
        },
        {
            title: "What blockchain is HGC based on?",
            content: `Ethereum. ERC-721 Token`,
        },
        {
            title: "Buying an NFT for the first time ?",
            content: "Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button MINT on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !",
        },
        {
            title: "What is the release date for the HGC collection?",
            content: "Date to be defined",
        },
        {
            title: "How much will it cost to mint a HGC NFT?",
            content: "Freemint, you will only pay the fees",
        },
        {
            title: "When will the HGC collection be revealed?",
            content: "Approx 72 hours after the public sale started.",
        },
        {
            title: "How do I purchase the HGC collection?",
            content: "Mint on this official site during the sale period or buy on OpenSea.",
        },
        {
            title: "How can I see the HGC collection I minted?",
            content: "Visit OpenSea and connect your wallet. You should be able to see the collection you minted in your account.",
        },
        {
            title: "What can I do with my HGC / How can I trade them?",
            content: "You are free to do anything with them under a non-exclusive license. HGC adheres to the ERC-721 standard so you can trade them on platforms like OpenSea.",
        },
    ],
};
const styles = {
    bgColor: "#1d1d1b",
    titleTextColor: "white",
    rowTitleTextSize: '22px',
    rowContentTextSize: '18px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    rowTitleColor: "#ffdd00",
    rowContentColor: 'white',
    arrowColor: "#ffdd00",
};
const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};
