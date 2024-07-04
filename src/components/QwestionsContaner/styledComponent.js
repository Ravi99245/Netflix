import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 50vh;
  width: 100%;
  padding: 4.5rem 0;
  background: rgb(0, 0, 0);
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const DetailsContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    margin: 0 1%.5;
  }
`;

export const ListContainer = styled.div`
  margin: 1.5rem 0 0;
  width: 100%;
`;

export const UnOrderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
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
  font-size: 1.5rem;
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
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 5px;
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
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const GetButton = styled.button`
  font-size: 0.9rem;
  font-weight: 500;
  min-height: 45px;
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
