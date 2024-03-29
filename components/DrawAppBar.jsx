import * as React from 'react';
import { useState } from "react"
import styled from "styled-components";
import PropTypes from 'prop-types';
import Discord from "../public/images/discord.svg";
import Twitter from "../public/images/twitter.svg";
import Meg from "../public/images/meg.svg";
import Gitbook from "../public/images/gitbook.svg";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
//import Image from 'next/image';
import { Link } from "react-scroll";

const drawerWidth = 200;
const navItems = ['8-BIT','ROADMAP', 'TOKENOMICS', 'SCARCITY', 'LAB', 'FAQ' ];

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xxs: 0, // small phone
//       xs: 300, // phone
//       sm: 600, // tablets
//       md: 900, // small laptop
//       lg: 1200, // desktop
//       xl: 1536 // large screens
//     }
//   }
// });

let theme = createTheme({
  palette: {
    primary: {
      main: '#07001F',
    },
  },
});

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 65,
    "& .MuiAppBar-root": {
      // display: 'flex',
      // flexDirection: 'row',
       justifyContent: 'flex-end',
      // alignItems: 'center',
    },
    "& .MuiToolbar-root": {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
    "& .MuiBox-root": {
      marginRight:'40px',
    },
    "& .MuiButtonBase-root": {
      marginLeft:'5px',
      gap:'5px',
    },
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#02efee',
    },
  },
  hide: {
    [theme.breakpoints.down('xl')]: {
      display: 'none',
    },
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    },
  },
});

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function DrawerAppBar(props) {
   //DrawerAppBar
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  

  //DrawerAppBar
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MEG4MINT
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
              <ListItemButton  sx={{ flexDirection: 'column' }}>
                <Link
                onClick={handleDrawerToggle}
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                  <ListItemText  primary={item} />
                </Link>
              </ListItemButton>
          </ListItem>
        ))}
        {/* <ListItem key='GIVEAWAY' disablePadding>
          <ListItemButton target="_blank" href="/giveaway" sx={{ flexDirection: 'column' }}>
            <ListItemText  primary='GIVEAWAY' />
          </ListItemButton>
        </ListItem> */}
        <ListItem key='MINT' disablePadding>
          <ListItemButton target="_blank" href="/mint" sx={{ flexDirection: 'column' }}>
            <ListItemText  primary='MINT' />
          </ListItemButton>
        </ListItem>
        <SocialDrawer >
          <IconButton size="large"  color="inherit" target="_blank" href="https://discord.gg/fFNAHsvcbZ">
            <Discord className="icon" />
          </IconButton>
          <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/meg4mint3023">
            <Twitter className="icon" />
          </IconButton>
          <IconButton size="large" color="inherit" target="_blank" href="https://drive.google.com/file/d/1JcIoUhk1HbFiSgjTBDG2Cf8wB_wVjkVt/view?usp=sharing">
                <Meg className="icon" />
              </IconButton>
              <IconButton size="large" color="inherit" target="_blank" href="https://meg4mint.gitbook.io/meg4mint-litepaper/">
                <Gitbook className="icon" />
              </IconButton>
        </SocialDrawer>
      </List> 
    </Box>
  );
 
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className={classes.root}  sx={{ display: 'flex' }}>
      <AppBar component="nav" theme={theme} position="static" marginRight="100">
      {/* <Box 
        component="img"
        className={classes.logo}
        sx={{
          height: 38,
          width: 125,
          marginRight: 10,    
        }}
        alt="logo"
        src="/images/Logo2.png"
      /> */}
        <Toolbar id="back-to-top-anchor">
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xl: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
            component="img"
            className={classes.logo}
            sx={{
              height: 38,
              width: 125,
              //marginRight: 10,    
            }}
            alt="logo"
            src="/images/Logo2.png"
          />
          <Box className={classes.hide} sx={{ mr: 20, display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ m: 2, color: '#fff',  ':hover': { color: '#02efee',}, }} style={{ fontFamily: 'NES Controller', fontSize: '30px' }}>
                <Link
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                  {item}
                </Link>
              </Button>
            ))}
            <Button className={classes.button} key='MINT' target="_blank" href="/mint" sx={{ m: 2, color: '#fff' }} style={{ fontFamily: 'NES Controller', fontSize: '30px', maxWidth: '150px', maxHeight: '30px', minWidth: '100px', minHeight: '30px' }}>
                 Mint
            </Button>
          </Box>
          <Box className={classes.hide} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Social >
              <IconButton size="large"  color="inherit" target="_blank" href="https://discord.gg/fFNAHsvcbZ">
                <Discord className="icon" />
              </IconButton>
              <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/meg4mint3023">
              <Twitter className="icon" />
              </IconButton>
              <IconButton size="large" color="inherit" target="_blank" href="https://drive.google.com/file/d/1JcIoUhk1HbFiSgjTBDG2Cf8wB_wVjkVt/view?usp=sharing">
                <Meg className="icon" />
              </IconButton>
              <IconButton size="large" color="inherit" target="_blank" href="https://meg4mint.gitbook.io/meg4mint-litepaper/">
                <Gitbook className="icon" />
              </IconButton>
            </Social>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', xl: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
        {drawer}
        </Drawer>
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

const Social = styled.div`
  height: 100%;
  align-self: end;
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 4%;
  .icon {
    width: clamp(1.5rem, 0.536rem + 1.488vw, 1.9rem);
    filter:brightness(0) saturate(100%) invert(99%) sepia(12%) saturate(3%) hue-rotate(187deg) brightness(114%) contrast(100%);
    transition: transform 0.1s ease-in;
  }
  .icon:hover {
    filter: brightness(0) saturate(100%) invert(99%) sepia(12%) saturate(3%) hue-rotate(187deg) brightness(114%) contrast(100%);
    transform: scale(1.4);
    cursor: pointer;
  }
  .icon:active {
    transform: scale(1.3);
  }
  @media (max-width: 900px) {
    .icon {
      filter: brightness(0) saturate(100%) invert(37%) sepia(4%) saturate(30%) hue-rotate(315deg) brightness(89%) contrast(74%);
      transform: scale(1.4);
    }
    margin-right: 3%;
    gap: 8%;
  }
`;
const SocialDrawer = styled.div`
  height: 100%;
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 20%;
  .icon {
    width: clamp(1.5rem, 0.536rem + 0.488vw, 1.9rem);
    filter: brightness(0) saturate(100%) invert(37%) sepia(4%) saturate(30%) hue-rotate(315deg) brightness(89%) contrast(74%);
    transition: transform 0.1s ease-in;
  }
  .icon:hover {
    filter: brightness(0) saturate(100%) invert(37%) sepia(4%) saturate(30%) hue-rotate(315deg) brightness(89%) contrast(74%);
    transform: scale(1.4);
    cursor: pointer;
  }
  .icon:active {
    transform: scale(1.3);
  }
  @media (max-width: 900px) {
    .icon {
      filter: brightness(0) saturate(100%) invert(92%) sepia(88%) saturate(2585%) hue-rotate(100deg) brightness(94%) contrast(99%);
      transform: scale(1.4);
    }
    margin-right: 3%;
    gap: 20%;
  }
`;

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

/**
 * Filter css to color svg 
 *#ffffff : brightness(0) saturate(100%) invert(99%) sepia(12%) saturate(3%) hue-rotate(187deg) brightness(114%) contrast(100%);
  #ffdd00 : brightness(0) saturate(100%) invert(92%) sepia(17%) saturate(6605%) hue-rotate(359deg) brightness(103%) contrast(104%);
  #606060 : brightness(0) saturate(100%) invert(37%) sepia(4%) saturate(30%) hue-rotate(315deg) brightness(89%) contrast(74%);
  #02efee : brightness(0) saturate(100%) invert(92%) sepia(88%) saturate(2585%) hue-rotate(100deg) brightness(94%) contrast(99%);
 */