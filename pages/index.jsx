import Eigthbit from "../components/Eigthbit";
import Scarcity from "../components/Scarcity";
import { Element } from "react-scroll";
import Team from "../components/Team";
import TheFaq from "../components/TheFaq";
import Footer from "../components/Footer";
import DrawAppBar from "../components/DrawAppBar";
import Roadmap from "../components/Roadmap";
import Tokenomics from "../components/Tokenomics";

const HomePage = () => {
  return (
    <>
      <DrawAppBar />
      <Element id="8-BIT" name="8-BIT">
        <Eigthbit />
      </Element>
      <Element id="ROADMAP" name="ROADMAP">
        <Roadmap />
      </Element>
      <Element id="TOKENOMICS" name="TOKENOMICS">
        <Tokenomics />
      </Element>
      <Element id="SCARCITY" name="SCARCITY">
        <Scarcity />
      </Element>
      <Element id="LAB" name="LAB">
        <Team />
      </Element>
      <Element id="FAQ" name="FAQ">
        <TheFaq />
      </Element>
      <Footer />
    </>
  );
};
export default HomePage;
