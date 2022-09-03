// import styled from "styled-components";
import Home from "../components/Home";
import Eightbit from "../components/eightbit";
import { Element } from 'react-scroll'
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import TheFaq from "../components/TheFaq";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
    // <Container>
    <>
      <Element id='Home' name='Home'>
        <Home />
      </Element>
      <Element id='8-BIT' name='8-BIT'>
        <Eightbit/>
      </Element>
      {/* <Element id='Roadmap' name='Roadmap'>
        <Roadmap />
      </Element> */}
      <Element id='LAB' name='LAB'>
        <Team />
      </Element>
      <Element id='FAQ' name='FAQ'>
        <TheFaq />
      </Element>
      <Footer />
    </>
    // </Container>
    );
  };
// const Container = styled.div`
//   flex: 1;
//   color: white;
//   background-color: black;
//   justify-content: center;
// `;
export default HomePage;