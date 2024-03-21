// import Express.js module
const express = require("express");
const {basicsRouter, counterRouter, messagesRouter, postBoardRouter} = require("./apps");

const app = express();

// allow cross-origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// counter service with state
app.use("/cpt", counterRouter);

// relating to messaging in the initial app
app.use("/msg", messagesRouter);

// routes corresponding to the getting started exercises
app.use("/", basicsRouter);

// we've decided to set up a separate router with different routes
// to have an api that is more restful
app.use("/post-board", postBoardRouter)


app.listen(8080);
console.log("App listening on port 8080...");


