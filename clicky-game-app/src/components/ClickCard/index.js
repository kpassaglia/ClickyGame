import React from "react";
import "./style.css"

function ClickCard(props){

  let cardStyle = {
    backgroundImage: `url(${props.image})`,
  };


    return(
    <div id={props.id} className="click-item" data-status={props.clicked} style={cardStyle} onClick ={() => props.spursClicked(props.id)}>

  </div>
   

);
};

export default ClickCard