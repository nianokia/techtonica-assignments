import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import SightingsForm from './SightingsForm';
import Sighting from './Sighting';

const ListSightings = () => {

  // this is my original state with an array of students 
  const [sightings, setSightings] = useState([]);

  //this is the state needed for the UpdateRequest
  const [editingSighting, setEditingSighting] = useState(null);

  const [healthyFilter, setHealthyFilter] = useState(false);

  const loadSightings = () => {
    // A function to fetch the list of sightings that will be load anytime that list change
    fetch("http://localhost:8080/api/sightings")
      .then((response) => response.json())
      .then((sightings) => {
        setSightings(sightings);
      }
    );
  }

  useEffect(() => {
    loadSightings();
  }, [sightings]);

  const onSaveSighting = (newSighting) => {
    //console.log(newSighting, "From the parent - List of Sightings");
    setSightings((sightings) => [...sightings, newSighting]);
  }


  //A function to control the update in the parent (sighting component)
  const updateSighting = (savedSighting) => {
    // console.log("Line 29 savedSighting", savedSighting);
    // This function should update the whole list of sightings - 
    loadSightings();
  }

  //A function to handle the Delete funtionality
  const onDelete = (sighting) => {
    //console.log(sighting, "delete method")
    return fetch(`http://localhost:8080/api/sightings/${sighting.sighting_id}`, {
      method: "DELETE"
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        loadSightings();
      }
    })
  }

  //A function to handle the Update functionality
  const onUpdate = (toUpdateSighting) => {
    //console.log(toUpdateStudent);
    setEditingSighting(toUpdateSighting);

  }

  return (
    <div className="mybody">
      <div className="list-sightings">
        <h2>Sightings</h2>
        <label htmlFor="healthy-filter">Filter for only Healthy Animals
          <input type="checkbox" name="healthy-filter" id="healthty-filter" checked={healthyFilter || false} onChange={(event) => setHealthyFilter(event.currentTarget.checked)}/>
        </label>
        <ul>
          {!healthyFilter ? 
            (sightings.map((sighting) => {
              return <li key={`sighting-${sighting.sighting_id}`}> 
                <Sighting sighting={sighting} toDelete={onDelete} toUpdate={onUpdate} />
              </li>
            })) : (
            sightings.filter((sighting) => sighting.health == true).map((healthySighting) => {
              return <li key={`healthySighting-${healthySighting.sighting_id}`}>
                <Sighting sighting={healthySighting} toDelete={onDelete} toUpdate={onUpdate} />
              </li>
            })
            )
          }
        </ul>
      </div>
      <SightingsForm key={editingSighting ? editingSighting.sighting_id : null} onSaveSighting={onSaveSighting} editingSighting={editingSighting} onUpdateSighting={updateSighting} />
    </div>
  );
}


export default ListSightings

        // <Form>
        //   <Form.Check>
        //     type={"checkbox"},
        //     name={"healthy-filter"},
        //     id={"healthty-filter"},
        //     checked={healthyFilter || false},
        //     onChange={setHealthyFilter},
        //     label={"Filter for only Healthy Animals"}
        //   </Form.Check>
        // </Form>