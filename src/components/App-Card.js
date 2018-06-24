import React from "react";
import "./App-Card.css";

const AppCard = props => {
    return (
        <div className="card bg-light" onClick={() => props.guess(props.id)}>
            
                <img className="card-img-top img-fluid" src={props.imgSource} alt={props.name} />
            
            <div className="card-body">
                <h6 className="card-title">{props.name}</h6>
                {/* <p className="card-text">{props.occupation}</p> */}
            </div>
        </div>
    );
}

export default AppCard;