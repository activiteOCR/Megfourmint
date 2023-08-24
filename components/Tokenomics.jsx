import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

let theme = createTheme({
  palette: {
    primary: {
      main: "#07001F",
    },
  },
});

const useStyles = makeStyles({
  titre: {
    [theme.breakpoints.down("lg")]: {
      marginRight: 100,
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
    if (!isSSR) {
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
};

const MobileComponent = ({ classes }) => (
  <ContentMob>
    <div>
      <h1><u><span className="h1color">Tokenomics</span></u></h1>
    </div>
    <Box
      component="img"
      sx={{
        maxHeight: { xs: 500, md: 1400 },
        maxWidth: { xs: 500, md: 1400 },
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "40px",
        marginBottom: "40px",
      }}
      alt="mega"
      src="/images/Tokenomics_mod.png"
    />
  </ContentMob>
);
const DesktopComponent = ({ classes }) => (
  <Box>
    <Content>
      <Box>
        <h1><u><span className="h1color">Tokenomics</span></u></h1>
      </Box>
    </Content>
    <div className="titre">
          <Image
            src="/images/Tokenomics.png" // Route of the image file
            height={1389} // Desired size with correct aspect ratio
            width={2755} // Desired size with correct aspect ratio
            alt="titre"
          />
    </div>
  </Box>
);
const Layouts = ({ Classes }) => {
  const { width } = useWindowSize();
  const breakpoint = 1200;

  return width < breakpoint ? (
    <MobileComponent classes={Classes} />
  ) : (
    <DesktopComponent classes={Classes} />
  );
};

export default function Tokenomics() {
  const classes = useStyles();
  return (
    // <>
    <Wrapper>
      <Layouts Classes={classes} />
    </Wrapper>
    // </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(#070047,#07001F);
`;
const Content = styled.div`
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
  u {
    text-decoration: underline;
    text-decoration-color: #02efee;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem;
  }
  .titre {
    margin-left: 10%;
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
  u {
    text-decoration: underline;
    text-decoration-color: #02efee;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem;
  }
`;
