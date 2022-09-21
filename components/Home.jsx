import React from "react";
import { useState, useEffect, useContext, createContext } from "react"
import styled from "styled-components";
import DrawAppBar from "./DrawAppBar";

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

const MobileComponent = () => {
return (
<>
    <DrawAppBar />
    <Content>  
      <div>
        <h1>MEG4MINT</h1>
        <h2>EXTRA LIFE</h2>
      </div>
    </Content>
</>
)};

const DesktopComponent = () => {
return (
  <>
    <Content>
      <DrawAppBar />
      {/* <div>
        <h1>MEG4MINT</h1>
        <h2>EXTRA LIFE</h2>
      </div> */}
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
        </Wrapper>
      </ViewportProvider>
    </>
  );
}
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  /* position:relative; */
  /* background-image: url("/images/bkg3.png"); */
  background-size:     cover;                      /* <------ */
  background-repeat:   no-repeat;
  background-position: center center; 
  /* margin: 0 auto; */
  background-color: #10100f;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  h1 {
    font-family: "NES Controller";
    font-size: 80px;
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: #ffffff;
    min-width: 0;
    /* margin-top: 2%; */
    /* margin-left: 17%; */
    padding: 2% 2% 2% 20%;
  }
  h2 {
    font-family: "NES Controller";
    font-size: calc(1rem + 0.8vw);
    font-size: clamp(0.85rem, -0.121rem + 2.024vw, 1.5rem); //last -15%
    letter-spacing: 8px;
    color: rgb(255, 255, 255);
    /* margin-left: 17%; */
    padding: 0% 2% 2% 20%;
  }
  @media (max-width: 1200px) {
    h1 {
      text-align: center;
      padding: 2% 2% 2% 2%;
    }
    h2 {
      text-align: center;
      padding: 0% 2% 2% 2%;
    }
  }
`;
