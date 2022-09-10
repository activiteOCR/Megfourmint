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
  {/* <img src="/images/CC.png" alt="creativecommon" className="creativeCommon" /> */}
  <CopyRight>This work is licensed under a <a rel="noreferrer" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a></CopyRight>  
</SocialCopyWrapper>
</Content>
;

const DesktopComponent = () =>
<Content>
<SocialCopyWrapper>
    <CopyRight>This work is licensed under a <a rel="noreferrer" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a></CopyRight>
    {/* <img src="/images/CC.png" alt="creativecommon" className="creativeCommon" /> */}
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
  background-color: #10100f;
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
  font-size: 1.1rem;
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