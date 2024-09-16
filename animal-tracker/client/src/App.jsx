import { useState, useEffect } from 'react';
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

  const [sightings, setSightings] = useState([]);

  const loadSightings = () => {
    fetch("http://localhost:8080/api/sightings")
      .then((response) => response.json())
      .then((sightings) => {
        setSightings(sightings);
      }
    );
  }

  useEffect(() => {
    loadSightings();
  }, []);

  return (
    <div className="App">
      <MyNavBar />
      <ListSightings setSightings={setSightings} sightings={sightings} loadSightings={loadSightings}/>
      {/* <IndividualForm loadSightings={loadSightings}/> */}
      {/* <SpeciesForm /> */}
      <AllContext.Provider value={{
        form,
        setForm
      }}>
        {/* {form === "sightings" && <SightingsForm />} */}
        {/* {form === "individual" && <IndividualForm />}
        {form === "species" && <SpeciesForm />} */}
      </AllContext.Provider>
    </div>
  )
}

export default App
