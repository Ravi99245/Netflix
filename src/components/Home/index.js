import Header from "../Header/index";

import {
  MainContainer,
  HeaderContainer,
  TopContianer,
  BackgroundImage,
} from "./styledComponent";

const Home = () => {
  return (
    <MainContainer>
      <TopContianer>
        <BackgroundImage
          src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1719487647/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small_viysb6.jpg"
          alt="cinima"
        />
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      </TopContianer>
    </MainContainer>
  );
};

export default Home;
