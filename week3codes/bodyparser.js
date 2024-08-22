const express = require("express");
const app = express();
app.use(express.json()); //used for extracting the body


app.post('/check', function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;

    res.send("the length of the kidneys is" + kidneylength);
})


app.use(function(err, req, res, next) {
    res.json({
        msg: "something up with your inputs"
    })
});
app.listen(2001);