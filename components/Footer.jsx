import React from 'react'
import { useState, useEffect, useContext, createContext } from "react"
import styled from "styled-components";

const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {
const [width, setWidth] = useState({ width: undefined});
const [height, setHeight] = useState({ height: undefined});

const handleWindowResize = () => {
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
};

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => 
<Content>
<SocialCopyWrapper>
    <div><h1>Meg4mint partners</h1></div>
    <CopyRight><a rel="noreferrer" href="https://www.pinksale.finance" target="_blank"> PINKSALE </a></CopyRight>
    <div><img src="/images/pinksale.png" alt="creativecommon" className="creativeCommon" /></div>

    <CopyRight><a rel="noreferrer" href="https://www.dexview.com" target="_blank"> DEXVIEW </a></CopyRight>
    <div><img src="/images/dexview.png" alt="creativecommon" className="creativeCommon" /></div>
</SocialCopyWrapper>
</Content>
;

const DesktopComponent = () =>
<Content>
<SocialCopyWrapper>
    <div><h1>Meg4mint partners</h1></div>
    <CopyRight><a rel="noreferrer" href="https://www.pinksale.finance" target="_blank"> PINKSALE </a></CopyRight>
    <div><img src="/images/pinksale.png" alt="creativecommon" className="creativeCommon" /></div>

    <CopyRight><a rel="noreferrer" href="https://www.dexview.com" target="_blank"> DEXVIEW </a></CopyRight>
    <div><img src="/images/dexview.png" alt="creativecommon" className="creativeCommon" /></div>
</SocialCopyWrapper>
</Content>
 ;

const Layouts = () => {
  const { width } = useViewport();
  const breakpoint = 900;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Hyenazation() {
  return (
    <ViewportProvider>
        <Wrapper>
          <Layouts />
        </Wrapper>
      </ViewportProvider>
  )
}
const Wrapper = styled.div`
  height: 5%;
  width: 100%;
  padding: 2% 2% 2% 2%;
  //background: linear-gradient(#070047,#07001F);
  background: linear-gradient(#464646,#fefeff);
  @media (max-width: 600px){
    height: 10%;
  }
`;
const Content = styled.div`
  /* display: flex; */
  
  .creativeCommon {
    height: 40%;
    width: 20%;
    /* margin-right: 20%; */
  }
  @media (max-width: 1200px){
    .creativeCommon {
      min-width: 24%;
      min-height: 12%;
      margin-right: 25%;
    }
  }
  @media (max-width: 900px){
    .creativeCommon {
      margin-right: 0;
      min-width: 40%;
      min-height: 20%;
    }
  }
`;
const CopyRight = styled.p`
  font-family: "NES Controller";
  font-size: 3.1rem;
  color: #ffffff;
`;
const SocialCopyWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  text-align: center;
  /* justify-content: space-between; */
  flex: 1;
  @media (max-width: 900px){
    flex-direction: column;
    text-align: center;
  }
`;