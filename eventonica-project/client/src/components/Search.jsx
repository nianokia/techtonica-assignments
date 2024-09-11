import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap"
import Event from "./Event";

const Search = ({ events }) => {
  const [searchEvent, setSearchEvent] = useState(null);

  const updateSearch = (e) => {
    const caseInsensitiveEvent = e.target.value.toLowerCase();
    setSearchEvent(caseInsensitiveEvent);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(events);
    // return (
    //   <ul>
    //     {events.filter(event => event.name.toLowerCase().includes(searchEvent)).map(filteredEvent => (
    //       <li key={filteredEvent.id}>
    //         <Event event={filteredEvent} />
    //       </li>
    //     ))}
    //   </ul>
    // );
  }
  // <ul>
  //   {events.map((event) => {
  //     return <li key={event.id}> <Event event={event} toDelete={onDelete} toUpdate={onUpdate} /></li>
  //   })}
  // </ul>

  return (
    <div className='Search'>
      <Form onSubmit={handleSubmit}>
        <input 
          type="search"
          id='search'
          className="form-control"
          placeholder='Search...'
          onChange={updateSearch}
        />
        <Button type="submit" className="btn-search">→</Button>
      </Form>
      {searchEvent ?
        <ul>
          {events.filter(event => event.name.toLowerCase().includes(searchEvent)).map(filteredEvent => (
            <li key={filteredEvent.id}>
              <Event event={filteredEvent} />
            </li>
          ))}
        </ul> : null}
    </div>
  )
}

export default Search;