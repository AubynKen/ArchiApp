// import Express.js module
const express = require("express");

// import uuid module for generating message ids
const {v4: uuidv4} = require('uuid');

// import route handlers
const {handleIncrease} = require("./handlers/counter");
const {handleHello, handleGetJsonArray, handleGetJsonObject, handleGetTest} = require("./handlers/getting-started");

const app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes corresponding to the getting started exercises
app.get("/", handleHello)
app.get("/json/object", handleGetJsonObject)
app.get("/test/:messageContent", handleGetTest);
app.get("/json/array", handleGetJsonArray);

// counter increase exercise
app.get("/count/inc", handleIncrease);

// relating to messages
const allMessages = [
    {id: "0", content: "Hello World"},
    {id: "1", content: "foobar"},
    {id: "2", content: "CentraleSupelec Forever"}
];

app.get("/msg/get/:id", (req, res) => {
    const {id: messageId} = req.params;
    const message = allMessages.find(m => m.id === messageId);

    if (message === undefined) {
        return res.json({code: 0});
    }

    res.json({
        code: 1,
        message: message.content
    });
})

app.get("/msg/nber", (req, res) => {
    const numberOfMessages = allMessages.length;
    res.send(numberOfMessages)
})

app.get("/msg/getAll", (req, res) => {
    const contentArr = allMessages.map(element => element.content);
    res.json(contentArr);
})

app.get("/msg/post/:message", (req, res) => {
    const {message} = req.params;
    const id = uuidv4();

    allMessages.push({
        id,
        content: unescape(message)
    });

    res.send(id);
})

app.listen(8080);
console.log("App listening on port 8080...");


