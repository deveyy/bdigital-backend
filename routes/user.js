const express = require('express');
const { create } = require('../controllers/user');
const { userValidator, validate } = require("../middlewares/validator");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Home</h1>")
});

router.post("/create", userValidator, validate ,create); 

module.exports = router;