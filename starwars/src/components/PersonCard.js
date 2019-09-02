import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { List, Segment } from 'semantic-ui-react'


function PersonCard(props) {
    console.log(props)
return(
    <div>
        <h1>{props.name}</h1>
        <ListGroup>
            <ListGroupItem color='success'>Born in the year of: {props.birthYear}</ListGroupItem>
            <ListGroupItem color='info' >Gender: {props.gender}</ListGroupItem>
            <ListGroupItem color='warning' >Hair Color: {props.hairColor}</ListGroupItem>
            <ListGroupItem color='danger' >Eye Color: {props.eyeColor}</ListGroupItem>
        </ListGroup>
        
    </div>
    )
}

export default PersonCard;