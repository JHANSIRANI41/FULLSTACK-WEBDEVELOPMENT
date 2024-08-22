const express = require("express");
const app = express();
let countreq = 0;

function countRequests(req, res, next) {
    countreq++;
    console.log(countreq);
    next();
}

app.get('/signin', countRequests, function(req, res) {
    res.json({
        msg: "alright"
    })
})

app.listen(5003);