import React from 'react';
import { Jumbotron, } from 'reactstrap';


function PersonCard(props) {
return(
    <div className='cards'>
        <Jumbotron>
            <h1 className="display-3">{props.name}</h1>
            <p className="lead">Born in the year of : {props.birthYear}</p>
            <hr className="my-2" />
            <p>Gender: {props.gender}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Eye Color: {props.eyeColor}</p>
      </Jumbotron>  
    </div>
    )
};

export default PersonCard;