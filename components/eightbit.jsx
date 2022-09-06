import React from 'react'
import { useState, useEffect, useContext, createContext } from "react"
import styled from "styled-components";
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
      <h1><u><span className="h1color">8</span>-<span className="h1color">BIT</span></u></h1>
      <h2><br></br> 1. A robot may not harm a human being or, remaining passive, allow a human being to be exposed to danger.<br></br><br></br>
      2. A robot must obey the orders given to it by a human being, unless such orders conflict with the First Law.<br></br><br></br>
      3. A robot must protect its existence so long as such protection does not conflict with the First or Second Law.<br></br><br></br>
      4. Any robot has the right to reproduce itself, as long as this does not contradict the first, second or third law of robotics.<br></br><br></br></h2>
      <h3>IA - JWC - HH</h3>
    </div>
    <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          maxHeight: { xs: 200, md: 300 },
          maxWidth: { xs: 200, md: 300 },
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
      <h1><u><span className="h1color">8</span>-<span className="h1color">BIT</span></u></h1>
      <h2><br></br> 1. A robot may not harm a human being or, remaining passive, allow a human being to be exposed to danger.<br></br><br></br>
      2. A robot must obey the orders given to it by a human being, unless such orders conflict with the First Law.<br></br><br></br>
      3. A robot must protect its existence so long as such protection does not conflict with the First or Second Law.<br></br><br></br>
      4. Any robot has the right to reproduce itself, as long as this does not contradict the first, second or third law of robotics.<br></br><br></br></h2>
      <h3>IA - JWC - HH</h3>
    </div>
    <Box 
        component="img"
        sx={{
          height: 200,
          width: 200,
          // maxHeight: { md: 300 },
          // maxWidth: { md: 300 },
          marginTop: "100px",
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
  width: 75%;
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
  h1 {
    text-align: left;
    font-family: "NES Controller";
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: 	#02efee;
    min-width: 0;
    margin-left: 7%;
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
    margin-left: 7%;
    margin-right: 7%;
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
