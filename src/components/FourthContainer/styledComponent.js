import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  padding: 4.5rem 0;
  background-color: rgb(0, 0, 0);
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 3.5rem 0;
  }
`;

export const Paragraph = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 1.125rem;
    text-align: center;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const DetailsContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 0px;
    margin: 0 1rem;
  }
`;

export const HeadingContainer = styled.div`
  flex-basis: 50%;
`;

export const ImageContainer = styled.div`
  flex-basis: 50%;
`;

export const TVImage = styled.img`
  width: 100%;
  display: block;
  z-index: 2;
`;

export const ImageVideoContainer = styled.div`
  width: 100%;
`;

export const RealtiveContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

export const VideoContainer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 63%;
  max-height: 47%;
  top: 8%;
  left: 18%;
  z-index: 1;
`;

export const Video = styled.video`
  display: inline-block;
  vertical-align: baseline;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 8%;
  left: 8%;
  z-index: 1;
`;
