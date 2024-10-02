import { useState } from 'react'
import './App.css'

/*
PSEUDOCODE:
- ---- HOMEPAGE ----
  - add contact button (comp)
    - present a form onClick
      - inputs = name (text), email (email) , phone (text) [validate w/ regex], notes (text)
        - all required except notes
  - list of contacts (comp) [ul then map through contacts in li]
    - contact (comp)
      - edit contact button
      - delete contact button

- ---- SERVER ----
  - GET route - retrieve all contacts (SELECT * FROM contacts)
  - POST route - add a contact (INSERT INTO contacts (name, email, phone, notes) VALUES ('', '', '', ''))
  - PUT route - edit specific contact_id ()
  - DELETE route - delete specific contact_id (DELETE contact_id FROM contacts)
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contact App</h1>
      <div className="card">
        Total Contacts:
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>
    </>
  )
}

export default App
