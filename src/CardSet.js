import React, { Component } from "react";

class CardSet extends Component {
  constructor() {
    super();
    this.state = {
      chosenCards: []
    };
  }

  saveCourse(index) {
    console.log(index);
    const copyOfCards = [...this.state.chosenCards];
    copyOfCards.push(this.props.cards[index]);
    this.setState({
      chosenCards: copyOfCards
    });
  }

  render() {
    console.log(this.props.cards);

    const cardList = this.props.cards.map((card, index) => {
      return (
        <div className="col s2" key={index}>
          <div className="card hoverable small">
            <div className="card-image">
              <img src={card.image} alt="course visual" />
            </div>
            <div className="card-content">
              <p>{card.course}</p>
              <p>{card.instructor}</p>
            </div>
            <div className="card-action">
              <a href="#">$9.99</a>
            </div>
          </div>
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

    return <div>{cardList}</div>;
  }
}

export default CardSet;
