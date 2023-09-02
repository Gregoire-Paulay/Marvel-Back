require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

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

// Import Route comic-character
const ComicCharacterRoutes = require("./routes/comic-character");
app.use(ComicCharacterRoutes);

// Import Route User
const UserRoute = require("./routes/user");
app.use(UserRoute);

// Fin du serveur
app.all("*", (req, res) => {
  return res.status(404).json("Cette page n'existe pas: essaye autre chose");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
