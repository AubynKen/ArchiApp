// import Express.js module
const express = require("express");
const {basicsRouter, counterRouter, messagesRouter} = require("./apps");

const app = express();

// allow cross-origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// counter service with state
app.use("/cpt", counterRouter);


// relating to messaging
app.use("/msg", messagesRouter);

// routes corresponding to the getting started exercises
app.use("/", basicsRouter);


app.listen(8080);
console.log("App listening on port 8080...");


