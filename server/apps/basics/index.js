const express = require("express");

const router = express.Router();

router
    .get("/json/string", (req, res) => {
        res.send("Hello, World!");
    })

    .get("/json/object", (req, res) => {
        res.send({a: 1, b: 2});
    })

    .get("/json/array:", (req, res) => {
        res.send(["Hello", "World", "!"]);
    })

    .get("/test/:messageContent", (req, res) => {
        let {messageContent: msg} = req.params;

        if (msg === undefined) {
            msg = "No content provided";
        }

        res.send({msg});
    })

module.exports = router;
