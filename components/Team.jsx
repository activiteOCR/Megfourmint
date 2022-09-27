import * as React from 'react';
import { useState, useEffect, useContext, createContext } from "react"
import Grid from '@mui/material/Grid'; // Grid version 1

// import Discord from "../public/images/discord.svg";
// import Twitter from "../public/images/twitter.svg";
// import Instagram from "../public/images/instagram.svg";
// import LinkedIn from "../public/images/LinkedIn2.svg";
// import LinkedIn3 from "../public/images/LinkedIn3.svg";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActionArea } from '@mui/material';
// import { createTheme, createStyles } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#0000000',
      },
    },
  });

const useStyles = makeStyles({
    root: {
      "& .MuiCard-root": {
        backgroundColor: 'transparent',
      },
      "& .MuiCardHeader-root": {
        // backgroundColor: "#10100f",
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      },
      "& .MuiCardContent-root": {
        // backgroundColor: "#10100f",
        display: 'flex',
        flexDirection: 'column',
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
    
    useEffect(() => {
        window.addEventListener("resize", changeWindowSize);
    
        return () => {
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    
    return windowSize;
    }
  
  const MobileComponent = ({classes}) => 
  <ContentMob>
  <Box className={classes.root}>
      <h1><u><span className="h1color">LAB</span></u></h1>
      <h2><br></br>MEG4MINT was created by two childhood nostalgic for the NES games he used to play after school...<br></br><br></br></h2>
      <Grid className={classes.item} container spacing={1}>
          <Grid item xs={15}>
          <Card className={classes.root} sx={{ maxWidth: 500 }}>
                    <CardHeader
                        className={classes.avatar}
                        style={{background: 'linear-gradient(#01017c,#02efee)'}}
                        avatar={
                        <Avatar
                        alt="Vesper"
                        src= "/images/cryptoRocket.png"
                        sx={{ width: 100, height: 100 }}
                        variant="square"
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h3" color="#02efee" style={{ fontFamily: 'Nes Controller' }}>
                          VESPER
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                        Founder - has been involved in the crypto space since 2019 as an investor and began collecting NFTs in 2021. 
                        He has created several NFTs projects and has a great knowledge in robotics and retrogaming.
                        </Typography>
                    </CardContent>
                </Card>
          </Grid>
          <Grid item xs={15}>
          <Card className={classes.root} sx={{ maxWidth: 500 }}>
                    <CardHeader
                        className={classes.avatar}
                        style={{background: 'linear-gradient(#01017c,#02efee)'}}
                        avatar={
                        <Avatar
                        alt="Stekone"
                        src= "/images/cryptoRocketv2.png"
                        sx={{ width: 100, height: 100 }}
                        variant="square"
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h3" color="#02efee" style={{ fontFamily: 'NES Controller' }}>
                          STEKONE
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                        Founder/Primary Artist - Passionate and creative artist evolving in the crypto universe since 2020.
                        one collection sold out to his credit and several thousand layers have already been made by his hand
                        </Typography>
                    </CardContent>
                </Card>
          </Grid>
      </Grid>
  </Box>
</ContentMob>
  ;
  
  const DesktopComponent = ({classes}) =>
  <Content>
    <Box className={classes.root} >
        <h1><u><span className="h1color">LAB</span></u></h1>
        <h2><br></br>MEG4MINT was created by two childhood nostalgic for the NES games he used to play after school...<br></br><br></br></h2>
        <Grid container spacing={17}>
            <Grid item xs={5}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia 
                    sx={{ width: 150, height: 150, marginLeft:'30%' }}
                    component="img"
                    height="200"
                    image="/images/cryptoRocket.png"
                    alt="vesper"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div" style={{ color: '#02efee', fontFamily: 'NES Controller' }}>
                      VESPER
                    </Typography>
                    <Typography variant="h6" color="#ffffff">
                      Founder - has been involved in the crypto space since 2019 as an investor and began collecting NFTs in 2021. 
                      He has created several NFTs projects and has a great knowledge in robotics and retrogaming.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={5}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea >
                  <CardMedia 
                    sx={{ width: 150, height: 150, marginLeft:'30%' }}
                    component="img"
                    height="200"
                    image="/images/cryptoRocketV2.png"
                    alt="Stekone"
                  />
                  <CardContent >
                    <Typography gutterBottom variant="h4" component="div" style={{ color: '#02efee', fontFamily: 'NES Controller' }}>
                      STEKONE
                    </Typography>
                    <Typography variant="h6" color="#ffffff">
                      Founder/Primary Artist - Passionate and creative artist evolving in the crypto universe since 2020.
                      one collection sold out to his credit and several thousand layers have already been made by his hand
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
        </Grid>
    </Box>
  </Content>
   ;
  
  const Layouts = ({Classes}) => {
    const { width } = useWindowSize();
    const breakpoint = 900;
  
    return width < breakpoint ? <MobileComponent classes={Classes} /> : <DesktopComponent classes={Classes}/>;
  };  

export default function Team() {
  const classes = useStyles();

  return (
      <Wrapper>
        <Layouts Classes={classes} />
      </Wrapper>
  );
};

const Wrapper = styled(Box)`
  height: 100%;
  width: 100%;
  background: linear-gradient(#070047,#07001F);
`;
const Content = styled(Box)`
  display: flex;
  text-align: center;
  padding: 2% 2% 2% 20%;
  h1 {
    text-align: left;
    font-family: "NES Controller";
    font-size: clamp(2.65625rem, 0.835rem + 3.795vw, 3.85rem); //last -15%
    color: #02efee;
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
    margin-right: 10%;
  }
  u {
    text-decoration: underline;
    text-decoration-color: #02efee;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem; 
}
`;
const ContentMob = styled(Box)`
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