const express = require("express");
const {
    handleGetMessageById,
    handleGetMessageCount,
    handleGetAllMessages,
    handlePostMessage,
    handleDeleteMessage
} = require("./handlers");
const router = express.Router();

router
    .get("/get/:id", handleGetMessageById)

    .get("/nber", handleGetMessageCount)

    .get("/getAll", handleGetAllMessages)

    .get("/post/:message", handlePostMessage)

    .get("/del/:id", handleDeleteMessage);

module.exports = router;
