// install and import express
const express = require("express");
const path = require("path");
let app = express();
const port = 8000

// Code here



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../../src/assets/users.html"));
});

app.get("/users",(req, res) => {
  res.sendFile(path.join(__dirname + "../../src/assets/user.json"));
});

app.listen(port, () => {
})
// Note: Do not remove this export statement
module.exports = app;