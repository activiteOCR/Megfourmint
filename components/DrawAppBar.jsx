import * as React from 'react';
import { useState } from "react"
import styled from "styled-components";
import PropTypes from 'prop-types';
import Discord from "../public/images/discord.svg";
import Twitter from "../public/images/twitter.svg";
import Instagram from "../public/images/instagram.svg";
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

import { Link } from "react-scroll";

const drawerWidth = 200;
const navItems = ['8-BIT', 'LAB', 'FAQ' ];

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
      main: '#00000080',
    },
  },
});

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 40,
    // marginRight: 250,
    justifyContent: 'flex-end',
    "& .MuiAppBar-root": {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  hide: {
    [theme.breakpoints.down('lg')]: {
      display: 'none',
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
        HGC
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
        <ListItem key='Giveaway' disablePadding>
          <ListItemButton target="_blank" href="/giveaway" sx={{ flexDirection: 'column' }}>
            <ListItemText  primary='Giveaway' />
          </ListItemButton>
        </ListItem>
        <ListItem key='Mint' disablePadding>
          <ListItemButton target="_blank" href="/mint" sx={{ flexDirection: 'column' }}>
            <ListItemText  primary='Mint' />
          </ListItemButton>
        </ListItem>
        <SocialDrawer >
          <IconButton size="large"  color="inherit" target="_blank" href="https://discord.gg/BHhjs4AY7x">
            <Discord className="icon" />
          </IconButton>
          <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/Meg4mint">
            <Twitter className="icon" />
          </IconButton>
          {/* <IconButton size="large" color="inherit" target="_blank" href="https://www.instagram.com/hyena_gangsta_club/">
              <Instagram className="icon" />
          </IconButton> */}
        </SocialDrawer>
      </List> 
    </Box>
  );
 
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className={classes.root}  sx={{ display: 'flex' }}>
      {/* <Box 
        component="img"
        sx={{
          height: 70,
          width: 70,      
        }}
        alt="logo"
        src="/images/cryptoRocket.png"
      /> */}
      <AppBar component="nav" theme={theme} position="static" >
      <Box 
        component="img"
        sx={{
          height: 70,
          width: 70,    
        }}
        alt="logo"
        src="/images/cryptoRocket.png"
      />
        <Toolbar className={classes.root} id="back-to-top-anchor" >
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.hide} sx={{ m: 10, display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ m: 3, color: '#fff' }} style={{ fontFamily: 'NES Controller', fontSize: '25px' }}>
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
            <Button key='Giveaway' target="_blank" href="/giveaway" sx={{ m: 3, color: '#fff' }} style={{ fontFamily: 'NES Controller', fontSize: '25px' }}>
                 Giveaway
            </Button>
            <Button key='Mint' target="_blank" href="/mint" sx={{ m: 3, color: '#fff' }} style={{ fontFamily: 'NES Controller', fontSize: '25px' }}>
                 Mint
            </Button>
          </Box>
          <Box className={classes.hide} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Social >
              <IconButton size="large"  color="inherit" target="_blank" href="https://discord.gg/BHhjs4AY7x">
                <Discord className="icon" />
              </IconButton>
              <IconButton size="large" color="inherit" target="_blank" href="https://twitter.com/Meg4mint">
              <Twitter className="icon" />
              </IconButton>
              {/* <IconButton size="large" color="inherit" target="_blank" href="https://www.instagram.com/hyena_gangsta_club/">
                <Instagram className="icon" />
              </IconButton> */}
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
            display: { xs: 'block', lg: 'none' },
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
  gap: 12%;
  .icon {
    width: clamp(1.5rem, 0.536rem + 1.488vw, 1.9rem);
    filter: brightness(0) saturate(100%) invert(92%) sepia(88%) saturate(2585%) hue-rotate(100deg) brightness(94%) contrast(99%);
    transition: transform 0.1s ease-in;
  }
  .icon:hover {
    filter: brightness(0) saturate(100%) invert(92%) sepia(88%) saturate(2585%) hue-rotate(100deg) brightness(94%) contrast(99%);
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
    gap: 8%;
  }
`;
const SocialDrawer = styled.div`
  height: 100%;
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 12%;
  .icon {
    width: clamp(1.5rem, 0.536rem + 1.488vw, 1.9rem);
    filter: brightness(0) saturate(100%) invert(92%) sepia(88%) saturate(2585%) hue-rotate(100deg) brightness(94%) contrast(99%);
    transition: transform 0.1s ease-in;
  }
  .icon:hover {
    filter: brightness(0) saturate(100%) invert(92%) sepia(88%) saturate(2585%) hue-rotate(100deg) brightness(94%) contrast(99%);
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
    gap: 8%;
  }
`;

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
