import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar';
import ListSightings from './components/ListSightings';
import SightingsForm from './components/SightingsForm.jsx';
import IndividualForm from './components/IndividualForm';
import SpeciesForm from './components/SpeciesForm.jsx';
import { AllContext } from './context/Context.js';


function App() {
  const [form, setForm] = useState("sightings");

  return (
    <div className="App">
      <MyNavBar />
      <ListSightings />

      <AllContext.Provider value={{
        form,
        setForm
      }}>
        {/* {form === "sightings" && <SightingsForm />} */}
        {form === "individual" && <IndividualForm />}
        {form === "species" && <SpeciesForm />}
      </AllContext.Provider>
    </div>
  )
}

export default App
