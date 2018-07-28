import React from "react";
import "./Title.css";

// const Title = props => <h1 className="title">{props.children}</h1>;

const Title = (props) => (
    <div className="jumbotron sticky-top text-center py-2">
        <h1>Clicky Critters Game</h1>
        <hr />
        <div className="container">
            <div className="row text-center">
                <div className="col-md-4 col-sm-12">
                    <h4>Score: {props.currentScore}</h4>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h4>{props.message}</h4>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h4>High Score: {props.highScore}</h4>
                </div>
            </div>
        </div>
    </div>
)

export default Title;