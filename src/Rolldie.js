import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { firstDice: "one", secondDice: "one" };
  }
  
  rollDice = () => {
      const properties = this.props;
      const sidesLenght = properties.sides.length;
      let newFirstRolledDice = properties.sides[ Math.floor(Math.random() * sidesLenght)];
      let newSecondRolledDice = properties.sides[ Math.floor(Math.random() * sidesLenght)];

      

      // updating dice states
      this.setState({firstDice: newFirstRolledDice, secondDice: newSecondRolledDice});
    }
  render() {
    return (
      <div>
        <Die faceValue={this.state.firstDice} />
        <Die faceValue={this.state.secondDice} />
        
        <button onClick={this.rollDice}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
