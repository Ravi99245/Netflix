import { Component } from "react";

import {
  Item,
  Button,
  SpanElement,
  AnswerContainer,
  Answer,
  Plus,
  Close,
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
    const { card } = this.props;
    const { qwestion, answer } = card;
    return (
      <Item onFocus={this.updateFocus} onBlur={this.updateFocusToFalse}>
        <Button type="button" $isFocused={focus} onClick={this.showAnswer}>
          <SpanElement>{qwestion}</SpanElement>
          {showAnswer ? <Close /> : <Plus />}
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
