import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  display: block;
  height: auto;
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
`;

export const AnyWhereText = styled.p`
  font-size: 25px;
  margin-top: 0px;
`;

export const FormHeading = styled.h1`
  font-size: 22px;
  font-weight: 400;
`;

export const Label = styled.label`
  top: ${(props) => (props.focussed || props.hasValue ? "-20px" : "20px")};
  left: 0;
  transform: translateY(
    ${(props) => (props.focussed || props.hasValue ? "0" : "-50%")}
  );
  font-size: ${(props) => (props.focussed || props.hasValue ? "12px" : "24px")};
  color: ${(props) => (props.focussed || props.hasValue ? "#999" : "#fff")};
  transition: all 0.3s ease;
  pointer-events: none;
  font-size: 20px;
  color: #ffffff;
  position: absolute;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  background-color: transparent;
  color: #fff;
`;

export const EmailContainer = styled.div`
  border: 1px solid #f2f4f4;
  padding: 5px;
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContiaer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
