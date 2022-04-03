import React from "react";
import "../App.css";

import Header from "../components/header";

import SearchPeople from "../components/search_people";



const People = () => {
  return (
    <section>
      <Header />
      <SearchPeople />

    </section>
  );
}

export default People;