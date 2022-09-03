import React from 'react'
import { useState, useEffect, useContext, createContext } from "react"
import styled from "styled-components";
import Image from 'next/image';
import Figures from "../public/images/3023.png";
import Box from '@mui/material/Box';

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
  <ContentMob>
    <div>
      {/* <img src={Figures} alt="Figures" className="Figures" /> */}
      {/* <Image
        className="Figures"
        src={Figures} // Route of the image file
        height={114} // Desired size with correct aspect ratio
        width={114} // Desired size with correct aspect ratio
        alt="Figures"
      /> */}
      <h1><u>Hyena<span className="h1color">zation</span></u></h1>
      <h2><br></br> Mega Man has robotic animals: the dog Rush, the cat Tango,
       and the bird Beat. Light has robot assistants: Auto (Rightot in Japan)
        the mechanic and Eddie the walking suitcase (who sometimes gives Mega Man help),
         (Flip Top in Japan).<br></br><br></br></h2>
    </div>
    <Box
        component="img"
        sx={{
          height: 500,
          width: 500,
          maxHeight: { xs: 400, md: 500 },
          maxWidth: { xs: 400, md: 500 },
          marginRight: "auto",
          marginLeft: "auto",
          marginBottom: "-8px",
        }}
        alt="pill"
        src="/images/pilule.gif"
      />
  </ContentMob>
;

const DesktopComponent = () =>
  <Content>
    <div>
      {/* <img src={Figures} alt="Figures" className="Figures" /> */}
      {/* <Image
        src={Figures} // Route of the image file
        height={84} // Desired size with correct aspect ratio
        width={84} // Desired size with correct aspect ratio
        alt="Figures"
      /> */}
      <h1><u><span className="h1color">8</span>-<span className="h1color">BIT</span></u></h1>
      <h2><br></br> Mega Man personality and intelligence correspond to those of a 10 year old boy.
       He does not have the maturity of future robots. Mega Man has robotic animals: the dog Rush, the cat Tango,
       and the bird Beat.<br></br><br></br></h2>
    </div>
    <Box 
        component="img"
        sx={{
          height: 250,
          width: 250,
          maxHeight: { md: 300 },
          maxWidth: { md: 300 },
          // position: "absolute",
          // marginTop: "-100px",
          right: "-50px",
        }}
        alt="pill"
        src="/images/pilule.gif"
      />
  </Content>
 ;

const Layouts = () => {
  const { width } = useViewport();
  const breakpoint = 1200;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function eightbit() {
  return (
    <>
      <ViewportProvider>
        <Wrapper>
          <Layouts />
        </Wrapper>
      </ViewportProvider>
    </> 
  )
}
const Wrapper = styled.div`
  height: 50%;
  width: 100%;
  padding: 2% 2% 2% 2%;
  margin: 0 auto;
  background-color: #10100f;
  @media (max-width: 600px){
    height: 20%;
  }
`;
const Content = styled.div`
  display: flex;
  text-align: center;
  .Figures {
    height: 10%;
    width: 10%;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    text-align: left;
    font-family: "NES Controller";
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: 	#02efee;
    min-width: 0;
    margin-left: 20%;
  }
  h1 .h1color {
    color: #ffffff;
  }
  h2 {
    text-align: left;
    font-family: "Bebas Regular";
    font-size: calc(1rem + 0.4vw);
    //font-size: clamp(0.85rem, -0.121rem + 2.024vw, 1.5rem); //last -15%
    color: rgb(255, 255, 255);
    margin-left: 20%;
    margin-right: 20%;
  }
  u {
    text-decoration: underline;
    text-decoration-color: #02efee;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem; 
}

`;
const ContentMob = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  .Figures {
    height: 10%;
    width: 10%;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    text-align: left;
    font-family: "NES Controller";
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: #02efee;
    min-width: 0;
    margin-left: 10%;
  }
  h1 .h1color {
    color: #ffffff;
  }
  h2 {
    font-family: "Bebas Regular";
    font-size: calc(1rem + 0.8vw);
    //font-size: clamp(0.85rem, -0.121rem + 2.024vw, 1.5rem); //last -15%
    color: rgb(255, 255, 255);
    text-align: justify;
    margin-left: initial;
    margin-right: initial;
    padding:10%;
    padding-top:0%;
  }
  u {
    text-decoration: underline;
    text-decoration-color: #02efee;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem; 
}
`;
