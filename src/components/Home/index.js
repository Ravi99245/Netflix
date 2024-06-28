import { Component } from "react";
import Header from "../Header/index";

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
} from "./styledComponent";

class Home extends Component {
  state = { email: "", focussed: false };

  updateFocussedToTrue = () => {
    this.setState({ focussed: true });
  };

  updateFocussedToFalse = () => {
    this.setState({ focussed: false });
  };

  updateEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { focussed, value } = this.state;

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
                <EmailContainer>
                  <Label
                    htmlfof="email"
                    focussed={focussed}
                    hasValue={value !== ""}
                  >
                    Email address
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    onChange={this.updateEmail}
                    onFocus={this.updateFocussedToTrue}
                    onBlur={this.updateFocussedToFalse}
                  />
                </EmailContainer>
              </Form>
            </FormContiaer>
          </HeadingContainer>
        </TopContianer>
      </MainContainer>
    );
  }
}

export default Home;
