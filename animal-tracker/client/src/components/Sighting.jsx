import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Sighting = ({sighting, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateSighting) => {
        toUpdate(toUpdateSighting)
    }

    const onDelete = (toDeleteSighting) => {
        toDelete(toDeleteSighting)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{sighting.individual}</Card.Title>
            <Card.Text>{sighting.date_time}</Card.Text>
            <Button variant="outline-danger" onClick={()=>{onDelete(sighting)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(sighting)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Sighting;