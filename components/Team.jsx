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
      <h2><br></br>HGC was created by four friends commited to build nothing of crazy but just for the sake of doing it...<br></br><br></br></h2>
      <Grid className={classes.item} container spacing={8}>
          <Grid item xs={6}>
              <Card className={classes.root} sx={{ maxWidth: 345 }}>
                  <CardHeader
                      avatar={
                      <Avatar
                      alt="Vesper"
                      src= "/images/1.jpeg"
                      style={{
                          border: '2px solid #ffdd00',
                      }}
                      sx={{ width: 100, height: 100 }}
                      />
                      }
                  />
                  <CardContent >
                      <Typography variant="subtitle1" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                      VESPER
                      </Typography>
                  </CardContent>
                  <CardContent >
                      <Typography variant="body1" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                      Co-founder and first Gangsta, he is swiss knife of the gang.
                      </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                      <Social >
                          <IconButton size="small"  color="inherit" target="_blank" href="https://www.linkedin.com/in/julien-terrier-lion-4675ba114/">
                              <LinkedIn3 className="icon" />
                          </IconButton>
                          <IconButton size="small" color="inherit" target="_blank" href="https://twitter.com/Vespereth">
                          <Twitter className="icon" />
                          </IconButton>
                      </Social>
                  </CardActions>                                        
              </Card>
          </Grid>
          <Grid item xs={6}>
              <Card className={classes.root} sx={{ maxWidth: 345 }}>
                  <CardHeader
                      avatar={
                      <Avatar
                      alt="Skeptik"
                      src= "/images/2.jpg"
                      style={{
                          border: '2px solid #ffdd00'
                      }}
                      sx={{ width: 100, height: 100 }}
                      />
                      }
                  />
                  <CardContent >
                      <Typography variant="subtitle1" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                      SKEPTIK
                      </Typography>
                  </CardContent>
                  <CardContent >
                      <Typography variant="body1" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                      Co-founder and first Hyena, he is a poet of modern times.
                      </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                      <Social >
                          {/* <IconButton size="small"  color="inherit" target="_blank" href="https://www.linkedin.com/in/christjacques/"> */}
                          <IconButton size="small"  color="inherit" target="_blank" href="https://discord.com/invite/5bRSqNJf84">
                              <Discord className="icon" />
                          </IconButton>
                          {/* <IconButton size="small" color="inherit" target="_blank" href="https://twitter.com/SkeptikHyena"> */}
                          <IconButton size="small" color="inherit" target="_blank" href="https://twitter.com/HyenaGC">
                          <Twitter className="icon" />
                          </IconButton>
                      </Social>
                  </CardActions>                                        
              </Card>
          </Grid>
          <Grid item xs={6}>
              <Card className={classes.root} sx={{ maxWidth: 345 }}>
                  <CardHeader
                      avatar={
                      <Avatar
                      alt="Damingo"
                      src= "/images/3.jpg"
                      style={{
                          border: '2px solid #ffdd00'
                      }}
                      sx={{ width: 100, height: 100 }}
                      />
                      }
                  />
                  <CardContent >
                      <Typography variant="subtitle1" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                      DAMINGO
                      </Typography>
                  </CardContent>
                  <CardContent >
                      <Typography variant="body1" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                          Co-founder and the Artist of the Gang, he draws since he was born.
                      </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                      <Social >
                          {/* <IconButton size="small"  color="inherit" target="_blank" href="https://www.instagram.com/yodamingo/"> */}
                          <IconButton size="small"  color="inherit" target="_blank" href="https://discord.com/invite/5bRSqNJf84">
                              <Discord className="icon" />
                          </IconButton>
                          {/* <IconButton size="small" color="inherit" target="_blank" href="https://twitter.com/DomingoYoo"> */}
                          <IconButton size="small" color="inherit" target="_blank" href="https://twitter.com/HyenaGC">
                          <Twitter className="icon" />
                          </IconButton>
                      </Social>
                  </CardActions>                                        
              </Card>
          </Grid>
          <Grid item xs={6}>
              <Card className={classes.root} sx={{ maxWidth: 345 }}>
                  <CardHeader
                      avatar={
                      <Avatar
                      alt="X Hyena"
                      src= "/images/4.jpg"
                      style={{
                          border: '2px solid #ffdd00'
                      }}
                      sx={{ width: 100, height: 100 }}
                      />
                      }
                  />
                  <CardContent >
                      <Typography variant="subtitle1" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                      X HYENA
                      </Typography>
                  </CardContent>
                  <CardContent >
                      <Typography variant="body1" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                          Co-founder and the only developer to add human psycho in his code.
                      </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                      <Social >
                          {/* <IconButton size="small"  color="inherit" target="_blank" href="https://www.linkedin.com/in/ayoub-zahir-70b881115/"> */}
                          <IconButton size="small"  color="inherit" target="_blank" href="https://discord.com/invite/5bRSqNJf84">
                              <Discord className="icon" />
                          </IconButton>
                          {/* <IconButton size="small" color="inherit" target="_blank" href="https://twitter.com/ReactChain"> */}
                          <IconButton size="small" color="inherit" target="_blank" href="https://twitter.com/HyenaGC">
                          <Twitter className="icon" />
                          </IconButton>
                      </Social>
                  </CardActions>                                        
              </Card>
          </Grid>
      </Grid>
  </Box>
</Content>
  ;
  
  const DesktopComponent = ({classes}) =>
  <Content>
    <Box className={classes.root} >
        <h1><u>Te<span className="h1color">am</span></u></h1>
        <h2><br></br>HGC was created by four friends commited to build nothing of crazy but just for the sake of doing it...<br></br><br></br></h2>
        <Grid container spacing={16}>
            <Grid item xs={3}>
                <Card className={classes.root} sx={{ maxWidth: 300 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Vesper"
                        src= "/images/1.jpeg"
                        style={{
                            border: '2px solid #ffdd00',
                        }}
                        sx={{ width: 200, height: 200 }}
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                          VESPER
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                            Co-founder and first Gangsta, he is swiss knife of the gang.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Social >
                            <IconButton size="large"  color="inherit" target="_blank" href="https://www.linkedin.com/in/julien-terrier-lion-4675ba114/">
                                <LinkedIn className="icon" />
                            </IconButton>
                            <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/Vespereth">
                            <Twitter className="icon" />
                            </IconButton>
                        </Social>
                    </CardActions>                                        
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.root} sx={{ maxWidth: 300 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Skeptik"
                        src= "/images/2.jpg"
                        style={{
                            border: '2px solid #ffdd00'
                        }}
                        sx={{ width: 200, height: 200 }}
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                        SKEPTIK
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                        Co-founder and first Hyena, he is a poet of modern times.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Social >
                            {/* <IconButton size="large"  color="inherit" target="_blank" href="https://www.linkedin.com/in/christjacques/"> */}
                            <IconButton size="large"  color="inherit" target="_blank" href="https://discord.com/invite/5bRSqNJf84">
                                <Discord className="icon" />
                            </IconButton>
                            {/* <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/SkeptikHyena"> */}
                            <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/HyenaGC">
                            <Twitter className="icon" />
                            </IconButton>
                        </Social>
                    </CardActions>                                        
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.root} sx={{ maxWidth: 300 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="Damingo"
                        src= "/images/3.jpg"
                        style={{
                            border: '2px solid #ffdd00'
                        }}
                        sx={{ width: 200, height: 200 }}
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                        DAMINGO
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                            Co-founder and the Artist of the Gang, he draws since he was born.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Social >
                            {/* <IconButton size="large"  color="inherit" target="_blank" href="https://www.instagram.com/yodamingo/"> */}
                            <IconButton size="large"  color="inherit" target="_blank" href="https://discord.com/invite/5bRSqNJf84">
                                <Discord className="icon" />
                            </IconButton>
                            {/* <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/DomingoYoo"> */}
                            <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/HyenaGC">
                            <Twitter className="icon" />
                            </IconButton>
                        </Social>
                    </CardActions>                                        
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.root} sx={{ maxWidth: 300 }}>
                    <CardHeader
                        className={classes.avatar}
                        avatar={
                        <Avatar
                        alt="X Hyena"
                        src= "/images/4.jpg"
                        style={{
                            border: '2px solid #ffdd00'
                        }}
                        sx={{ width: 200, height: 200 }}
                        />
                        }
                    />
                    <CardContent >
                        <Typography variant="h5" color="#ffdd00" style={{ fontFamily: 'GT America' }}>
                        X HYENA
                        </Typography>
                    </CardContent>
                    <CardContent >
                        <Typography variant="h6" color="#ffffff" style={{ fontFamily: 'Bebas Regular' }}>
                            Co-founder and the only developer to add human psycho in his code.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Social >
                            {/* <IconButton size="large"  color="inherit" target="_blank" href="https://www.linkedin.com/in/ayoub-zahir-70b881115/"> */}
                            <IconButton size="large"  color="inherit" target="_blank" href="https://discord.com/invite/5bRSqNJf84">
                                <Discord className="icon" />
                            </IconButton>
                            {/* <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/ReactChain"> */}
                            <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/HyenaGC">
                            <Twitter className="icon" />
                            </IconButton>
                        </Social>
                    </CardActions>                                        
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
    /* filter: brightness(0) saturate(100%) invert(37%) sepia(4%) saturate(30%)
      hue-rotate(315deg) brightness(89%) contrast(74%); */
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