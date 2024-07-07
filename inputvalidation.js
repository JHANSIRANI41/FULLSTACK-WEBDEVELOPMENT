const express = require("express");
const app = express();

//to extract the body this is needed
//this should placed at top always
app.use(express.json());


app.post("/health-checkup", function(req, res) {
    //do something with the kidney
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    //if something goes wrong with user input it either reaches the end user (or) global catch if we have already
    // written this
    res.send("your length is " + kidneyLength);
});

//global catch
//it has 4 inputs
app.use(function(err, req, res, next) {
    res.json({ msg: "SOMETHING UP WITH INPUTS" })
})

app.listen(3004);