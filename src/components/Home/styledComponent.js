import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 98vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  unicode-bidi: isolate;
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
  line-hieght: 1.5;
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
  aligen-items: center;
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
