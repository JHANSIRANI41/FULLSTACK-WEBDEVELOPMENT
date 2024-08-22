const express = require("express");
const app = express();
app.use(express.json());

const zod = require("zod");

function validate(arr) {
    //const schema = zod.string();
    // const response = schema.safeParse(arr);
    // console.log(response);


    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(arr);
    console.log(response);
    console.log(response.errors);
    return response;

}
// validate({
//     email: "jhansigmail.com",
//     password: "12345678"
// })


//httpify it
app.post('/signup', function(req, res) {
    const response = validate(req.body)

    if (!response.success) {

        res.json({
            msg: "inputs are invalid"
        })
        return; //early return 
    }
    res.json({ msg: "input valid" })
})

app.listen(2001);