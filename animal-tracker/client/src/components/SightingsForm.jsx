import React, { useReducer } from 'react'
import { Button, Form } from "react-bootstrap"
import { AllContext } from '../context/Context';

const SightingsForm = ({ onSaveSighting, editingSighting, onUpdateSighting, sightings }) => {
  // const { setForm } = useContext(AllContext);

  const initialState = {
    individual: "", 
    date_time: "", 
    location: "", 
    health: false, 
    email: "", 
    created_at: null 
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'editIndividual':
        return { ...state, individual: action.payload};
      case 'editDate_Time':
        return {...state, date_time: action.payload};
      case 'editLocation':
        return {...state, location: action.payload};
      case 'editHealth':
        return {...state, health: action.payload};
      case 'editEmail':
        return {...state, email: action.payload};
      case 'editCreated_At':
        return {...state, created_at: action.payload};
      case 'reset':
        return { ...initialState }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, editingSighting || initialState);

  //create functions that handle the event of the user typing into the form
  const handleIndividualChange = (event) => {
    let individual = event.target.value;
    dispatch({ type: 'editIndividual', payload: individual });
  };

  const handleDate_TimeChange = (event) => {
    const date_time = event.target.value;
    // const date_timeFormat = new Date(date_time).toISOString();
    dispatch({ type: 'editDate_Time', payload: date_time });
  };

  const handleLocationChange = (event) => {
    let location = event.target.value;
    dispatch({ type: 'editLocation', payload: location });
  };

  const handleHealthChange = (event) => {
    let health = event.target.checked;
    dispatch({ type: 'editHealth', payload: health });
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    dispatch({ type: 'editEmail', payload: email });
  };

  const handleCreated_AtChange = () => {
  const created_at = new Date().toISOString();

    // new Date().toJSON().slice(0, 16);
    // const year = created_at.getFullYear();
    // let month = created_at.getMonth() + 1;
    // if (month < 10) {
    //   month = "0" + month;
    // }
    // let day = created_at.getDate();
    // if (day < 10) {
    //   day = "0" + day;
    // }
    // let hour = created_at.getHours();
    // if (hour < 10) {
    //   hour = "0" + hour;
    // }
    // let minutes = created_at.getMinutes();
    // if (minutes < 10) {
    //   minutes = "0" + minutes;
    // }
    // let seconds = created_at.getSeconds();
    // if (seconds < 10) {
    //   seconds = "0" + seconds;
    // }
    // const mseconds = created_at.getMilliseconds();

    // // 2024-09-11 22:30:21.231986
    // const formattedDate = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}.${mseconds}`;
    // console.log(formattedDate);
    dispatch({ type: 'editCreated_At', payload: created_at });
  };

  const clearForm = () => {
    dispatch({ type: 'reset', payload: initialState })
  }

  // ------- POST REQUEST -------
  const postSighting = (newSighting) => {
    return fetch("http://localhost:8080/api/sightings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSighting),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onSaveSighting(data);

      // clean the form
      clearForm();
    });
  };

  // ------- PUT REQUEST -------
  const putSighting = (toEditSighting) => {
    return fetch(`http://localhost:8080/api/sightings/${toEditSighting.sighting_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toEditSighting),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onUpdateSighting(data);
      
      // clean the form
      clearForm();
    });
  };


  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    handleCreated_AtChange();
    console.log(state);
    
    const allIndividuals = [];
    sightings.map((sighting) => {
      sighting.individual
    })

    if (state.individual) {
      setForm('individuals');
    }
    
    // state.sighting_id ? putSighting(state) : postSighting(state);

    if (state.sighting_id) {
      putSighting(state);
    } else {
      postSighting(state);
    }
  };

  return (
    <>
      {/* <h2>Sightings Form</h2> */}
      <Form className='form-events' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Individual</Form.Label>
          <input
            type="text"
            id="add-individual"
            placeholder="Individual"
            required
            value={state.individual || ""}
            onChange={handleIndividualChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date & Time</Form.Label>
          <input
            type="datetime-local"
            id="add-date_time"
            required
            value={state.date_time || ""}
            onChange={handleDate_TimeChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <input
            type="text"
            id="add-location"
            placeholder="Location"
            required
            value={state.location || ""}
            onChange={handleLocationChange}
          />
        </Form.Group>
        <Form.Check
          type={'checkbox'}
          id={`health`}
          checked={state.health || false}
          onChange={handleHealthChange}
          label={`Does the animal look healthy?`}
        />
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <input
            type="email"
            id="add-email"
            placeholder="Email"
            required
            value={state.email || ""}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="outline-success">
            {state.sighting_id ? "Edit Sighting" : "Add Sighting"}
          </Button>
          {state.sighting_id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
        </Form.Group>
      </Form>
    </>
  );
};


export default SightingsForm;