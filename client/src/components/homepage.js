import React from "react";
import "../App.css";


const Homepage = () => {
  return (
      <section className="container-md">
            <div>
                <h1>Welcome to Swapi-react</h1>
                <p>Swapi-react is a React app made by </p><a href="https://github.com/GaburaisuVGC/swapi-react">Matthieu Barbe</a>
                <p>You can search every object present in the SWAPI, depending on their category.</p>
            </div>
      </section>
  );
}

export default Homepage;