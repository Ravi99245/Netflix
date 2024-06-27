import { Component } from "react";

import {
  NavElement,
  NetFlixLogo,
  LanguageIcon,
  LanguageSelectContainer,
  SelectElement,
  OptionElement,
  SignInButton,
  SignInContainer,
  AnchorButtonContianer,
} from "./styledComponent";

class Header extends Component {
  state = { currentLanguage: "English" };

  handleChange = (event) => {
    this.setState({ currentLanguage: event.target.value });
  };

  render() {
    const { currentLanguage } = this.state;
    return (
      <NavElement>
        <NetFlixLogo
          src="https://res.cloudinary.com/dxa4rbmrj/image/upload/v1719471028/Netflix_Logo_PMS_czwo5z.png"
          alt="logo"
        />
        <SignInContainer>
          <LanguageSelectContainer>
            <LanguageIcon />
            <SelectElement
              value={currentLanguage}
              id="language"
              onChange={this.handleChange}
            >
              <OptionElement value="English">English</OptionElement>
              <OptionElement value=" हिन्दी"> हिन्दी</OptionElement>
            </SelectElement>
          </LanguageSelectContainer>
          <AnchorButtonContianer>
            <SignInButton
              role="button"
              href="/in/login"
              id="signIn"
              data-uia="header-login-link"
            >
              Sign In
            </SignInButton>
          </AnchorButtonContianer>
        </SignInContainer>
      </NavElement>
    );
  }
}

export default Header;
