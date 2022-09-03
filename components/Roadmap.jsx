import React from 'react'
// import { useState, useEffect, useContext, createContext } from "react"
import { useState } from "react"
import styled from "styled-components";
import bkg from "../public/images/cardBkg.png";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Flipper, Flipped } from "react-flip-toolkit";

// const viewportContext = createContext({});

// const ViewportProvider = ({ children }) => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);
//   const handleWindowResize = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);
//     return () => window.removeEventListener("resize", handleWindowResize);
//   }, []);

//   return (
//     <viewportContext.Provider value={{ width, height }}>
//       {children}
//     </viewportContext.Provider>
//   );
// };

// const useViewport = () => {
//   const { width, height } = useContext(viewportContext);
//   return { width, height };
// };

// const clickMe = (event) => {
//   console.log(event); 
// }

const Square = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <Content>
      <Card sx={{ maxWidth: 275, marginLeft: '10%', border: '2px solid #ffdd00', borderRadius: '10px' }}>
        <CardActionArea onClick={toggleFullScreen}>
          <CardContent style={{backgroundColor: "#10100f", textAlign: 'left'}}>
              <Typography gutterBottom variant="h4" component="div" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                CHAPTER01
              </Typography>
              <Typography variant="h5" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                Born of decentralized<br></br> Hyena Gangsta Club<br></br> ...
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="300"
              image= "/images/cardBkg.png"
              // image={bkg}
              alt="3023"
            />
        </CardActionArea>
      </Card>
  </Content>
  </Flipped>
);

const FullScreenSquare = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    {/* <div className="full-screen-square" onClick={toggleFullScreen} /> */}
    <Content>
      <Card sx={{ maxWidth: 275, marginLeft: '10%', border: '2px solid #ffdd00', borderRadius: '10px' }}>
        <CardActionArea onClick={toggleFullScreen}>
          <CardContent style={{backgroundColor: "#10100f", textAlign: 'left'}}>
              {/* <Typography gutterBottom variant="h4" component="div" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                CHAPTER02
              </Typography> */}
              <Typography variant="h5" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
              1. HGC | Genesis (Team creation)<br></br><br></br>
              2. Our own codes, our own rules (Identity - Design)<br></br><br></br>
              3. Start to mark the territory (Teasing)<br></br><br></br>
              4. More than a community it s an NFT gang (Discord)<br></br><br></br>
              5. Expands the territory (Website)<br></br><br></br>
              6. HGC | The legend  (NFT collection)<br></br><br></br>
              </Typography>
            </CardContent>
            {/* <CardMedia
              component="img"
              height="300"
              image={bkg}
              alt="3023"
            /> */}
        </CardActionArea>
      </Card>
  </Content>
  </Flipped>
);

// const MobileComponent = () => 
//   <ContentMob>
//     <div>
//       <h1><u>Road<span className="h1color">map</span></u></h1>
//       <h2><br></br>Hyena Gangstas Chronicles, digital art...<br></br></h2>
//     </div>
//   </ContentMob>
// ;

// const DesktopComponent = () =>
  
//   <Content>
//     <div>
//       <h1><u>Road<span className="h1color">map</span></u></h1>
//       <h2><br></br>The Hyena Gangsta Club has began by meeting in secret 
//       locations, small grocery stores in a well hidden back room with the goal of building a new paradigm...<br></br><br></br>
//       </h2>
//     </div>
    
//     <Card sx={{ maxWidth: 500, marginLeft: '10%', border: '2px solid #ffdd00', borderRadius: '10px' }}>
//       <CardActionArea onClick={(event) => {clickMe(event)}}>
      
//         <CardContent style={{backgroundColor: "#10100f", textAlign: 'left'}}>
//             <Typography gutterBottom variant="h4" component="div" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
//               CHAPTER01
//             </Typography>
//             <Typography variant="h5" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
//               Born of decentralized<br></br> Hyena Gangsta Club<br></br> ...
//             </Typography>
//           </CardContent>
//           <CardMedia
//             component="img"
//             height="300"
//             image={bkg}
//             alt="3023"
//           />
//       </CardActionArea>
//     </Card>
//   </Content>
//  ;

// const Layouts = () => {
//   const { width } = useViewport();
//   const breakpoint = 1200;

//   return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
// };

export default function Roadmap() {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => setFullScreen(prevState => !prevState);
  
  return (
    // <>
    //   <ViewportProvider>
    //     <Wrapper>
    //       <Layouts />
    //     </Wrapper>
    //   </ViewportProvider>
    // </>
    <Wrapper>
      <Content>
        <div>
          <h1><u>Road<span className="h1color">map</span></u></h1>
          <h2><br></br>The Hyena Gangsta Club has began by meeting in secret 
          locations, small grocery stores in a well hidden back room with the goal of building a new paradigm...<br></br><br></br>
          </h2>
        </div>
        <Flipper flipKey={fullScreen}>
          {fullScreen ? (
            <FullScreenSquare toggleFullScreen={toggleFullScreen} />
          ) : (
            <Square toggleFullScreen={toggleFullScreen} />
          )}
        </Flipper>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2% 2% 2% 2%;
  margin: 0 auto;
  background-color: #1d1d1b;
  /* border: 1px solid #ffdd00; */
  /* @media (max-width: 600px){
    height: 20%;
  } */
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    text-align: left;
    font-family: "Bebas Regular";
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: #ffdd00;
    min-width: 0;
    margin-left: 10%;
  }
  h1 .h1color {
    color: #ffffff;
  }
  h2 {
    text-align: left;
    font-family: "GT America";
    font-size: calc(1rem + 0.8vw);
    //font-size: clamp(0.85rem, -0.121rem + 2.024vw, 1.5rem); //last -15%
    color: rgb(255, 255, 255);
    margin-left: 10%;
    margin-right: 10%;
  }
  u {
    text-decoration: underline;
    text-decoration-color: #ffdd00;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem; 
}
/* .square {
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  background-image: linear-gradient(
    45deg,
    rgb(121, 113, 234),
    rgb(97, 71, 182)
  );
} */

.full-screen-square {
  position: absolute;
  /* top: 50%; */
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  cursor: pointer;
  background-image: linear-gradient(45deg, #fc4444, rgb(242, 123, 69));
}
`;
// const ContentMob = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   h1 {
//     text-align: left;
//     font-family: "Bebas Regular";
//     font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
//     color: #ffdd00;
//     min-width: 0;
//     margin-left: 10%;
//   }
//   h1 .h1color {
//     color: #ffffff;
//   }
//   h2 {
//     font-family: "GT America";
//     font-size: calc(1rem + 0.8vw);
//     //font-size: clamp(0.85rem, -0.121rem + 2.024vw, 1.5rem); //last -15%
//     color: rgb(255, 255, 255);
//     text-align: justify;
//     margin-left: initial;
//     margin-right: initial;
//     padding:10%;
//     padding-top:0%;
//   }
//   u {
//     text-decoration: underline;
//     text-decoration-color: #ffdd00;
//     text-decoration-thickness: 2px;
//     text-underline-offset: 1rem; 
// }
// `;