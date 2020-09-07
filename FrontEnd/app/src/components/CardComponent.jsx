import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function CardComponent(props) {
    return (
        <div>
            
            <Card style={{ width: '18rem'}}>
                <Card.Img src="https://cdn3.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                            {props.description}
                    </Card.Text>
                    <Button variant="primary"> {props.button} </Button>
                </Card.Body>
            </Card> 
        </div>
    )
}

export default CardComponent;
