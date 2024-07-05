import { Component } from "react";

import {
  Footer,
  DetailsContainer,
  UnOrderedList,
  Anchor,
  ListItem,
  LanguageSelectContainer,
  SelectElement,
  OptionElement,
  LanguageIcon,
  India,
} from "./styledComponent";

class FooterSection extends Component {
  state = { currentLanguage: "English" };

  handleChange = (event) => {
    this.setState({ currentLanguage: event.target.value });
  };

  render() {
    const { currentLanguage } = this.state;
    return (
      <Footer>
        <DetailsContainer>
          <div>
            <div>
              Questions? call{" "}
              <Anchor href="tel:000-800-919-1694">000-800-919-1694</Anchor>
            </div>
          </div>
          <div>
            <UnOrderedList>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  FAQ
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Help Center
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Account
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Media Center
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Investor Relations
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Jobs
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Ways To Watch
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Terms of Use
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Privacy
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Cookie Preference
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Corporate Inforamtion
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Contact us
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Speed Test
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Legal Notices
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor
                  target="_self"
                  href="https://help.netflix.com/support/412"
                >
                  Only on Netflix
                </Anchor>
              </ListItem>
            </UnOrderedList>
          </div>
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
          <India>Netflix India</India>
        </DetailsContainer>
      </Footer>
    );
  }
}

export default FooterSection;
