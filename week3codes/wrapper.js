const express = require('express');
const app = express();
//app.use(express.json());


function inputvalidation(username, password) {
    if (username == "jhanu" && password == "12345") {
        return true;
    }
    return false;
}

function kidneyValidation(kidneyId) {
    if (kidneyId == 1 || kidneyId == 2) {
        return true;
    }
    return false;
}
app.get('/health-check', function(req, res) {
    // const username = req.headers.username;
    // const password = req.headers.password;
    // const kidneyId = req.query.kidneyId;
    if (!inputvalidation(req.headers.username, req.headers.password)) {
        res.status(200).json({
            msg: "something wrong with inputs"
        })
        return;
    }

    if (!kidneyValidation(req.query.kidneyId)) {
        res.status(400).json({
            msg: "something wrong with inputs"

        })
        return
    }


    res.json({
        msg: "your kidney is fine!"
    })


});

app.listen(5004);