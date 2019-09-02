import React from 'react';
// import { ListGroup, ListGroupItem } from 'reactstrap';
import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';

const CustomCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

function PersonCard(props) {
    console.log(props)
return(
    <div className='cards'>
        {/* <h1>{props.name}</h1>
        <ListGroup>
            <ListGroupItem color='success'>Born in the year of: {props.birthYear}</ListGroupItem>
            <ListGroupItem color='info'>Gender: {props.gender}</ListGroupItem>
            <ListGroupItem color='warning'>Hair Color: {props.hairColor}</ListGroupItem>
            <ListGroupItem color='danger'>Eye Color: {props.eyeColor}</ListGroupItem>
        </ListGroup> */}
        
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
}

export default PersonCard;