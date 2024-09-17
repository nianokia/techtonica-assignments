import React, { useReducer } from 'react'
import { Button, Form } from "react-bootstrap"

const IndividualForm = ({ onSaveIndividual, editingIndividual, onUpdateIndividual, loadSightings }) => {

  const initialState = {
    individual: "", 
    date_time: "", 
    location: "", 
    health: false, 
    email: "", 
    nickname: "", 
    species: "", 
    created_at: null,
    common_name: "", 
    scientific_name: "", 
    wild_population: "",
    status_code: "",
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
      case 'editNickname':
        return { ...state, nickname: action.payload};
      case 'editSpecies':
        return {...state, species: action.payload};
      case 'editCreated_At':
        return {...state, created_at: action.payload};
        case 'editCommon_Name':
        return { ...state, common_name: action.payload};
      case 'editScientific_Name':
        return {...state, scientific_name: action.payload};
      case 'editWild_Population':
        return { ...state, wild_population: action.payload};
      case 'editStatus_Code':
        return { ...state, status_code: action.payload};
      case 'reset':
        return { ...initialState }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, editingIndividual || initialState);

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

  //create functions that handle the event of the user typing into the form
  const handleNicknameChange = (event) => {
    let nickname = event.target.value;
    dispatch({ type: 'editNickname', payload: nickname });
  };

  const handleSpeciesChange = (event) => {
    const species = event.target.value;
    dispatch({ type: 'editSpecies', payload: species });
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

  const handleCommon_NameChange = (event) => {
    let common_name = event.target.value;
    dispatch({ type: 'editCommon_Name', payload: common_name });
  };

  const handleScientific_NameChange = (event) => {
    const scientific_name = event.target.value;
    dispatch({ type: 'editScientific_Name', payload: scientific_name });
  };

  const handleWild_PopulationChange = (event) => {
    let wild_population = event.target.value;
    dispatch({ type: 'editWild_Population', payload: wild_population });
  };

  const handleStatus_CodeChange = (event) => {
    const status_code = event.target.value;
    dispatch({ type: 'editStatus_Code', payload: status_code });
  };

  const clearForm = () => {
    dispatch({ type: 'reset', payload: initialState })
  }

  //A function to handle the post request
  const postIndividual = (newIndividual) => {
    return fetch("http://localhost:8080/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newIndividual),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log("From the post ", data);
      //I'm sending data to the List of Individuals (the parent) for updating the list
      onSaveIndividual(data);
      //this line just for cleaning the form
      clearForm();
    });
  };

  //A function to handle the post request
  const putIndividual = (toEditIndividual) => {
    return fetch(`http://localhost:8080/api/sightings/${toEditIndividual.individual_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toEditIndividual),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onUpdateIndividual(data);
      //this line just for cleaning the form
      clearForm();
    });
  };


  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    handleCreated_AtChange();
    console.log(state);
    
    if (state.individual_id) {
      putIndividual(state);
    } else {
      postIndividual(state);
    }

    loadSightings();
  };

  return (
    <>
    {/* <h2>Add Sighting Form</h2> */}
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
          <Form.Label>Nickname</Form.Label>
          <input
            type="text"
            id="add-nickname"
            placeholder="Nickname"
            required
            value={state.nickname || ""}
            onChange={handleNicknameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Species</Form.Label>
          <input
            type="text"
            id="add-species"
            placeholder="Species"
            required
            value={state.species || ""}
            onChange={handleSpeciesChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Common Name</Form.Label>
          <input
            type="text"
            id="add-common_name"
            placeholder="Common Name"
            required
            value={state.common_name || ""}
            onChange={handleCommon_NameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Scientific Name</Form.Label>
          <input
            type="text"
            id="add-scientific_name"
            placeholder="Scientific Name"
            required
            value={state.scientific_name || ""}
            onChange={handleScientific_NameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Wild Population</Form.Label>
          <input
            type="text"
            id="add-wild_population"
            placeholder="Wild Population"
            required
            value={state.wild_population || ""}
            onChange={handleWild_PopulationChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Status Code</Form.Label>
          <input
            type="text"
            id="add-status_code"
            placeholder="Status Code"
            required
            value={state.status_code || ""}
            onChange={handleStatus_CodeChange}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="outline-success">
            {state.individual_id ? "Edit Individual" : "Add Individual"}
          </Button>
          {state.individual_id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
        </Form.Group>
      </Form>
    </>
  );
};


export default IndividualForm;