import React from "react";
import AppScore from "./App-Score";

export default (props) => {
    let textColor = [
        "text-primary",
        "text-success",
        "text-danger",
        "text-warning",
        //"text-info",
        "text-light",
        //"text-dark",
        //"text-muted",
        //"text-white"
    ];
    let renderColor = textColor[Math.floor(Math.random() * textColor.length)];
    return <nav className="navbar navbar-light bg-dark text-white fixed-top">
        <h1 className={"navbar-brand mr-auto " + renderColor}>{props.children}</h1>
        <AppScore color={renderColor} scoreName="Current Score" score={props.currentScore}/>
        <AppScore color={renderColor} scoreName="High Score" score={props.highScore}/>
    </nav>  
}