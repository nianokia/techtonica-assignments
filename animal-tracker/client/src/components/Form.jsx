import React, { useReducer } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveSighting, editingSighting, onUpdateSighting }) => {
  const initialState = {
    individual: "", 
    date_time: "", 
    location: "", 
    health: false, 
    email: "", 
    created_at: "" 
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'editIndividual':
        return { ...state, name: action.payload};
      case 'editDate_Time':
        return {...state, date: action.payload};
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
    const individual = event.target.value;
    dispatch({ type: 'editIndividual', payload: individual });
  };

  const handleDate_TimeChange = (event) => {
    const date_time = event.target.value;
    dispatch({ type: 'editDate_Time', payload: date_time });
  };

  const handleLocationChange = (event) => {
    const location = event.target.value;
    dispatch({ type: 'editLocation', payload: location });
  };

  const handleHealthChange = (event) => {
    let isChecked = event.target.checked;
    // isChecked == null ? isChecked = false : isChecked = true;
    dispatch({ type: 'editHealth', payload: isChecked });
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    dispatch({ type: 'editEmail', payload: email });
  };

  const clearForm = () => {
    dispatch({ type: 'reset', payload: initialState })
  }

  //A function to handle the post request
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
      //console.log("From the post ", data);
      //I'm sending data to the List of Sightings (the parent) for updating the list
      onSaveSighting(data);
      //this line just for cleaning the form
      clearForm();
    });
  };

  //A function to handle the post request
  const putSighting = (toEditSighting) => {
    return fetch(`http://localhost:8080/api/sightings/${toEditSighting.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toEditSighting),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onUpdateSighting(data);
      //this line just for cleaning the form
      clearForm();
    });
  };


  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.id) {
      putSighting(state);
    } else {
      postSighting(state);
    }
  };

  return (
    <Form className='form-events' onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Individual</Form.Label>
        <input
          type="text"
          id="add-individual"
          placeholder="Individual"
          required
          value={state.individual}
          onChange={handleIndividualChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date & Time</Form.Label>
        <input
          type="datetime-local"
          id="add-date_time"
          placeholder="Date_Time"
          required
          value={state.date_time}
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
          value={state.location}
          onChange={handleLocationChange}
        />
      </Form.Group>
      <Form.Check
        type={'checkbox'}
        id={`health`}
        checked={state.health}
        onChange={handleHealthChange}
        label={`Does the animal look healthy?`}
      />
      <Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <input
          type="email"
          id="add-email"
          placeholder="Email"
          required
          value={state.email}
          onChange={handleEmailChange}
        />
      </Form.Group>
        <Button type="submit" variant="outline-success">
          {state.id ? "Edit Sighting" : "Add Sighting"}
        </Button>
        {state.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
      </Form.Group>
    </Form>
  );
};


export default MyForm