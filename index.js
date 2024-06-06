//importing express
//npm init -y
const express = require("express");
//bring express locally by using cmd
//npm install express

const app = express();
const bodyParser = require("body-parser")
const port = process.env.PORT || 3005;

//req: headers,body,query parameters
app.use(bodyParser.json());

app.get('/', function(req, res) {

    res.send("hello world");
})

app.post('/hell', function(req, res) {
    const message = req.body.message;
    const val = req.query.val;
    console.log(message);
    console.log(val);
    res.send({
        msg: "hello post man"
    })
})

app.listen(port,
    function(req, res) {
        console.log(`running on ${port}`)
    }
);