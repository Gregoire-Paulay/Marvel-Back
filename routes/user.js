const express = require("express");
const router = express.Router();

// 1 - Route pour créer un utilisateur
router.post("/user", async (req, res) => {
  try {
    console.log("test");
  } catch (error) {
    return res.status(400).json({ message: error.response });
  }
});

module.exports = router;
