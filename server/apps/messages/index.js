const express = require("express");
const {handleGetMessageById, handleGetMessageCount, handleGetAllMessages, handlePostMessage} = require("./handlers.js");
const router = express.Router();

router
    .get("/get/:id", handleGetMessageById)

    .get("nber", handleGetMessageCount)

    .get("/getAll", handleGetAllMessages)

    .get("/post/:message", handlePostMessage);

module.exports = router;
