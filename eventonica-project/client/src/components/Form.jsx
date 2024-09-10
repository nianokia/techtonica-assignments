import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveEvent, editingEvent, onUpdateEvent }) => {

    // This is the original State with not initial event 
    const [event, setEvent] = useState(editingEvent || {
        name: "",
        date: "",
        category: "",
        isFavorite: false
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const name = event.target.value;
        setEvent((event) => ({ ...event, name }));
    };

    const handleDateChange = (event) => {
        const date = event.target.value;
        setEvent((event) => ({ ...event, date }));
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setEvent((event) => ({ ...event, category }));
    };

    const handleFavoriteChange = (event) => {
        const isFavorite = event.target.checked;
        //console.log(isFavorite);
        setEvent((event) => ({ ...event, isFavorite }));
    };

    const clearForm = () => {
        setEvent({ name: "", date: "", category: "", isFavorite: false })
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
        if (event.id) {
            putEvent(event);
        } else {
            postEvent(event);
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
                    value={event.name}
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
                    value={event.date}
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
                    value={event.category}
                    onChange={handleCategoryChange}
                />
            </Form.Group>
            <Form.Check
                type={'checkbox'}
                id={`isFavorite`}
                checked={event.isFavorite}
                onChange={handleFavoriteChange}
                label={`❤`}
            />
            <Form.Group>
            <Button type="submit" variant="outline-success">{event.id ? "Edit Event" : "Add Event"}</Button>
            {event.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};


export default MyForm