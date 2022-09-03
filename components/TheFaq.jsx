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
  background-color: #10100f;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 18%;
  margin-right: 20%;
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
    text-decoration-color: #02efee;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem; 
  }
`;
const data = {
    rows: [
        {
            title: "1. What are Meg4mint?",
            content: `Meg4mint are robots from the childhood dimension who will be spawned here to explore our memories`,
        },
        {
            title: "2. What chain is Meg4mint on?",
            content: 'Ethereum Mainnet',
        },
        {
            title: "3. How much do 8liens cost?",
            content: `Meg4mint are free, and there is no royalty on secondary market`,
        },
        {
            title: "4. What is your revenue model?",
            content: 'We are keeping 10% of Meg4mint for the 2 founders (like punks did)',
        },
        {
            title: "5. Is there a treasury?",
            content: 'An additional 10% have been held back for development, some have been given to devs and advisors already and the remainder will be minted to a wallet for future development. Any future proceeds from this will all go back into the project. Any sales will be completely transparent and announced in advance.',
        },
        {
            title: "6. How were spawn list spots distributed?",
            content: 'All spots were given out to the community through discord or Twitter, 1 spot per human (artists and devs and a few advisors received more than 1)',
        },
        {
            title: "7. Is there utility? A token? A Game? Metaverse?",
            content: 'Lol- no. 8liens are NFT art, inspired by cryptopunks',
        },
        {
            title: "8. What can I do with my Meg4mint?",
            content: 'All 8liens will be CC0, excluding the 1/1 pieces which will be determined individually by each artist',
        },
    ],
};
const styles = {
    bgColor: "#10100f",
    titleTextColor: "white",
    rowTitleTextSize: '22px',
    rowContentTextSize: '18px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    rowTitleColor: "#02efee",
    rowContentColor: 'white',
    arrowColor: "#02efee",
};
const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};
