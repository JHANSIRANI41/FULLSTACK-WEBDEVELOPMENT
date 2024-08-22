const express = require('express');
const app = express();
//app.use(express.json());

app.get('/health-check', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if (username != "jhanu" || password != "12345") {
        res.status(200).json({
            msg: "something wrong with inputs"
        })
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "something wrong with inputs"

        })
        return
    }


    res.json({
        msg: "your kidney is fine!"
    })


});




app.listen(5003);