import React from 'react'
import Card from '../Card/Card'
import {Container} from "react-bootstrap"

function CardDisplay({animals}) {

    return (
        <div className="card-display">
            <Container className="card-display-container">
                {animals.map((animal,i) => {
                    return <Card animal={animal} key={i} />
                })}
            </Container>
        </div>
    )
}

export default CardDisplay
