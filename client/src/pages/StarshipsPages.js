import React from "react";
import "../App.css";

import Header from "../components/header";
import StarshipsPage from "../components/starships_page";



const StarshipsPages = () => {
  return (
    <section>
      <Header />
      <StarshipsPage/>

    </section>
  );
}

export default StarshipsPages;