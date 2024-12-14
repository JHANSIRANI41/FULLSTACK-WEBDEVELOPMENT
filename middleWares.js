const express = require("express");
const app = express();
let reqCount = 0;

function userCount(req, res, next) {
    reqCount++;
    console.log(reqCount);
    next();

}
//
app.use(userCount);

app.get("/insurance-check", function(req, res) {
    res.json({ msg: "hello" })
})
app.get("/blood-pressure", function(req, res) {

})
app.get("/heart-check", function(req, res) {

})



app.listen(3000);