import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 4.5rem 0;
  min-height: 50vh;
  background: rgb(0, 0, 0);
  color: #fff;
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
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeadingContainer = styled.div`
  flex-basis: 50%;
`;

export const ImageContainer = styled.div`
  flex-basis: 50%;
`;

export const Image = styled.img`
  width: 100%;
`;
