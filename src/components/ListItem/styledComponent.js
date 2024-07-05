import styled, { keyframes } from "styled-components";

import { IoAdd, IoClose } from "react-icons/io5";

export const Item = styled.li`
  width: 100%;
  margin: 0 0 0.5rem 0;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  background-color: ${(props) =>
    props.$isFocused ? `rgb(65,65,65)` : `rgb(45,45,45)`};
  transition: background-color 0.1s ease;
  width: 100%;
  border: none;
  color: #fff;
  height: 5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgb(65, 65, 65); /* Change background on hover */
  }
`;

export const SpanElement = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const slideDown = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 500px;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    max-height: 500px;
    opacity: 1;
  }
  100% {
    max-height: 0;
    opacity: 0;
  }
`;

export const AnswerContainer = styled.div`
  background-color: rgb(45, 45, 45);
  margin-top: 5px;
  padding: 1rem;
  overflow: hidden; /* Hide content initially */
  max-height: 0px;
  animation: ${(props) => (props.showAnswer ? slideDown : slideUp)} 0.9s ease
    forwards;
`;

export const Answer = styled.span`
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Plus = styled(IoAdd)`
  width: 36px;
  height: 36px;
  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Close = styled(IoClose)`
  width: 36px;
  height: 36px;
  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
