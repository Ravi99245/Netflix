import { Component } from "react";

import { FaAngleRight } from "react-icons/fa6";

import Header from "../Header/index";
import Line from "../Line/index";
import ThirdContainer from "../ThirdContainer/index";
import FourthContainer from "../FourthContainer/index";
import KidsContainer from "../KidsContainer/index";
import QwestionsContaner from "../QwestionsContaner/index";

import {
  MainContainer,
  HeaderContainer,
  TopContianer,
  BackgroundImage,
  HeadingContainer,
  Heading,
  AnyWhereText,
  FormHeading,
  Label,
  EmailContainer,
  Form,
  FormContiaer,
  Input,
  GetStartedContainer,
  GetButton,
  ButtonContainer,
  SecondContainer,
  TvImage,
  DetailsContainer,
  EnjoyTvContainer,
  VideoContainer,
  Video,
} from "./styledComponent";

class Home extends Component {
  state = { email: "", focused: false };

  updateFocussedToTrue = () => {
    this.setState({ focused: true });
  };

  updateFocussedToFalse = () => {
    const { email } = this.state;
    this.setState({ focused: email !== "" });
  };

  updateEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { focused, email } = this.state;

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
          <HeadingContainer>
            <Heading>Unlimited Movies, TV shows and more</Heading>
            <AnyWhereText>Watch anywhere. Cancel anytime</AnyWhereText>
            <FormContiaer>
              <Form>
                <FormHeading>
                  Ready to Watch? Enter your email to create or restart your
                  membership.
                </FormHeading>
                <GetStartedContainer>
                  <EmailContainer>
                    <>
                      <Label htmlFor="email" focused={focused || email}>
                        Email address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        onChange={this.updateEmail}
                        onFocus={this.updateFocussedToTrue}
                        onBlur={this.updateFocussedToFalse}
                      />
                    </>
                  </EmailContainer>
                  <ButtonContainer>
                    <GetButton type="submit">
                      Get Started
                      <FaAngleRight />
                    </GetButton>
                  </ButtonContainer>
                </GetStartedContainer>
              </Form>
            </FormContiaer>
          </HeadingContainer>
        </TopContianer>
        <Line />
        <SecondContainer>
          <DetailsContainer>
            <EnjoyTvContainer>
              <Heading>Enjoy on Your TV</Heading>
              <AnyWhereText>
                Watch on smart TVs, PlayStations, Xbox, chromecast, AppleTV,
                Blu-ray players and more.
              </AnyWhereText>
            </EnjoyTvContainer>
            <VideoContainer>
              <TvImage
                src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1719901371/tv_eeallg.png"
                alt="tv"
              />
              <Video data-uia="vidoe" autoPlay playsInline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </Video>
            </VideoContainer>
          </DetailsContainer>
        </SecondContainer>
        <Line />
        <ThirdContainer />
        <Line />
        <FourthContainer />
        <Line />
        <KidsContainer />
        <Line />
        <QwestionsContaner />
      </MainContainer>
    );
  }
}

export default Home;
