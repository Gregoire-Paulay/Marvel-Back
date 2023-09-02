const express = require("express");
const router = express.Router();

const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid = require("uid2");

//import modèle
const User = require("../models/User");

// 1 - Route pour créer un utilisateur
router.post("/user/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("req.body ==>", req.body);

    const foundUser = await User.findOne({ email: email }); // On cherche si un utilisateur avec l'email envoyer existe déjà en BDD, si l'adresse email n'existe pas en BDD renvoi   null

    if (!username || !email || !password) {
      return res
        .status(400)
        .json("Renseignez tout les paramètres pour pouvoir vous inscrire");
    } else {
      if (foundUser === null) {
        // C'est bien un nouvel utilisateur (email non existant en BDD)

        const salt = uid(16);
        const userToken = uid(24);
        const saltyPassword = password + salt;
        const hash = SHA256(saltyPassword).toString(encBase64);

        // Création nouvel utilisateur
        const newUser = new User({
          email: email,
          account: { username: username },
          token: userToken,
          hash: hash,
          salt: salt,
        });

        // Sauvegarde de l'utilsateur en BDD
        await newUser.save();
        const responseObject = {
          email: email,
          account: { username: username },
        };
        console.log("responseObject ===>", responseObject);
        return res.status(201).json(responseObject);
      } else {
        return res.status(409).json("Cette adresse mail est déjà enregstré");
      }
    }
  } catch (error) {
    return res.status(400).json({ message: error.response });
  }
});

// 2 - Route pour se login
router.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("req.body ===>", req.body);
    const foundUser = await User.findOne({ email: email });
    console.log(foundUser);

    if (foundUser) {
      const newSaltypassword = password + foundUser.salt;
      const newHash = SHA256(newSaltypassword).toString(encBase64);
      if (newHash === foundUser.hash) {
        const responseObject = {
          _id: foundUser._id,
          token: foundUser.token,
          account: { username: foundUser.account.username },
        };
        return res.status(200).json(responseObject);
      } else {
        return res
          .status(400)
          .json({ message: "l'email ou mot de passe incorrecte" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "l'email ou mot de passe incorrecte" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.response });
  }
});

module.exports = router;
