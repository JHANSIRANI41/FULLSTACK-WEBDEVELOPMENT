const express = require("express");
const app = express();

app.get("/hospital-check", function(req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;


    console.log(kidneyId);
    console.log(username);
    console.log(password);

    if (!(username === "jhansi" && password === "pass")) {
        res.status(400).json({ msg: "something went up with inputs" })
            //return;
    }

    console.log("hello");
    if (!(kidneyId == 1 || kidneyId == 2)) {
        res.status(400).json({ msg: "something went up with inputs" })
        return;
    }



    res.status(200).json({ msg: "fine " })
})

// app.get("/hello", function(req, res, next) {
//     console.log("call1");
//     next();

// }, function(req, res, next) {
//     console.log("call2");
//     next();
// }, function(req, res) {
//     console.log("call3");
//     res.json({ "msg": "done " })
// })

app.listen(3001);