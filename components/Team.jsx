import * as React from 'react';
import { useState, useEffect, useContext, createContext } from "react"
import Grid from '@mui/material/Grid'; // Grid version 1

import Discord from "../public/images/discord.svg";
import Twitter from "../public/images/twitter.svg";
// import Instagram from "../public/images/instagram.svg";
import LinkedIn from "../public/images/LinkedIn2.svg";
import LinkedIn3 from "../public/images/LinkedIn3.svg";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { createTheme, createStyles } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#00000080',
      },
    },
  });

const useStyles = makeStyles({
    root: {
      "& .MuiBox-root": {
        display: 'flex',
        flexDirection: 'column',
      },
      "& .MuiCardHeader-root": {
        backgroundColor: "#10100f",
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      },
      "& .MuiCardContent-root": {
        backgroundColor: "#10100f",
        
      },
      "& .MuiCardActions-root": {
        backgroundColor: "#10100f",
        display: "flex",
        justifyContent: "center",
      },
      "& .MuiButtonBase-root": {
        display: "flex",
        justifyContent: "center",
        padding:'15px',
      },
      "& .MuiGrid-root": {
        marginLeft: '0px',
        width:'100%',
        justifyContent: "center",
      },
    },
    item: {
      "& .MuiGrid-item": {
        paddingRight: '15px',
        paddingLeft: '40px',
      },
    },
    avatar: {
      "& .MuiCardHeader-avatar": {
        marginRight: '0px',
      },
    },
    hide: {
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
  });

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
  
  const MobileComponent = ({classes}) => 
  <Content>
  <Box className={classes.root}>
      <h1><u>Te<span className="h1color">am</span></u></h1>
      <h2><br></br>MEG4MINT was created by two childhood nostalgic for the NES games he used to play after school...<br></br><br></br></h2>
      <Grid className={classes.item} container spacing={1}>
          <Grid item xs={6}>
          <Card className={classes.root} sx={{ maxWidth: 500 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Vesper"
                        src= "/images/cryptoRocket.png"
                        style={{
                            border: '2px solid #02efee',
                        }}
                        sx={{ width: 200, height: 200 }}
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#02efee" style={{ fontFamily: 'GT America' }}>
                          VESPER
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                        Founder - has been involved in the crypto space since 2017 as an investor and began collecting NFTs in early 2020. 
                        Some highlights of his career as a collector include purchasing a CryptoPunk as his first NFT, minting a Fidenza and diamond 
                        handing countless other jpegs. He has witnessed the birth of many NFT trends and with this experience has advised artists and other 
                        collectors through many cycles.
                        </Typography>
                    </CardContent>
                </Card>
          </Grid>
          <Grid item xs={6}>
          <Card className={classes.root} sx={{ maxWidth: 500 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Stekone"
                        src= "/images/cryptoRocket.png"
                        style={{
                            border: '2px solid #02efee'
                        }}
                        sx={{ width: 200, height: 200 }}
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#02efee" style={{ fontFamily: 'GT America' }}>
                        STEKONE
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                        Founder/Primary Artist - is an artist from South Korea. He has been creating art since he was a child and has been active 
                        as an NFT artist since early 2021. His first collection was primarily focused on 1/1 art and has been collected by many prominent collectors.
                        </Typography>
                    </CardContent>
                </Card>
          </Grid>
      </Grid>
  </Box>
</Content>
  ;
  
  const DesktopComponent = ({classes}) =>
  <Content>
    <Box className={classes.root} >
    <h1><u><span className="h1color">LAB</span></u></h1>
        <h2><br></br>MEG4MINT was created by two childhood nostalgic for the NES games he used to play after school...<br></br><br></br></h2>
        <Grid container spacing={1}>
            <Grid item xs={8}>
                <Card className={classes.root} sx={{ maxWidth: 1000 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Vesper"
                        src= "/images/cryptoRocket.png"
                        style={{
                            border: '2px solid #02efee',
                        }}
                        sx={{ width: 200, height: 200 }}
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#02efee" style={{ fontFamily: 'GT America' }}>
                          VESPER
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                        Founder - has been involved in the crypto space since 2017 as an investor and began collecting NFTs in early 2020. 
                        Some highlights of his career as a collector include purchasing a CryptoPunk as his first NFT, minting a Fidenza and diamond 
                        handing countless other jpegs. He has witnessed the birth of many NFT trends and with this experience has advised artists and other 
                        collectors through many cycles.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Card className={classes.root} sx={{ maxWidth: 1000 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Stekone"
                        src= "/images/cryptoRocket.png"
                        style={{
                            border: '2px solid #02efee'
                        }}
                        sx={{ width: 200, height: 200 }}
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#02efee" style={{ fontFamily: 'GT America' }}>
                        STEKONE
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                        Founder/Primary Artist - is an artist from South Korea. He has been creating art since he was a child and has been active 
                        as an NFT artist since early 2021. His first collection was primarily focused on 1/1 art and has been collected by many prominent collectors.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Box>
  </Content>
   ;
  
  const Layouts = ({Classes}) => {
    const { width } = useViewport();
    const breakpoint = 1400;
  
    return width < breakpoint ? <MobileComponent classes={Classes} /> : <DesktopComponent classes={Classes}/>;
  };  

export default function Team() {
  const classes = useStyles();

  return (
    <ViewportProvider>
      <Wrapper>
        <Layouts Classes={classes} />
      </Wrapper>
    </ViewportProvider>
  );
};

const Wrapper = styled(Box)`
  height: 25%;
  width: 100%;
  padding: 2% 2% 2% 2%;
  margin: 0 auto;
  background-color: #10100f;
`;
const Content = styled(Box)`
  display: flex;
  text-align: center;
  h1 {
    text-align: left;
    font-family: "NES Controller";
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: #02efee;
    min-width: 0;
    margin-left: 17%;
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
    margin-left: 17%;
    margin-right: 20%;
  }
  u {
    text-decoration: underline;
    text-decoration-color: #02efee;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem; 
}
  @media (max-width: 900px){
    flex-direction: column;
    text-align: center;
    h1 {
      text-align: left;
    }
    h2 {
      text-align: justify;
      margin-left: initial;
      margin-right: initial;
      padding:10%;
      padding-top:0%;
    }
  }
`;
const Social = styled(IconButton)`
  height: 100%;
  align-self: end;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 12%;
  .icon {
    width: clamp(1.5rem, 0.536rem + 1.488vw, 1.9rem);
      filter: brightness(0) saturate(100%) invert(92%) sepia(17%)
        saturate(6605%) hue-rotate(359deg) brightness(103%) contrast(104%);
    transition: transform 0.1s ease-in;
  }
  .icon:hover {
    filter: brightness(0) saturate(100%) invert(92%) sepia(17%) saturate(6605%)
      hue-rotate(359deg) brightness(103%) contrast(104%);
    transform: scale(1.4);
    cursor: pointer;
  }
  .icon:active {
    transform: scale(1.3);
  }
  @media (max-width: 900px) {
    .icon {
      filter: brightness(0) saturate(100%) invert(92%) sepia(17%)
        saturate(6605%) hue-rotate(359deg) brightness(103%) contrast(104%);
      transform: scale(1.4);
    }
    margin-right: 3%;
    gap: 8%;
  }
`;