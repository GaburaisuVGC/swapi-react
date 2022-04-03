import React from "react";
import "../App.css";

import Header from "../components/header";

import SearchPlanets from "../components/search_planets";



const Planets = () => {
  return (
    <section>
      <Header />
      <SearchPlanets />

    </section>
  );
}

export default Planets;