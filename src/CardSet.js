import React, { Component } from "react";
import Card from "./Card";

class CardSet extends Component {
  constructor() {
    super();
    this.state = {
      chosenCards: []
    };
  }
  // duplicate current state into 'copyOfCards', then push onto array, then pass into setState to update state
  saveCourse(index) {
    console.log(index);
    const copyOfCards = [...this.state.chosenCards];
    copyOfCards.push(this.props.cards[index]);
    this.setState({
      chosenCards: copyOfCards
    });
  }

  render() {
    console.log(this.state.chosenCards);

    const savedCards = this.state.chosenCards.map((card, index) => {
      return <h3 key={index}>{card.course}</h3>;
    });

    const cardList = this.props.cards.map((card, index) => {
      return (
        <div className="col s2" key={index}>
          <Card card={card} />
          <button
            onClick={() => {
              this.saveCourse(index);
            }}
            className="btn waves-light waves-effect"
          >
            Save
          </button>
        </div>
      );
    });

    return (
      <div>
        {cardList}
        {savedCards}
      </div>
    );
  }
}

export default CardSet;
