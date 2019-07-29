import React from "react";

function View(props){
  let teamColors = {
    backgroundColor: "#101836",
    borderColor: "#101836",
    color: "white"
  };



return<>
<nav className="navbar navbar-light" style={teamColors}>
  <span className="navbar-brand" style={teamColors}>
  <img src="./logo.svg" width="40" height="40" alt=""></img>
  COYS
  </span>
  
</nav>
<div className="jumbotron">
  <h1 className="display-4">Pochettino Picks</h1>
  <p className="lead">How good is your memory?</p>
  <hr className="my-4"></hr>
  <p>Click on the images to earn points, but be carefull, click on the same image twice and you loose!</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href=".container-fluid" role="button" style={teamColors}>Let's Go!</a>
  </p>
</div>
<div className="alert alert-dark" role="alert">
 <span>Score: {props.score} | High Score: {props.highScore} | {props.correctClick} </span>

</div>
{/* This is where the card component goes  */}

    </>
};

export default View;

