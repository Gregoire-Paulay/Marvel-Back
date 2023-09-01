const express = require("express");
const router = express.Router();
const axios = require("axios");

// 1 - Route qui donne une liste de comics
router.get("/comics", async (req, res) => {
  try {
    const title = req.query.title || "";
    const skip = req.query.skip || "";
    const limit = req.query.limit || "";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}&skip=${skip}&limit=${limit}`
    );
    console.log(response.data);
    return res.status(201).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// 2 - Route qui lis les infos d'un comics en particulier
router.get("/comic/:comicId", async (req, res) => {
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
router.get("/characters", async (req, res) => {
  try {
    const name = req.query.name || "";
    const skip = req.query.skip || "";
    const limit = req.query.limit || "";

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&skip=${skip}&limit=${limit}`
    );
    console.log(response.data);
    return res.status(201).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// 4 - Route qui donne la liste des comics lié à 1 personnage
router.get("/comics/:characterId", async (req, res) => {
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

// 5 - Route qui renvoie les infos spécifique d'un personnage
router.get("/character/:characterId", async (req, res) => {
  try {
    console.log(req.params);
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.API_KEY}`
    );

    console.log(response.data);
    return res.status(201).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
