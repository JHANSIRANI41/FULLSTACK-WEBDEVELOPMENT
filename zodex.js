//zod is independent of express
// const zod = require("zod");

// function validator(arr) {
//     const schema = zod.array(zod.number());
//     const response = schema.safeParse(arr);
//     return response;



// }
// console.log(validator(["1", 2, 3]));
const express = require("express");
const app = express();
app.use(express.json());

const zod = require("zod");

function validator(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(7)
    })
    const response = schema.safeParse(obj);
    console.log(response);


}
//console.log(validator({ email: "ammugmail.com", password: "1232143" }));

app.post("/signin", function(req, res) {
    const response = validator(req.body);
    if (!(response.success)) {
        res.json({ msg: "inputs are invalid" })
    }
    return;
});
app.listen(3007);