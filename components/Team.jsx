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
// import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
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
      "& .MuiCardHeader-root": {
        backgroundColor: "#10100f",
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      },
      "& .MuiCardContent-root": {
        backgroundColor: "#10100f",
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
  
  const MobileComponent = ({classes}) => 
  <ContentMob>
  <Box className={classes.root}>
      <h1><u><span className="h1color">LAB</span></u></h1>
      <h2><br></br>MEG4MINT was created by two childhood nostalgic for the NES games he used to play after school...<br></br><br></br></h2>
      <Grid className={classes.item} container spacing={1}>
          <Grid item xs={15}>
          <Card className={classes.root} sx={{ maxWidth: 350 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Vesper"
                        src= "/images/cryptoRocket.png"
                        style={{
                            border: '2px solid #02efee',
                        }}
                        sx={{ width: 150, height: 150 }}
                        variant="square"
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#02efee" style={{ fontFamily: 'Nes Controller' }}>
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
          <Card className={classes.root} sx={{ maxWidth: 350 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Stekone"
                        src= "/images/cryptoRocket.png"
                        style={{
                            border: '2px solid #02efee'
                        }}
                        sx={{ width: 150, height: 150 }}
                        variant="square"
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#02efee" style={{ fontFamily: 'NES Controller' }}>
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
</ContentMob>
  ;
  
  const DesktopComponent = ({classes}) =>
  <Content>
    <Box className={classes.root} >
        <h1><u><span className="h1color">LAB</span></u></h1>
        <h2><br></br>MEG4MINT was created by two childhood nostalgic for the NES games he used to play after school...<br></br><br></br></h2>
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <Card className={classes.root} sx={{ maxWidth: 200 }}>
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
                          variant="square"
                          
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h4" color="#02efee" style={{ fontFamily: 'NES Controller' }}>
                          VESPER
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={7}>
                <Card className={classes.root} sx={{ maxWidth: 500 }}>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ marginTop: '20px', fontFamily: 'Bebas Regular', textAlign: 'justify' }}>
                        Founder - has been involved in the crypto space since 2019 as an investor and began collecting NFTs in 2021. 
                        He has created several NFTs projects and has a great knowledge in robotics and retrogaming.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.root} sx={{ maxWidth: 200 }}>
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
                          variant="square"
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h4" color="#02efee" style={{ fontFamily: 'NES Controller' }}>
                          STEKONE
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={7}>
                <Card className={classes.root} sx={{ maxWidth: 500 }}>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ marginTop: '30px', fontFamily: 'Bebas Regular', textAlign: 'justify' }}>
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
    const breakpoint = 900;
  
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