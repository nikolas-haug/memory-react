import React, { Component } from "react";
import CritterCard from "./components/CritterCard";
// import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Navbar from "./components/Navbar";
import critters from "./critters.json";
// import "./App.css";

// shuffle function - fischer yates algorithm
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  console.log(a);
  return a;
}

// Setting this.state.critters to the critters json array and other props
class App extends Component {
  state = {
    critters: critters,
    currentScore: 0,
    highScore: 0,
    message: "",
    clicked: []
  };

  // TO DO - to prevent the page from refreshing/scolling to top after shuffle
  // function to handle the shuffle after each event
  handleShuffle = () => {
    let shuffledCritters = shuffle(this.state.critters);
    this.setState({ critters: shuffledCritters });
  };

  // function to handle each click and check the 'clicked' status of each photo
  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
      // console.log(this.state.clicked)
    } else {
      this.handleGameOver();
    }
  };

  // function to handle the score keeping and to alert player
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "Correct!"
    });
    if(newScore > this.state.highScore) {
      this.setState({ highScore: newScore});
      this.handleShuffle();
    } else {
      this.handleShuffle();
    }
  }
  // function to handle the game reset after a player's 'wrong' click
  handleGameOver = () => {
    this.setState({
      message: "Game over!",
      currentScore: 0,
      clicked: []
    });
    this.handleShuffle();
  }

  render() {
    return (

      <div className="container">

        <Title 
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />

        <div className="row">
          
            {this.state.critters.map(critter => (
              <CritterCard
                id={critter.id}
                key={critter.id}
                name={critter.name}
                image={critter.image}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        
      </div>
    );
  }
}

export default App;