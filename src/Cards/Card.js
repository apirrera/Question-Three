import React from 'react';

export default function Card(props){
    return(
        <div className="card-container">
            <div className="image-container">
            <img src={props.img} alt="blueberry magic" className="images" />
            <h1 className="title">{props.title}</h1>
            </div>

            
            {props.git && <a href={props.git} target="_blank" rel="noopener noreferrer"><button className="button">View Git</button></a>}
            
            {props.site && <a href={props.site} target="_blank" rel="noopener noreferrer"><button className="button">View Site</button></a> }
            
        </div>
    )
}