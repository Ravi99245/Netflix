import { Component } from "react";
import { IoAdd } from "react-icons/io5";

import {
  Item,
  Button,
  SpanElement,
  AnswerContainer,
  Answer,
} from "./styledComponent";
class ListItem extends Component {
  state = { showAnswer: false, focus: false };

  updateFocus = () => {
    this.setState({ focus: true });
  };

  updateFocusToFalse = () => {
    this.setState({ focus: false });
  };

  showAnswer = () => {
    this.setState((prevState) => ({
      showAnswer: !prevState.showAnswer,
    }));
  };

  render() {
    const { showAnswer, focus } = this.state;
    console.log(focus);
    const { card } = this.props;
    const { qwestion, answer } = card;
    return (
      <Item onFocus={this.updateFocus} onBlur={this.updateFocusToFalse}>
        <Button type="button" $isFocused={focus} onClick={this.showAnswer}>
          <SpanElement>{qwestion}</SpanElement>
          <IoAdd />
        </Button>
        {showAnswer && (
          <AnswerContainer showAnswer={showAnswer}>
            <Answer>{answer}</Answer>
          </AnswerContainer>
        )}
      </Item>
    );
  }
}

export default ListItem;
