import React, { Component } from "react";
import CritterCard from "./components/CritterCard";
// import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import critters from "./critters.json";
// import "./App.css";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  console.log(a);
  return a;
}

class App extends Component {
  // Setting this.state.critters to the critters json array and other props
  state = {
    critters: critters,
    clicked: false
  };

// componentDidMount = () => (
//   this.shuffle(this.state.critters)
// )

// to prevent the page from refreshing/scolling to top after shuffle - TO DO
handleShuffle = () => {
  let shuffledCritters = shuffle(this.state.critters);
  this.setState({ critters: shuffledCritters });
};

  handleClick = () => {
    this.setState({ clicked: true }) 
    console.log(this.state.clicked)
    this.handleShuffle()
  }

  render() {
    return (

      <div className="container">
        <div className="jumbotron">
          <Title>Critters!</Title>
        </div>

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