import React from 'react';

const AppScore = (props) => 
    <h5 className="text-light px-3">
        {props.scoreName}: <span className={props.color}>{props.score}</span>
    </h5>

export default AppScore