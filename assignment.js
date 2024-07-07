const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());


const ALL_USERS = [{
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array

    //try to do this with find 

    //const userExists = ALL_USERS.find(u => (u.username == username && u.password == password));

    //general 

    let userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (username == ALL_USERS[i].username && password == ALL_USERS[i].password) {
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
        user: ALL_USERS.filter(function(value) {
            if (value.username == username) {
                return false;
            } else {
                return true;
            }
        })

    })
});

app.listen(3001)