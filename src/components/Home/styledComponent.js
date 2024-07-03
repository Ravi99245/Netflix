import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 98vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  unicode-bidi: isolate;
  flex-wrap: wrap;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1.8) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 1.5) 100%
  );
  opacity: 1;
  color: white;
  transition: opacity 0.3s;
`;

export const TopContianer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    min-height: 60vh;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  display: block;
  height: 100vh;
`;

export const HeadingContainer = styled.div`
  position: absolute;
  display: inline-block;
  width: 88%;
  height: 100%;
  color: white;
  margin: auto;
  margin-top: 20rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    height: 40%;
    margin-top: 2rem;
  }
`;

export const Heading = styled.h1`
  font-size: 50px;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const AnyWhereText = styled.p`
  font-size: 25px;
  margin-top: 0px;
  @media screen and (max-width: 768px) {
    margin: 1rem 0 0;
    font-size: 1.125rem;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const FormHeading = styled.h1`
  font-size: 22px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 1rem;
  color: #aaa;
  transition: all 0.2s ease;
  line-height: 1.5;
  transition-duration: 250ms;
  pointer-events: none;
  transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);

  ${(props) =>
    props.focused &&
    css`
      top: 25%;
      left: 13px;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.7);
    `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  background-color: transparent;
  color: #fff;
  line-height: 1.4;
  width: 100%;
  font-weight: 400;
`;

export const EmailContainer = styled.div`
  border: 0.5px solid #f2f4f4;
  padding: 5px;
  position: relative;
  width: 332px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 3px;
  @media screen and (max-width: 768px) {
    margin-top: 19px;
    width: 300px;
    align-itmes: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 330px;
  }
`;

export const FormContiaer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GetStartedContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: cneter;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GetButton = styled.button`
  font-size: 0.9rem;
  font-weight: 500;
  min-height: 30px;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  background: rgb(229, 9, 20);
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  fill: currentcolor;
  position: relative;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  height: auto;
  width: auto;
  padding-left: 6px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
`;

export const SecondContainer = styled.div`
  width: 98vw;
  height: 50vh;
  padding: 4.5rem 0;
  background-color: #000000;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 3.5rem 0;
  }
`;

export const DetailsContainer = styled.div`
  width: auto;
  height: 100%;
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    margin: 0 1.5rem;
  }
`;

export const TvImage = styled.img`
  width: 70%;
  display: block;
  height: auto;
  z-index: 2;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const EnjoyTvContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 50%;
  height: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Video = styled.video`
  z-index: 1;
  position: absolute;
  top: -18%; /* Adjust based on the TV screen area */
  left: 15%; /* Adjust based on the TV screen area */
  width: 70%; /* Adjust based on the TV screen area */
  height: 130%; /* Adjust based on the TV screen area */
  display: inline-block;
  vertical-align: baseline;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 83%;
    top: 5%;
    left: 18%;
  }
  @media screen and (min-width: 1440px) {
    height: 115%;
    top: -11.5%;
    left: 25%;
  }
`;
