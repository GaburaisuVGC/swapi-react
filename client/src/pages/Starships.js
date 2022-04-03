import React from "react";
import "../App.css";

import Header from "../components/header";

import SearchStarships from "../components/search_starships";



const Starships = () => {
  return (
    <section>
      <Header />
      <SearchStarships />

    </section>
  );
}

export default Starships;