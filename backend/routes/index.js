const express = require('express');
const educationRouter = require("./education");
const bussinessRouter = require("./bussiness");

const router = express.Router();

router.use("/user", educationRouter);
router.use("/user", bussinessRouter);

module.exports = router;