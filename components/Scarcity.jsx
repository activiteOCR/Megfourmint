import React from 'react'
import { useState, useEffect, useContext, createContext } from "react"
import styled from "styled-components";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';

const useWindowSize = () => {
  const isSSR = typeof window === "undefined";
  const [windowSize, setWindowSize] = useState({
      width: isSSR ? 1200 : window.innerWidth,
      height: isSSR ? 800 : window.innerHeight,
  });
  
  function changeWindowSize() {
    if(!isSSR){
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }
  
  React.useEffect(() => {
      window.addEventListener("resize", changeWindowSize);
  
      return () => {
          window.removeEventListener("resize", changeWindowSize);
      };
  }, []);
  
  return windowSize;
  }

const MobileComponent = () => 
  <ContentMob>
    <div>
      <h1><u><span className="h1color">Scarcity</span></u></h1>
      <h2><br></br> Five levels of armor are available, Legacy, Heroic, Epic, Fusion and Legendary, scientists are currently working on an option that can be added to all levels...<br></br><br></br></h2>
    </div>
    <Box
        component="img"
        sx={{
          height: 300,
          width: 300,
          maxHeight: { xs: 200, md: 300 },
          maxWidth: { xs: 200, md: 300 },
          marginRight: "auto",
          marginLeft: "auto",
          // marginTop: "10px",
          marginBottom: "80px",
        }}
        alt="mega"
        src="/images/Scarcity.gif"
      />
  </ContentMob>
;

const DesktopComponent = () =>
 <Box>
  <Content>
      <Box>
        <h1><u><span className="h1color">Scarcity</span></u></h1>
        <h2><br></br> Five levels of armor are available, Legacy, Heroic, Epic, Fusion and Legendary, scientists are currently working on an option that can be added to all levels.... <br></br></h2>
      </Box>
    </Content>
    <ImageList sx={{ width: 950, height: 350, marginLeft:'19%' }} cols={4} gap={50}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
            srcSet={`${item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
            height={200} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect ratio
            alt={item.title}
            loading="lazy"
          />
           <ImageListItemBar position="below" title={item.title} style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'NES Controller' }} />
        </ImageListItem>
      ))}
    </ImageList>
    <ImageList sx={{ width: 500, height: 250, marginLeft:'31%' }} cols={2} gap={50}>
      {itemData2.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={`${item.img}?w=150&h=150&fit=crop&auto=format`}
            srcSet={`${item.img}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
            height={200} // Desired size with correct aspect ratio
            width={200} // Desired size with correct aspect ratio
            alt={item.title}
            loading="lazy"
          />
           <ImageListItemBar position="below" title={item.title} style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'NES Controller' }} />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
 ;

const Layouts = () => {
  const { width } = useWindowSize();
  const breakpoint = 1200;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default function Scarcity() {
  return (
    <>
        <Wrapper>
          <Layouts />
        </Wrapper>
    </> 
  )
}

const itemData = [
  {
    img: '/images/Original.png',
    title: 'Legacy',
  },
  {
    img: '/images/Tranium.png',
    title: 'Heroic',
  },
  {
    img: '/images/Gold.png',
    title: 'Epic',
  },
  {
    img: '/images/SM.png',
    title: 'Fusion',
  },
];

const itemData2 = [
  {
    img: '/images/interro-aseprite.png',
    title: 'Legendary',
  },
  {
    img: '/images/interro-aseprite.png',
    title: 'Option',
  },
];

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(#07001F,#070047);
`;
const Content = styled.div`
  display: flex;
  text-align: center;
  padding: 2% 2% 2% 20%;
  h1 {
    text-align: left;
    font-family: "NES Controller";
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: 	#02efee;
    min-width: 0;
  }
  h1 .h1color {
    color: #ffffff;
  }
  h2 {
    text-align: left;
    font-family: "Bebas Regular";
    font-size: calc(1rem + 0.4vw);
    color: rgb(255, 255, 255);
    margin-right: 30%;
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
