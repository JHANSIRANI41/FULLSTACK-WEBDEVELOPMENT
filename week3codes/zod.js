const express = require("express");
const app = express();
const zod = require("zod");
app.use(express.json()); //used for extracting the body


//const schema = zod.array(zod.number());

// {
//     email: string
//     password: atleast8 letters
//     country: "IN",
//     "US"
// }

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: z.literal("IN").or(z.literal("US"))
})
app.post('/check', function(req, res) {
    const kidneys = req.body.kidneys;
    // const kidneylength = kidneys.length;

    const response = schema.safeParse(kidneys);
    if (response.success) {
        res.json({
            msg: "is valid"
        })
    } else {
        res.json({
            msg: "invalid"
        })
    }
    // res.send({
    //         response
    //     })
    //res.send("the length of the kidneys is" + kidneylength);
})



app.listen(4001);