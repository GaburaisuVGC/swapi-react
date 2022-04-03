import React from "react";
import "../App.css";

import Header from "../components/header";
import Homepage from "../components/homepage";



const Home = () => {
  return (
        <section className="Acceuil">
            <Header />
            <Homepage />
        </section>
  );
}

export default Home;