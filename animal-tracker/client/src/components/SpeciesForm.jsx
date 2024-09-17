import React, { useReducer } from 'react'
import { Button, Form } from "react-bootstrap"

const SpeciesForm = ({ onSaveSpecies, editingSpecies, onUpdateSpecies }) => {

  const initialState = {
    common_name: "", 
    scientific_name: "", 
    wild_population: "",
    status_code: "",
    created_at: null 
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'editCommon_Name':
        return { ...state, common_name: action.payload};
      case 'editScientific_Name':
        return {...state, scientific_name: action.payload};
      case 'editWild_Population':
        return { ...state, wild_population: action.payload};
      case 'editStatus_Code':
        return { ...state, status_code: action.payload};
      case 'editCreated_At':
        return {...state, created_at: action.payload};
      case 'reset':
        return { ...initialState }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, editingSpecies || initialState);

  //create functions that handle the event of the user typing into the form
  const handleCommon_NameChange = (event) => {
    let common_name = event.target.value;
    // common_name = common_name[0].toUpperCase() + common_name.substring(1);
    dispatch({ type: 'editCommon_Name', payload: common_name });
  };

  const handleScientific_NameChange = (event) => {
    const species = event.target.value;
    // common_name = common_name[0].toUpperCase() + common_name.substring(1);
    dispatch({ type: 'editScientific_Name', payload: species });
  };

  const handleWild_PopulationChange = (event) => {
    let wild_population = event.target.value;
    dispatch({ type: 'editWild_Population', payload: wild_population });
  };

  const handleStatus_CodeChange = (event) => {
    let status_code = event.target.value;
    // status_code = status_code[0].toUpperCase() + status_code.substring(1);
    dispatch({ type: 'editStatus_Code', payload: status_code });
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

  //A function to handle the post request
  const postSpecies = (newSpecies) => {
    return fetch("http://localhost:8080/api/sightings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSpecies),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log("From the post ", data);
      //I'm sending data to the List of Individuals (the parent) for updating the list
      onSaveSpecies(data);
      //this line just for cleaning the form
      clearForm();
    });
  };

  //A function to handle the post request
  const putSpecies = (toEditSpecies) => {
    return fetch(`http://localhost:8080/api/sightings/${toEditSpecies.species_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toEditSpecies),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onUpdateSpecies(data);
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
    
    if (state.species_id) {
      putSpecies(state);
    } else {
      postSpecies(state);
    }
  };

  return (
    <>
      <h2>Species Form</h2>
      <Form className='form-events' onSubmit={handleSubmit}>
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
            {state.species_id ? "Edit Species" : "Add Species"}
          </Button>
          {state.species_id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
        </Form.Group>
      </Form>
    </>
  );
};


export default SpeciesForm;