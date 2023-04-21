import React from "react";
import ReactCardFlip from "react-card-flip";
import CardFlip from "./CardFlip";
import CardFlipBack from "./CardFlipBack";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <CardFlip>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </CardFlip>

        <CardFlipBack>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </CardFlipBack>
      </ReactCardFlip>
    );
  }
}

export default Card;
