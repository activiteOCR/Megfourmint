import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DrawAppBar from "../components/DrawAppBar";
import ReCAPTCHA from "react-google-recaptcha";
import twitter from "../public/images/twitter.png";
import discord from "../public/images/discord.png";
import bgImage from "../public/images/background.jpg";
// import metamask from "../../assets/images/metamask.png";
import pill from "../public/images/pilule.gif";
import usdt from "../public/images/usdt.gif";
// import ledger_prize from "../../assets/images/ledger_color.png";
// import ledger from "../../assets/images/ledger.gif";
// import checkIcon from "../public/images/checked.svg";
// import failIcon from "../public/images/fail.svg";
// import logo from "../public/images/logo.png";
import Customsnackbar from "../components/Customsnackbar";
import Image from 'next/image';

const MAX_WIDTH = 1000;
const tab = [
  "a&&&",
  "bdsds",
  "cdsds",
  "ddsds",
  "dsdse",
  "dsdsf",
  "gdsds",
  "dsdsh",
  "dsdsi",
  "dsdsj",
];

export default function Giveaway() {
  const [userData, setUserData] = useState({
    twitter: null,
    discord: null,
    //wallet: null,
  });
  const [twitterVerified, setTwitterVerified] = useState(false); //discord verification
  const [discordVerified, setDiscordVerified] = useState(false); //discord verification
  //   const [walletVerified, setWalletVerified] = useState(false); //discord verification
  const [captchaVerified, setCaptchaVerified] = useState(false); //captcha verification
  const discordInputRef = useRef(null);
  const twitterInputRef = useRef(null);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(false);
  const [iconSeverity, setIconSeverity] = useState(false);

  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    let interval;
    let count = 0;
    if (running) {
      interval = setInterval(() => {
        count++;
        console.log(count);
        setTime(tab[getRandom(10)]);
      }, 300);
    } else if (!running) {
      count = 0;
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const joinDiscord = () => {
    window.open("https://discord.gg/BHhjs4AY7x");
  };
  const verifyDiscord = () => {
    console.log(discordInputRef.current.value);
    axios
      .get(
        `https://hgc-back-end-dev.herokuapp.com/api/disc/${discordInputRef.current.value
          // `http://localhost:1314/api/disc/${discordInputRef.current.value
          .replaceAll(" ", "%20")
          .replaceAll("#", "%23")}`
      )
      .then((response) => {
        console.log("data : ", response.data.user);
        setDiscordVerified((prev) => response.data.user);
        if (response.data.user === true) {
          setUserData((previousState) => ({
            ...previousState,
            discord: discordInputRef.current.value,
          }));
        } else handleSnackBar("Join our discord and retry.", true);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const captchaHandler = (value) => {
    // console.log(value);
    setCaptchaVerified((prev) => true);
  };
  const follow = () => {
    window.open("https://twitter.com/Meg4mint");
  };
  const verifyTwitter = () => {
    console.log(
      twitterInputRef.current.value
        .replaceAll(" ", "%20")
        .replaceAll("#", "%23")
        .replaceAll("@", "")
    );

    axios
      .get(
        // `https://hgc-back-end.herokuapp.com/api/user/${twitterInputRef.current.value
        `https://hgc-back-end-dev.herokuapp.com/api/twit/${twitterInputRef.current.value
          // `http://localhost:1314/api/twit/${twitterInputRef.current.value

          .replaceAll(" ", "%20")
          .replaceAll("#", "%23")
          .replaceAll("@", "")}`
      )
      .then((response) => {
        console.log("data : ", response.data.user);
        setTwitterVerified((prev) => response.data.user);
        if (response.data.user === true) {
          setUserData((previousState) => ({
            ...previousState,
            twitter: twitterInputRef.current.value
              .replaceAll(" ", "%20")
              .replaceAll("#", "%23")
              .replaceAll("@", ""),
          }));
        } else handleSnackBar("Follow us on twitter and retry.", true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //   const connectMetamask = () => {
  //     if (window.ethereum) {
  //       window.ethereum
  //         .request({ method: "eth_requestAccounts" })
  //         .then((result) => {
  //           console.log("result", result);
  //           setWalletVerified((prev) => true);
  //           setUserData((previousState) => ({
  //             ...previousState,
  //             wallet: result[0],
  //           }));
  //         })
  //         .catch((err) => {
  //           console.error("error", err);
  //         });
  //     } else handleSnackBar("Please install metamask", true);  
  //   };
  const participate = () => {
    // console.log("twitter ", userData.twitter);
    // console.log("discord ", userData.discord);
    // console.log("wallet ", userData.wallet);
    console.log("userData1:", userData.twitter);

    if (
      twitterVerified &&
      discordVerified &&
      //walletVerified &&
      captchaVerified
    ) {
      // axios.post("https://hgc-back-end-dev.herokuapp.com/api/participate", userData, {
      // axios
      //   .post("http://localhost:1314/api/participate", userData, {
      axios
        .post(
          "https://hgc-back-end-dev.herokuapp.com/api/participate",
          userData,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        )
        .then(() => {
          handleSnackBar("Participation confirmed, you have a message on discord Meg4mint-giveaway", false);
        })
        .catch(handleSnackBar("You have already participated.", true));
      // post req to server : userData object
      /*
        Notify user on discord
        mongoDB simple database
      */
    }
  };
  const handleSnackBar = (_message, _iconSeverity) => {
    setOpen(true);
    setMessage(prev => _message)
    setIconSeverity(prev => _iconSeverity)
  };

  return (
    <Wrapper>
      {/* <DrawAppBar /> */}
      <Content>
        {/* <img src={logo} alt="logo" className="logo" /> */}
        {/* <Image
              className="logo"
              src={logo} // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={50} // Desired size with correct aspect ratio
              alt="logo"
            /> */}
        <Header>
          <h1>
            GIVEAWAY : Crypto spots, 100 USDT to earn
            <p> Raffle date to be defined (GMT+2)</p>
          </h1>
          {/* <img src={ledger} alt="ledger" /> */}
          {/* <img src={pill} alt="pill" className="pill" /> */}
          <Image
            className="pill"
            src={usdt} // Route of the image file
            height={100} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            alt="usdt"
          />
        </Header>
        <Main>
          <StepContainer area="main-step1">
            <StepNumber>01</StepNumber>
            <StepDescription>
              FOLLOW
              <br />
              MEG4MINT
              <br />
              ON TWITTER
            </StepDescription>
            <StepVerification>
              <p>Your twitter handle :</p>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="@User"
                  ref={twitterInputRef}
                />
                {/* <img onClick={follow} src={twitter} alt="twitter" /> */}
                <Image
                  onClick={follow}
                  src={twitter} // Route of the image file
                  height={35}
                  width={35}
                  alt="twitter"
                />
              </div>
            </StepVerification>
            <StepButton>
              <button onClick={verifyTwitter}>
                <p>Verify</p>
                {/* <img src={twitter} alt="twitter icon" /> */}
                <Image
                  src={twitter} // Route of the image file
                  height={35}
                  width={35}
                  alt="twitter"
                />
              </button>
              {twitterVerified ? (
                // <img src={checkIcon} alt="verified" />
                <Image
                  src="/images/checked.svg"
                  height={25}
                  width={25}
                  alt="verified"
                />
              ) : (
                // <img src={failIcon} alt="not verified" />
                <Image
                  src="/images/fail.svg"
                  height={25}
                  width={25}
                  alt="not verified"
                />
              )}
            </StepButton>
          </StepContainer>
          <StepContainer area="main-step2">
            <StepNumber>02</StepNumber>
            <StepDescription>
              JOIN
              <br />
              US
              <br />
              ON DISCORD
            </StepDescription>
            <StepVerification>
              <p>Your discord tag :</p>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Member#3023"
                  ref={discordInputRef}
                />
                {/* <img onClick={joinDiscord} src={discord} alt="twitter" /> */}
                <Image
                  onClick={joinDiscord}
                  src={discord}
                  height={35}
                  width={35}
                  alt="discord icon"
                />
              </div>
            </StepVerification>
            <StepButton>
              <button onClick={verifyDiscord}>
                <p>Verify</p>
                {/* <img src={discord} alt="discord icon" /> */}
                <Image
                  src={discord}
                  height={35}
                  width={35}
                  alt="discord icon"
                />
              </button>
              {discordVerified ? (
                // <img src={checkIcon} alt="twitter" />
                <Image
                  src="/images/checked.svg"
                  height={25}
                  width={25}
                  alt="twitter"
                />
              ) : (
                // <img src={failIcon} alt="twitter" />
                <Image
                  src="/images/fail.svg"
                  height={25}
                  width={25}
                  alt="twitter"
                />
              )}
            </StepButton>
          </StepContainer>{" "}
          <StepContainer area="main-step3">
            <StepNumber>03</StepNumber>
            <StepDescription>
              I AM
              <br />A 8-BIT ROBOT
              <br />
              AND NOT A BASIC ROBOT
            </StepDescription>

            <StepButton>
              <ReCAPTCHA
                // style={{maxWidth:"200px"}}
                size="compact"
                theme="dark"
                sitekey="6LeDH4AgAAAAALJWi7YuapMiDcK8IgedGZs6kIay"
                onChange={captchaHandler}
              />
            </StepButton>
          </StepContainer>
          <HorizontalSeparator />
          <button
            className="btn-participate"
            disabled={
              !twitterVerified || !discordVerified || !captchaVerified
            }
            onClick={participate}
          >
            Participate
          </button>
        </Main>
        <Prize>
          <p>
            ✨ CRYPTO OFFER! 👉 55 USDT for the first - 30 USDT for the second & 15 USDT for the third!<br></br><br></br>
            ⭐⭐⭐ Raffle via smartcontract and true random number ⭐⭐⭐
          </p>
          {/* <img src={ledger_prize} alt="ledger" /> */}
        </Prize>
        <Customsnackbar open={open} setOpen={setOpen} message={message} iconSeverity={iconSeverity} />
        {/* <Image
              className="logo"
              src={logo} // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={50} // Desired size with correct aspect ratio
              alt="logo"
            /> */}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  height: 100%;
  width: 100%;
  background-image: url("/images/fond.png");
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center; 
  /* margin: 100px auto; */
  /* margin: 0 auto; */
  /* background-color: #10100f; */
  /* background-image: url(${bgImage});
  background-size:     cover;                  
  background-repeat:   no-repeat;
  background-position: center center; */
  /* overflow: scroll; */
  .logo {
    width: clamp(6.25rem, 2.679rem + 7.44vw, 9.375rem);
  }
  @media (max-width: ${MAX_WIDTH}px) {
    align-items: center;
    /* width: max-content; */
  }
`;
const Content = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  align-self: center;
  width: 100%;
  gap: 8px;
  padding: 0.8% 0%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1% 4%;
  /* background-color: #1d1d1bd7; */
  background: linear-gradient(#07001F,#070047);
  h1 {
    font-family: "NES Controller";
    font-size: clamp(2.1875rem, -0.313rem + 5.208vw, 4.375rem);
    color: white;
    text-align: center;
    p {
      font-family: "GT America";
      color: white;
      font-size: clamp(1.1875rem, -0.313rem + 5.208vw, 1.375rem);
    }
  }
  img {
    object-fit: contain;
    width: clamp(5rem, 2.143rem + 5.952vw, 7.5rem);
  }
  @media (max-width: ${MAX_WIDTH}px) {
    h1 {
      font-size: clamp(1.5875rem, -0.313rem + 5.208vw, 1.375rem);
    }
    p {
      font-size: clamp(1.5875rem, -0.313rem + 5.208vw, 1.375rem);
    }
  }
`;
const Main = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    "main-step1 main-step2 main-step3 main-step4 "
    "horizontal-bar horizontal-bar horizontal-bar horizontal-bar"
    "participate-button participate-button participate-button participate-button";
  grid-gap: 2% 1%;
  border: 1px solid #02efee;
  width: 100%;
  height: 100%;
  padding: 1% 2%;
  background-color: #1d1d1bd7;
  .btn-participate {
    grid-area: participate-button;
    font-family: "NES Controller";
    font-weight: 800;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    width: 170px;
    max-height: 45px;
    min-height: 40px;
    grid-column: 1/5;
    justify-self: center;
    align-self: center;
    background-color: #02efee;
    color: black;
    margin-bottom: 1%;
    &:disabled {
      color: #000000ae;
      background-color: #ffffff;
      &:hover {
        background-color: #02efee;
      }
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.02);
      background-color: #02efee;
    }
  }
  @media (max-width: ${MAX_WIDTH}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding-left: 5%;
    grid-template-areas:
      "main-step1"
      "main-step2"
      "main-step3"
      /* "main-step4" */
      "horizontal-bar"
      "participate-button";
    align-items: center;
  }
`;
const StepContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  grid-area: ${(props) => props.area};
  display: grid;
  min-height: max-content;
  grid-template-rows: max-content 1fr max-content max-content;
  grid-template-areas:
    "step-number"
    "step-description"
    "step-verify"
    "step-button";
  padding-bottom: 10px;
  @media (max-width: ${MAX_WIDTH}px) {
    grid-template-rows: max-content 1fr max-content;
    grid-template-columns: max-content 1fr;
    grid-template-areas:
      "step-number step-description"
      "step-number step-verify"
      "step-number step-button";
    grid-gap: 0% 3%;
  }
`;
const StepNumber = styled.h1`
  grid-area: step-number;
  font-family: "NES Controller";
  /* vertical-align: text-top; */
  color: #02efee;
  font-size: clamp(2.5rem, 1.786rem + 1.488vw, 3.125rem);
  @media (max-width: ${MAX_WIDTH}px) {
    font-size: clamp(2.7rem, 1.786rem + 1.488vw, 3.125rem);
    line-height: 0.7;
  }
`;
const StepButton = styled.div`
  grid-area: step-button;
  display: flex;
  flex-direction: row;
  gap: 2%;
  padding-top: 4%;
  button {
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: max-content;
    max-width: 180px;
    width: 80%;
    height: 40px;
    padding: 1% 3%;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    color: black;
    transition: transform 0.3s ease-in-out;
    img {
      filter: brightness(100%) saturate(0%) invert(0%) sepia(0%) saturate(0%)
        hue-rotate(187deg) brightness(0%) contrast(100%);
      object-fit: contain;
      width: 25px;
    }
    p {
      font-family: "Arial";
      font-weight: 800;
      font-size: clamp(0.8125rem, 0.67rem + 0.298vw, 0.9375rem);
    }
    &:hover {
      background-color: #02efee;
      transform: scale(1.02);
      cursor: pointer;
    }
    &:active {
      transform: scale(1.05);
    }
  }
  img {
    transition: transform 0.3s ease-in-out;
    object-fit: contain;
    width: 20px;
  }
`;
const StepDescription = styled.h2`
  grid-area: step-description;
  padding-bottom: 5%;
  font-family: "GT America";
  font-size: clamp(0.9375rem, 0.58rem + 0.744vw, 1.25rem);
  letter-spacing: 8px;
  color: white;
`;
const StepVerification = styled.div`
  grid-area: step-verify;
  height: max-content;
  align-self: end;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  font-family: "GT America";
  p {
    font-size: 18px;
  }
  .input-container {
    display: flex;
    flex-direction: row;
    gap: 2%;
    align-items: center;
    input {
      font-size: 15px;
      outline: none;
      border: none;
      border-bottom: 2px solid #02efee;
      background-color: #292927e1;
      width: 60%;
      /* height: 80%; */
      padding: 2%;
      color: #02efee;
    }
    img {
      object-fit: contain;
      width: 25px;
      transition: transform 0.1s ease-in;
      filter: brightness(0) saturate(100%) invert(92%) sepia(88%) saturate(2585%) hue-rotate(100deg) brightness(94%) contrast(99%);
    }
    img:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
    img:active {
      transform: scale(1.3);
    }
  }
`;
const HorizontalSeparator = styled.div`
  grid-area: horizontal-bar;
  grid-column: 1/5;
  justify-self: center;
  height: 2px;
  width: 80%;
  background-color: #02efee;
  margin: 0.5% 0%;
`;
const Prize = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  /* background-color: #1d1d1bd7; */
  background: linear-gradient(#07001F,#070047);
  padding: 18px 3%;
  width: 100%;
  height: max-content;
  gap: 2%;
  img {
    object-fit: contain;
    width: max(15%, 200px);
    height: auto;
  }
  p {
    font-family: "GT America";
    font-size: 20px; //last -15%
  }
  @media (max-width: ${MAX_WIDTH}px) {
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 4% 8%;
    gap: 10px;
    p {
    font-size: 20px; //last -15%
  }
  }
`;
