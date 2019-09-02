import React from 'react';

function PersonCard(props) {
    console.log(props)
return(
    <div>
        <h1>{props.name}</h1>
        <ul>
            <li>Born in the year of: {props.birthYear}</li>
            <li>Gender: {props.gender}</li>
            <li>Hair Color: {props.hairColor}</li>
            <li>Eye Color: {props.eyeColor}</li>
        </ul>
        
    </div>
    )
}

export default PersonCard;