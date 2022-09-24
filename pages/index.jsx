import Eigthbit from "../components/Eigthbit";
import Scarcity from "../components/Scarcity";
import { Element } from 'react-scroll'
import Team from "../components/Team";
import TheFaq from "../components/TheFaq";
import Footer from "../components/Footer";
import DrawAppBar from "../components/DrawAppBar";

const HomePage = () => {

    return (
    <>
      <DrawAppBar />
      <Element id='8-BIT' name='8-BIT'>
        <Eigthbit/>
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
