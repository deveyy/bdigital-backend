const express = require('express');
const { create, verifyEmail } = require('../controllers/user');
const { userValidator, validate } = require("../middlewares/validator");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Home</h1>")
});

router.post("/create", userValidator, validate ,create); 

router.post("/verify-email", verifyEmail); 

module.exports = router;