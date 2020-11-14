import React, { Component } from "react";
import Die from "./Die";
import "./Rolldice.css";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { firstDice: "one", secondDice: "one", isRolling: false };
  }

  rollDice = () => {
    const properties = this.props;
    const sidesLenght = properties.sides.length;
    let newFirstRolledDice =
      properties.sides[Math.floor(Math.random() * sidesLenght)];
    let newSecondRolledDice =
      properties.sides[Math.floor(Math.random() * sidesLenght)];

    // updating dice states
    this.setState({
      firstDice: newFirstRolledDice,
      secondDice: newSecondRolledDice,
      isRolling: true,
    });

    // waiting for time it takes to roll then setting isRolling state back
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
    
  };
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die faceValue={this.state.firstDice} isRolling ={this.state.isRolling} />
          <Die faceValue={this.state.secondDice} isRolling ={this.state.isRolling} />
        </div>
        <button onClick={this.rollDice} disabled={this.state.isRolling}>
          {this.state.isRolling == true ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
