import Home from "../components/Home";
import Eigthbit from "../components/Eigthbit";
import Scarcity from "../components/Scarcity";
import { Element } from 'react-scroll'
import Team from "../components/Team";
import TheFaq from "../components/TheFaq";
import Footer from "../components/Footer";
import DrawAppBar from "../components/DrawAppBar";

// export async function getServerSideProps(context) {
//   const UA = context.req.headers['user-agent'];
//   const isMobile = Boolean(UA.match(
//     /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//   ))
//   return {
//     props: {
//       deviceType: isMobile ? 'mobile' : 'desktop'
//     }
//   }
// }

// export async function getServerSideProps(context) {
//   return {
//     props: { message: `Next.js is awesome` }, // will be passed to the page component as props
//   }
// }

const HomePage = () => {
  
  // const {data} = props.message;
  // console.log(data);

    return (
    <>
      <DrawAppBar />
      {/* <Element id='Home' name='Home'>
        <Home />
      </Element> */}
      {/* <Element id='8-BIT' name='8-BIT'>
        <Eigthbit/>
      </Element> */}
      {/* <Element id='SCARCITY' name='SCARCITY'>
        <Scarcity/>
      </Element> */}
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
