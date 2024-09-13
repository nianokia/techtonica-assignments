import React, { useState } from 'react'
import { Button, Form, Card } from "react-bootstrap"
import * as ioicons from 'react-icons/io5'

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
        <ul style={{marginTop: '15px'}}>
          {events.filter(event => event.name.toLowerCase().includes(searchEvent)).map(filteredEvent => (
            <li key={filteredEvent.id}>
              <Card>
                <Card.Body style={{display: 'flex', gap: '15px', margin: '0 auto', alignItems: 'center'}}>
                  {/* <div>
                    {filteredEvent.isFavorite == true ? 
                      <ioicons.IoHeartSharp style={{color: "red", fontSize: '40px'}} /> : 
                      <ioicons.IoHeartOutline style={{color: "red", fontSize: '40px'}} />
                    }
                  </div> */}
                  <div>
                    <Card.Title>{filteredEvent.name}</Card.Title>
                    <Card.Text>{filteredEvent.date}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul> : null}
    </div>
  )
}

export default Search;