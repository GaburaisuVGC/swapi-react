const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  axios
    .get("https://swapi.dev/api/?format=json")
    .then((data) => {
      return res.send(data.data.results);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.get("/people", async (req, res) => {

  let nextPage = `https://swapi.dev/api/people/?format=json`;
  let people = [];
  while (nextPage) {
    let nextres = await axios(nextPage)
    const { next, results } = await nextres.data;

    nextPage = next

    people = [...people, ...results]
  } 
  res.send(people);


});

router.get("/people/:id", async (req, res) => {

  axios
    .get(`https://swapi.dev/api/people/${req.params.id}`)
    .then((data) => {
      return res.send(data.data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });


});



router.get("/films", async (req, res) => {

  let nextPage = `https://swapi.dev/api/films/?format=json`;
  let films = [];
  while (nextPage) {
    let nextres = await axios(nextPage)
    const { next, results } = await nextres.data;

    nextPage = next

    films = [...films, ...results]
  } 
  res.send(films);


});

router.get("/films/:id", async (req, res) => {

  axios
    .get(`https://swapi.dev/api/films/${req.params.id}`)
    .then((data) => {
      return res.send(data.data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });


});

router.get("/vehicles", async (req, res) => {

  let nextPage = `https://swapi.dev/api/vehicles/?format=json`;
  let vehicles = [];
  while (nextPage) {
    let nextres = await axios(nextPage)
    const { next, results } = await nextres.data;

    nextPage = next

    vehicles = [...vehicles, ...results]
  } 
  res.send(vehicles);


});

router.get("/vehicles/:id", async (req, res) => {

  axios
    .get(`https://swapi.dev/api/vehicles/${req.params.id}`)
    .then((data) => {
      return res.send(data.data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });


});

router.get("/planets", async (req, res) => {

  let nextPage = `https://swapi.dev/api/planets/?format=json`;
  let planets = [];
  while (nextPage) {
    let nextres = await axios(nextPage)
    const { next, results } = await nextres.data;

    nextPage = next

    planets = [...planets, ...results]
  } 
  res.send(planets);


});

router.get("/planets/:id", async (req, res) => {

  axios
    .get(`https://swapi.dev/api/planets/${req.params.id}`)
    .then((data) => {
      return res.send(data.data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });


});

router.get("/species", async (req, res) => {

  let nextPage = `https://swapi.dev/api/species/?format=json`;
  let species = [];
  while (nextPage) {
    let nextres = await axios(nextPage)
    const { next, results } = await nextres.data;

    nextPage = next

    species = [...species, ...results]
  } 
  res.send(species);


});

router.get("/species/:id", async (req, res) => {

  axios
    .get(`https://swapi.dev/api/species/${req.params.id}`)
    .then((data) => {
      return res.send(data.data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });


});

router.get("/starships", async (req, res) => {

  let nextPage = `https://swapi.dev/api/starships/?format=json`;
  let starships = [];
  while (nextPage) {
    let nextres = await axios(nextPage)
    const { next, results } = await nextres.data;

    nextPage = next

    starships = [...starships, ...results]
  } 
  res.send(starships);


});

router.get("/starships/:id", async (req, res) => {

  axios
    .get(`https://swapi.dev/api/starships/${req.params.id}`)
    .then((data) => {
      return res.send(data.data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });


});

module.exports = router;
