require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Route de base du serveur
app.get("/", (req, res) => {
  try {
    return res.status(200).json("Bienvenue 😃");
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Mes routes
// 1 - Route qui donne une liste de comics
app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    return res.status(201).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// 2 - Route qui lis les infos d'un comics en particulier
app.get("/comic/:comicId", async (req, res) => {
  try {
    console.log(req.params);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.comicId}?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    return res.status(201).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// 3 - Route qui donne la liste de tous les personnages Marvel
app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    return res.status(201).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// 4 - Route qui donne la liste des comics lié à 1 personnage
app.get("/comics/:characterId", async (req, res) => {
  try {
    console.log(req.params);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );
    console.log(response.data);
    return res.status(201).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Fin du serveur
app.all("*", (req, res) => {
  return res.status(404).json("Cette page n'existe pas: essaye autre chose");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
