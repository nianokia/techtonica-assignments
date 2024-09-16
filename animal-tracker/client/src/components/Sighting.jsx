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

  const formatDate = (date_time) => {
    let date = new Date(date_time);
    // new Date().toJSON().slice(0, 16);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hour = date.getHours();
    if (hour < 10) {
      hour = "0" + hour;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // 2024-09-11 22:30:21.231986
    return `${month}/${day}/${year} ${hour}:${minutes}`;
  }

  const formatCasing = (value) => {
    const words = value.split(" ");
    return words.map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    }).join(" ");
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{sighting.individual} - {formatCasing(sighting.species)}</Card.Title>
        <Card.Text>{formatDate(sighting.date_time)}</Card.Text>
        <Card.Text>{sighting.location}</Card.Text>
        <Card.Text>
          {sighting.health ? <ioicons.IoHeart style={{color: "red", fontSize: '30px'}}/> 
          : <ioicons.IoHeartDislikeOutline style={{color: "red", fontSize: '30px'}}/>}
        </Card.Text>
        <Card.Text>{sighting.status_code}</Card.Text>
        
        <Button variant="outline-danger" onClick={()=>{onDelete(sighting)}} style={{padding: '0.6em', marginRight:'0.9em'}}>
          <ioicons.IoTrash/>
        </Button>
        <Button variant="outline-info" onClick={()=>{onUpdate(sighting)}} style={{padding: '0.6em'}}>
          <ioicons.IoSync/>
        </Button>
      </Card.Body>
    </Card>
  )

}

export default Sighting;