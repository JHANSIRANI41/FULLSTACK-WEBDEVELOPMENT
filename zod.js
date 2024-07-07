const express = require("express");
const zod = require("zod");
const schema = zod.array(zod.number());
const app = express();

//to extract the body this is needed
//this should placed at top always
app.use(express.json());


app.post("/health-checkup", function(req, res) {
    //do something with the kidney
    //input is an array
    const kidneys = req.body.kidneys;

    const response = schema.safeParse(kidneys);
    res.send({
        response
    })
});


app.listen(3006);