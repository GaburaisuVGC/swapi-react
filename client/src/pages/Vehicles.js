import React from "react";
import "../App.css";

import Header from "../components/header";

import SearchVehicles from "../components/search_vehicles";



const Vehicles = () => {
  return (
    <section>
      <Header />
      <SearchVehicles />

    </section>
  );
}

export default Vehicles;