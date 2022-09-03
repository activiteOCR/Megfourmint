// import styled from "styled-components";
import Home from "../components/Home";
import Hyenazation from "../components/Hyenazation";
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
      <Element id='Rocket' name='Rocket'>
        <Hyenazation />
      </Element>
      {/* <Element id='Roadmap' name='Roadmap'>
        <Roadmap />
      </Element> */}
      <Element id='Team' name='Team'>
        <Team />
      </Element>
      <Element id='Faq' name='Faq'>
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