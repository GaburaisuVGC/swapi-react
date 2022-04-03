import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import People from "./pages/People";
import Films from "./pages/Films";
import Vehicles from "./pages/Vehicles";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Species from "./pages/Species";

import PeoplePages from "./pages/PeoplePages";
import FilmsPages from "./pages/FilmsPages";
import VehiclesPages from "./pages/VehiclesPages";
import PlanetsPages from "./pages/PlanetsPages";
import StarshipsPages from "./pages/StarshipsPages";
import SpeciesPages from "./pages/SpeciesPages";


const App = () => {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/people" element={<><People /></>} />
          <Route path="/people/:id" element={<><PeoplePages /></>} />
          <Route path="/films" element={<><Films /></>} />
          <Route path="/films/:id" element={<><FilmsPages /></>} />
          <Route path="/vehicles" element={<><Vehicles /></>} />
          <Route path="/vehicles/:id" element={<><VehiclesPages /></>} />
          <Route path="/planets" element={<><Planets /></>} />
          <Route path="/planets/:id" element={<><PlanetsPages /></>} />
          <Route path="/starships" element={<><Starships /></>} />
          <Route path="/starships/:id" element={<><StarshipsPages /></>} />
          <Route path="/species" element={<><Species /></>} />
          <Route path="/species/:id" element={<><SpeciesPages /></>} />

        </Routes>
      </div> 
      );
}
export default App;
