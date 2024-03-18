const express = require("express");
const {handleIncrease, handleQuery} = require("./handlers");

const router = express.Router();

router
    .get("/inc", handleIncrease)
    .get("/query", handleQuery)

module.exports = router;
