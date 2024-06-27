import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
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
    rgba(0, 0, 0, 0.1) 50%,
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
`;

export const BackgroundImage = styled.img`
  width: 100%;
  display: block;
  height: auto;
`;
