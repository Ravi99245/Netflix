import styled from "styled-components";

import { IoLanguage } from "react-icons/io5";

export const Footer = styled.footer`
  width: 100%;
  min-height: 50vh;
  padding: 4.5rem 0;
  background: rgb(0, 0, 0);
  color: rgba(255, 255, 255, 0.7);
`;

export const Questions = styled.div`
  color: #fff;
`;

export const DetailsContainer = styled.div`
  margin: 0 2rem;
`;

export const UnOrderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const Anchor = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 400;
  &:hover {
    text-decoration: none; /* Underline on hover */
    font-size: 1.15rem;
  }
`;

export const ListItem = styled.li`
  width: 15rem;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    width: 11rem;
  }
`;

export const LanguageIcon = styled(IoLanguage)`
  font-size: 16px;
`;

export const LanguageSelectContainer = styled.div`
  width: 10%;
  min-height: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 6px 3px 6px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  background: transparent;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;

export const SelectElement = styled.select`
  width: auto;
  padding: 3px;
  width: auto;
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-weight: 500;
`;

export const OptionElement = styled.option`
  background-color: transparent;
  color: black;
`;

export const India = styled.div`
  margin-top: 1.5rem;
`;
