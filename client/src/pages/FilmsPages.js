import React from "react";
import "../App.css";
import FilmsPage from "../components/films_page";

import Header from "../components/header";




const FilmsPages = () => {
  return (
    <section>
      <Header />
      <FilmsPage />

    </section>
  );
}

export default FilmsPages;