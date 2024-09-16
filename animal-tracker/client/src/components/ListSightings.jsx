import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import SightingsForm from './SightingsForm';
import Sighting from './Sighting';
import IndividualForm from './IndividualForm';

const ListSightings = ({ setSightings, sightings, loadSightings }) => {

  // ----- STATE TO UPDATE REQUEST -----
  const [editingIndividual, setEditingIndividual] = useState(null);

  // ----- HEALTHY FILTER STATE -----
  const [healthyFilter, setHealthyFilter] = useState(false);

  useEffect(() => {
    loadSightings();
  }, []);

  // const changeSightings = useMemo(() => setSightings(useMemo(sightings)));

  const onSaveIndividual = (newSighting) => {
    setSightings((sightings) => [...sightings, newSighting]);
  }


  //A function to control the update in the parent (sighting component)
  const updateIndividual = (savedIndividual) => {
    loadSightings();
  }

  //A function to handle the Delete funtionality
  const onDelete = (sighting) => {

    return fetch(`http://localhost:8080/api/sightings/${sighting.sighting_id}`, {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        loadSightings();
      }
    })
  }

  const onUpdate = (toUpdateIndividual) => {
    setEditingIndividual(toUpdateIndividual);
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
      <IndividualForm key={editingIndividual ? editingIndividual.individual_id : null} onSaveIndividual={onSaveIndividual} editingIndividual={editingIndividual} onUpdateIndividual={updateIndividual} />
    </div>
  );
}


export default ListSightings