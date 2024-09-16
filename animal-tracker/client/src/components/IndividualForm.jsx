import React, { useReducer } from 'react'
import { Button, Form } from "react-bootstrap"

const IndividualsForm = ({ onSaveIndividual, editingIndividual, onUpdateIndividual }) => {

  const initialState = {
    nickname: "", 
    species: "", 
    created_at: null 
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'editNickname':
        return { ...state, nickname: action.payload};
      case 'editSpecies':
        return {...state, species: action.payload};
      case 'editCreated_At':
        return {...state, created_at: action.payload};
      case 'reset':
        return { ...initialState }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, editingIndividual || initialState);

  //create functions that handle the event of the user typing into the form
  const handleNicknameChange = (event) => {
    let nickname = event.target.value;
    // nickname = nickname[0].toUpperCase() + nickname.substring(1);
    dispatch({ type: 'editNickname', payload: nickname });
  };

  const handleSpeciesChange = (event) => {
    const species = event.target.value;
    // species = species[0].toUpperCase() + species.substring(1);
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

  const clearForm = () => {
    dispatch({ type: 'reset', payload: initialState })
  }

  //A function to handle the post request
  const postIndividual = (newIndividual) => {
    return fetch("http://localhost:8080/api/sightings", {
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
  };

  return (
    <>
    <h2>Individual Form</h2>
      <Form className='form-events' onSubmit={handleSubmit}>
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
          <Button type="submit" variant="outline-success">
            {state.individual_id ? "Edit Individual" : "Add Individual"}
          </Button>
          {state.individual_id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
        </Form.Group>
      </Form>
    </>
  );
};


export default IndividualsForm;