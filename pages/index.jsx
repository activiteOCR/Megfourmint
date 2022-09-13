import Home from "../components/Home";
import Eightbit from "../components/Eightbit";
import Scarcity from "../components/Scarcity";
import { Element } from 'react-scroll'
import Team from "../components/Team";
import TheFaq from "../components/TheFaq";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
    <>
      <Element id='Home' name='Home'>
        <Home />
      </Element>
      <Element id='8-BIT' name='8-BIT'>
        <Eightbit/>
      </Element>
      <Element id='SCARCITY' name='SCARCITY'>
        <Scarcity/>
      </Element>
      <Element id='LAB' name='LAB'>
        <Team />
      </Element>
      <Element id='FAQ' name='FAQ'>
        <TheFaq />
      </Element>
      <Footer />
    </>
    );
  };
export default HomePage;