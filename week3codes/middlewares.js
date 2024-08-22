const express = require("express");
const app = express();

function inputvalidator(req, res, next) {


    const { username, password } = req.headers;
    if (username != "jhanu" || password != "12345") {
        res.json({
            msg: "incorrect inputs username and password"

        })
    } else {
        next();
    }

}

function kindeyvalidator(req, res, next) {

    const kidneyId = req.query;
    console.log(kidneyId);
    if (kidneyId != '1' && kidneyId != '2') {
        res.json({
            msg: "incorrect inputs kidney"

        })
    } else {
        next();
    }

}

app.get('/waitingroom', inputvalidator, kindeyvalidator, function(req, res) {

    res.json({

        msg: "done with the checks,now uh can consult the doctor"
    })
})
app.get('/doctor', inputvalidator, kindeyvalidator, function(req, res) {
    res.json({

        msg: "done with doctor checkup"
    })
})


app.listen(3002);