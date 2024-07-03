import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  padding: 4.5rem 0;
  background: #000000;
  flex-wrap: wrap;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const DetailsContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  width: auto;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0px;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 50%;
  width: 90%;
`;

export const LadyImage = styled.img`
  width: 100%;
`;

export const LadyImageContainer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
`;

export const DownLoadContianer = styled.div`
  border: 2px solid rgba(128, 128, 128, 0.7);
  box-shadow: 0 0 2em 0 rgb(0, 0, 0);
  border-radius: 0.75rem;
  z-index: 1;
  align-items: center;
  width: 60%;
  min-width: 15rem;
  height: auto;
  display: flex;
  position: absolute;
  padding: 8px;
  background: rgb(0, 0, 0);
  transform: translate(25%, 140%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    transform: translate(25%, 130%);
  }
  @media screen and (min-width: 1440px) {
    transform: translate(45%, 140%);
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    transform: translate(20%, 110%);
  }
`;

export const StrangerHeight = styled.img`
  height: 3rem;
  @media screen and (min-width: 600px) {
    height: 4rem;
  }
  @media screen and (min-width: 960px) {
    height: 4.5rem;
  }
`;

export const StrangerContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0px 2px 0px 0px;
`;

export const TextContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 2px 0px;
  color: #fff;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const Download = styled.div`
  font-size: 0.75rem;
  color: #0071eb;
`;

export const DownloadImageContainer = styled.div`
  background: url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif")
    center center no-repeat;
  outline: 2px solid rgb(0, 0, 0);
  outline-offset: -2px;
  display: block;
  background-size: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  height: 10px;
  content: "";
  width: 3rem;
  height: 3rem;
`;

export const HeadingContainer = styled.div`
  color: #fff;
  flex-basis: 50%;
  width: 90%;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
