import React, { useReducer } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveEvent, editingEvent, onUpdateEvent }) => {
  const initialState = {
    name: "",
    date: "",
    category: "",
    isFavorite: false
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'editName':
        return { ...state, name: action.payload};
      case 'editDate':
        return {...state, date: action.payload};
      case 'editCategory':
        return {...state, category: action.payload};
      case 'editIsFavorite':
        return {...state, isFavorite: action.payload};
      case 'reset':
        return { ...initialState }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, editingEvent || initialState);

  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const name = event.target.value;
    dispatch({ type: 'editName', payload: name });
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    dispatch({ type: 'editDate', payload: date });
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    dispatch({ type: 'editCategory', payload: category });
  };

  const handleFavoriteChange = (event) => {
    let isChecked = event.target.checked;
    // isChecked == null ? isChecked = false : isChecked = true;
    dispatch({ type: 'editIsFavorite', payload: isChecked });
  };

  const clearForm = () => {
    dispatch({ type: 'reset', payload: initialState })
  }

  //A function to handle the post request
  const postEvent = (newEvent) => {
    return fetch("http://localhost:8080/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log("From the post ", data);
      //I'm sending data to the List of Events (the parent) for updating the list
      onSaveEvent(data);
      //this line just for cleaning the form
      clearForm();
    });
  };

  //A function to handle the post request
  const putEvent = (toEditEvent) => {
    return fetch(`http://localhost:8080/api/events/${toEditEvent.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toEditEvent),
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onUpdateEvent(data);
      //this line just for cleaning the form
      clearForm();
    });
  };


  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.id) {
      putEvent(state);
    } else {
      postEvent(state);
    }
  };

  return (
    <Form className='form-events' onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <input
          type="text"
          id="add-name"
          placeholder="Name"
          required
          value={state.name}
          onChange={handleNameChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <input
          type="date"
          id="add-date"
          placeholder="Date"
          required
          value={state.date}
          onChange={handleDateChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <input
          type="text"
          id="add-category"
          placeholder="Category"
          required
          value={state.category}
          onChange={handleCategoryChange}
        />
      </Form.Group>
      <Form.Check
        type={'checkbox'}
        id={`isFavorite`}
        checked={state.isFavorite}
        onChange={handleFavoriteChange}
        label={`❤`}
      />
      <Form.Group>
        <Button type="submit" variant="outline-success">
          {state.id ? "Edit Event" : "Add Event"}
        </Button>
        {state.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
      </Form.Group>
    </Form>
  );
};


export default MyForm