import styled from "styled-components";

import { IoLanguage } from "react-icons/io5";

export const NavElement = styled.nav`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 10px 20px 10px;
`;

export const NetFlixLogo = styled.img`
  width: 190px;
  @media screen and (max-width: 768px) {
    width: 6.5625rem;
  }
`;

export const LanguageIcon = styled(IoLanguage)`
  font-size: 16px;
`;

export const LanguageSelectContainer = styled.div`
  min-height: 1rem;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 6px 3px 6px;
  border: 1px solid #f0eef0;
  border-radius: 4px;
  background: transperent;
  margin-right: 20px;
`;

export const SelectElement = styled.select`
  appearance: none; /* Removes default appearance */
  -webkit-appearance: none; /* For Safari */
  -moz-appearance: none; /* For Firefox */
  padding: 3px;
  width: auto;
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-weight: 500;
  @media (max-width: 767px) {
    option[value="English"] {
      display: none; /* Hide English option on smaller screens */
    }
  }
`;

export const OptionElement = styled.option`
  background-color: transparent;
  color: black;
`;

export const SignInButton = styled.a`
  text-decoration: none;
  background: #e5330c;
  color: rgb(255, 255, 255);
  padding: 0.25rem 1rem;
  border-radius: 4px;
  display: inline;
  font-size: 0.875rem;
  font-weight: 500;
  min-height: 2.2rem;
  cursor: pointer;
  position: relative;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
`;

export const AnchorButtonContianer = styled.div`
  width: auto;
`;
