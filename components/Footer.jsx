import React from 'react'
import { useState, useEffect, useContext, createContext } from "react"
import styled from "styled-components";
import LogoYellow from "../public/images/logoYellow.png";
import Discord from "../public/images/discord.svg";
import Twitter from "../public/images/twitter.svg";
import Instagram from "../public/images/instagram.svg";

const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {
 // const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);
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
    {/* <Social>
      <Discord
        className="icon"
        onClick={() =>
        window.open("https://discord.com/invite/5bRSqNJf84")
        }
      />
      <Twitter
        className="icon"
        onClick={() => window.open("https://twitter.com/HyenaGC")}
      />
      <Instagram
        className="icon"
        onClick={() =>
        window.open("https://www.instagram.com/hyena_gangsta_club/")
        }
      />
    </Social> */}
</SocialCopyWrapper>
</Content>
;

const DesktopComponent = () =>
<Content>
<SocialCopyWrapper>
    <CopyRight>This work is licensed under a <a rel="noreferrer" href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a></CopyRight>
    {/* <img src="/images/CC.png" alt="creativecommon" className="creativeCommon" /> */}
    {/* <Social>
    <Discord
        className="icon"
        onClick={() =>
        window.open("https://discord.com/invite/5bRSqNJf84")
        }
    />
    <Twitter
        className="icon"
        onClick={() => window.open("https://twitter.com/HyenaGC")}
    />
    <Instagram
        className="icon"
        onClick={() =>
        window.open("https://www.instagram.com/hyena_gangsta_club/")
        }
    />
    </Social> */}
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
// const Social = styled.div`
//   height: 100%;
//   //align-self: end;
//   display: flex;
//   flex-direction: column;
//   /* gap: 12%; */
//   .icon {
//     padding-bottom: 20px;
//     width: clamp(1.5rem, 0.536rem + 1.488vw, 1.9rem);
//     filter: brightness(0) saturate(100%) invert(92%) sepia(17%)
//         saturate(6605%) hue-rotate(359deg) brightness(103%) contrast(104%);
//     transition: transform 0.1s ease-in;
//   }
//   .icon:hover {
//     filter: brightness(0) saturate(100%) invert(92%) sepia(17%) saturate(6605%)
//       hue-rotate(359deg) brightness(103%) contrast(104%);
//     transform: scale(1.4);
//     cursor: pointer;
//   }
//   .icon:active {
//     transform: scale(1.3);
//   }
//   @media (max-width: 900px) {
//     flex-direction: row;
//     margin-left:20px;
//     .icon {
//       padding-right: 15px;
//       padding-top: 20px;
//       width: clamp(2.0rem, 0.536rem + 1.488vw, 1.9rem); 
//       filter: brightness(0) saturate(100%) invert(92%) sepia(17%)
//         saturate(6605%) hue-rotate(359deg) brightness(103%) contrast(104%);
//       transform: scale(1.4);
//     }
//   }
// `;