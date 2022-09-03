import React from "react";
import { useState, useEffect, useContext, createContext } from "react"
import styled from "styled-components";
import Image from 'next/image';
import bgImage from "../public/images/background.jpg";
import pill from "../public/images/pilule.gif";
import logo from "../public/images/logo.png";
// import joinDiscord from "../../assets/images/joinDiscord.svg";
import DrawAppBar from "./DrawAppBar";

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

const MobileComponent = () => {
return (
<>
  <Landing>
    <DrawAppBar />
    <Content>  
      <img src="/images/cryptoRocket.png" alt="logo" className="logo" />
      <div>
        <h1>CRYPTO ROCKET</h1>
        <h2>EXTRA LIFE</h2>
      </div>
      {/* <img src="/images/pilule.gif" alt="pill" className="pill" /> */}
    </Content>
  </Landing>
</>
)};

const DesktopComponent = () => {
return (
  <>
    <Content>
      <DrawAppBar />
      <img src="/images/cryptoRocket.png" alt="logo" className="logo" />
      <div>
        <h1>CRYPTO ROCKET</h1>
        <h2>EXTRA LIFE</h2>
      </div>
      {/* <img src="/images/pilule.gif" alt="pill" className="pill" /> */}
  </Content>
</>
)};

const Layouts = () => {
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Home() {
  return (
    <>
      <ViewportProvider>
        <Wrapper>
            <Layouts />
            {/* <Triangle/> */}
        </Wrapper>
      </ViewportProvider>
    </>
  );
}
const Wrapper = styled.div`
  height: 50%;
  width: 100%;
  /* position:relative; */
  background-image: url("/images/bkg3.png");
  background-size:     cover;                      /* <------ */
  background-repeat:   no-repeat;
  background-position: center center; 
  margin: 0 auto;
  background-color: #10100f;
  /* border-bottom: 5px solid #02efee; */
  overflow-y:visible;
  /* @media (max-width: 600px){
    height: 30%;
  } */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* position: absolute; */
  h1 {
    font-family: "NES Controller";
    font-size: 80px;
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: #ffffff;
    min-width: 0;
    padding: 0% 2% 2% 2%;
  }
  h2 {
    font-family: "NES Controller";
    font-size: calc(1rem + 0.8vw);
    font-size: clamp(0.85rem, -0.121rem + 2.024vw, 1.5rem); //last -15%
    letter-spacing: 8px;
    color: rgb(255, 255, 255);
    padding: 0% 2% 2% 2%;
  }
  .logo {
    width: clamp(7.5625rem, 3.491rem + 10.649vw, 10.875rem);
    height: "auto";
    margin-top: -4%;
    margin-bottom: 0;
    padding: 0% 2% 2% 2%;
  }
  .pill {
    margin-top: 1%;
    width: clamp(5rem, 0.286rem + 8.571vw, 8.3rem);
    padding: 0% 2% 2% 2%;
  }
  @media (max-width: 599px) {
    padding: 0;
    .logo {
      //margin-top: 11%;
      margin-left: 5%;
    }
    h1 {
      margin-left: 5%;
    }
    h2 {
      margin-left: 5%;
    }
    .pill {
      margin-top: -20%;
      margin-left: 75%;
      width: clamp(5rem, 0.286rem + 3.571vw, 3.3rem);
    }
  }
  /* @media (max-width: 340px) {
    .pill {
      margin-top: -13%;
      margin-left: 80%;
      width: clamp(4rem, 0.286rem + 3.571vw, 3.3rem);
    }
  } */
`;
const Triangle = styled.div`
  display: flex;
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0px;
  left: 0; 
  right: 0;
  margin: 0 auto;
  border-style: solid;
  border-width: 0 40px 40px 40px;
  border-color: transparent transparent #02efee transparent;
  @media (max-width: 599px) {
    bottom: 5px;
    margin: 0 auto;
  }
  `;
const Landing = styled.div`
  width: 100%;
  height: 40%;
  background-color: black;
  /* position:absolute; */
  margin-top: -1%;
`;

/**
 * Filter css to color svg 
 *#ffffff : brightness(0) saturate(100%) invert(99%) sepia(12%) saturate(3%) hue-rotate(187deg) brightness(114%) contrast(100%);
  #ffdd00 : brightness(0) saturate(100%) invert(92%) sepia(17%) saturate(6605%) hue-rotate(359deg) brightness(103%) contrast(104%);
  #606060 : brightness(0) saturate(100%) invert(37%) sepia(4%) saturate(30%) hue-rotate(315deg) brightness(89%) contrast(74%);
  #02efee : filter: brightness(0) saturate(100%) invert(92%) sepia(88%) saturate(2585%) hue-rotate(100deg) brightness(94%) contrast(99%);
 */
