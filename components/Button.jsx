import React from "react";
import styled from "styled-components";

const Styledutton = styled.button`
  display: grid;
  grid-template-columns: ${props => props.icon? "2fr 4fr 1fr" : "1fr"};
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 45px;
  width: 210px;
  padding: 8px 6px;
  margin: 8px 8px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.textColor || "white"};
  box-shadow: rgba(111, 111, 111, 0.35) 0px 5px 15px;
  background-color:  ${props => props.bgColor || "#3275e0"};
  &:hover {
    transition: all 0.3s linear;
    box-shadow: rgba(255, 255, 255, 0.1) 5px 5px 15px 5px;
  }
  &:active{
    transition: all 0.2s ease-in;
    box-shadow: none;
    transform: scale(0.98);
  }
  img {
    width: 60%;
  }
`;

export default function Button({ icon, text, textColor, bgColor }) {
  return (
    <Styledutton icon={icon} textColor={textColor} bgColor={bgColor}>
      {icon ? <img src={icon} /> : null}
      {text}
    </Styledutton>
  );
}
