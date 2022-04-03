import React from "react";
import "../App.css";

import Header from "../components/header";
import VehiclesPage from "../components/vehicles_page";



const VehiclesPages = () => {
  return (
    <section>
      <Header />
      <VehiclesPage />

    </section>
  );
}

export default VehiclesPages;