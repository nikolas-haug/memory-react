import React from "react";
import "./Title.css";

const Title = (props) => (
    <div className="jumbotron sticky-top text-center py-2">
        <h1>{props.header}</h1>
        <p>{props.caption}</p>
        <hr />
        <div className="container">
            <div className="row text-center">
                <div className="col-md-4 col-sm-12">
                    <h4>Score: <span>{props.currentScore}</span></h4>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h4><span>{props.message}</span></h4>
                </div>
                <div className="col-md-4 col-sm-12">
                    <h4>High Score: <span>{props.highScore}</span></h4>
                </div>
            </div>
        </div>
    </div>
)

export default Title;