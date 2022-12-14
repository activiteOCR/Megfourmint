import React from "react";
import { useState, useEffect, useContext, createContext } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
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
      <h1>
        <u>
          <span className="h1color">8</span>-
          <span className="h1color">BIT</span>
        </u>
      </h1>
      <h2>
        <br></br> A robot may not harm a human being or, remaining passive,
        allow a human being to be exposed to danger.<br></br>
        <br></br>
        2. A robot must obey the orders given to it by a human being, unless
        such orders conflict with the First Law.<br></br>
        <br></br>
        3. A robot must protect its existence so long as such protection does
        not conflict with the First or Second Law.<br></br>
        <br></br>
        4. Any robot has the right to reproduce itself, as long as this does not
        contradict the first, second or third law of robotics.<br></br>
      </h2>
      <h3>IA - JWC - HH</h3>
    </div>
    <Box
      component="img"
      sx={{
        // height: 300,
        // width: 300,
        maxHeight: { xs: 200, md: 300 },
        maxWidth: { xs: 200, md: 300 },
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "40px",
        marginBottom: "40px",
      }}
      alt="mega"
      src="/images/mega.gif"
    />
  </ContentMob>
);
const DesktopComponent = ({ classes }) => (
  <Box>
    <Content>
      <div>
        <div className="titre">
          <Image
            src="/images/Image1.png" // Route of the image file
            height={252} // Desired size with correct aspect ratio
            width={789} // Desired size with correct aspect ratio
            alt="titre"
          />
        </div>
        <h1>
          <u>
            <span className="h1color">8</span>-
            <span className="h1color">BIT</span>
          </u>
        </h1>
        <h2>
          <br></br> 1. A robot may not harm a human being or, remaining passive,
          allow a human being to be exposed to danger.<br></br>
          <br></br>
          2. A robot must obey the orders given to it by a human being, unless
          such orders conflict with the First Law.<br></br>
          <br></br>
          3. A robot must protect its existence so long as such protection does
          not conflict with the First or Second Law.<br></br>
          <br></br>
          4. Any robot has the right to reproduce itself, as long as this does
          not contradict the first, second or third law of robotics.<br></br>
          <br></br>
        </h2>
        <h3>IA - JWC - HH</h3>
      </div>
      <Box
        component="img"
        sx={{
          maxHeight: { md: 300 },
          maxWidth: { md: 300 },
          marginTop: "325px",
          marginRight: "150px",
        }}
        alt="mega"
        src="/images/mega.gif"
      />
    </Content>
    <ImageList
      sx={{ width: 900, height: 304, marginLeft: "20%" }}
      cols={6}
      rowHeight={150}
    >
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
        </ImageListItem>
      ))}
    </ImageList>
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

export default function Eightbit() {
  const classes = useStyles();
  return (
    // <>
    <Wrapper>
      <Layouts Classes={classes} />
    </Wrapper>
    // </>
  );
}

const itemData = [
  {
    img: "/images/1.png",
    title: "Breakfast",
  },
  {
    img: "/images/2.png",
    title: "Burger",
  },
  {
    img: "/images/3.png",
    title: "Camera",
  },
  {
    img: "/images/4.png",
    title: "Coffee",
  },
  {
    img: "/images/5.png",
    title: "Hats",
  },
  {
    img: "/images/6.png",
    title: "Honey",
  },
  {
    img: "/images/7.png",
    title: "Basketball",
  },
  {
    img: "/images/8.png",
    title: "Fern",
  },
  {
    img: "/images/9.png",
    title: "Mushrooms",
  },
  {
    img: "/images/10.png",
    title: "Tomato basil",
  },
  {
    img: "/images/11.png",
    title: "Sea star",
  },
  {
    img: "/images/12.png",
    title: "Bike",
  },
];

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("/images/fond.png");
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
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
  h2 {
    text-align: justify;
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
  h2 {
    font-family: "Bebas Regular";
    font-size: calc(1rem + 0.8vw);
    color: rgb(255, 255, 255);
    text-align: justify;
    margin-left: initial;
    margin-right: initial;
    padding: 10%;
    padding-top: 0%;
  }
  u {
    text-decoration: underline;
    text-decoration-color: #02efee;
    text-decoration-thickness: 2px;
    text-underline-offset: 1rem;
  }
`;
