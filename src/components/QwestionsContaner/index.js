import { Component } from "react";
import { FaAngleRight } from "react-icons/fa6";

import ListItem from "../ListItem/index";
import {
  Container,
  Heading,
  DetailsContainer,
  UnOrderedList,
  ListContainer,
  FormHeading,
  Label,
  Input,
  EmailContainer,
  Form,
  FormContiaer,
  GetStartedContainer,
  GetButton,
  ButtonContainer,
} from "./styledComponent";

const qwestionsList = [
  {
    qwestion: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices." +
      "You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    qwestion: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    qwestion: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    qwestion: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    qwestion: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    qwestion: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

class QwestionsContaner extends Component {
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
      <Container>
        <DetailsContainer>
          <Heading>Frequently Asked Questions</Heading>
          <ListContainer>
            <UnOrderedList>
              {qwestionsList.map((eachItem) => (
                <ListItem key={eachItem.qwestion} card={eachItem} />
              ))}
            </UnOrderedList>
          </ListContainer>
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
        </DetailsContainer>
      </Container>
    );
  }
}

export default QwestionsContaner;
