const express = require('express');
require("dotenv").config();
// 4LocalDev
const cors = require("cors")










const app = express();
const PORT = process.env.port || 4000;
// 4LocalDev
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.get("/", (req, res) =>
{
    console.log("get req home")
    res.json({ "Server": "Working" })
});

app.get("/api", (req, res) =>
{
    console.log("get req home")
    res.json({ "api": "Working" })
});


app.post("/api/newsletter", async (req, res) =>
{
    email = await req.body.email;
    console.log(email);
    res.send("email Added to newsletter")
})















app.listen(PORT, () =>
{
    console.log(`Server is Listening on ${PORT}`)
});

module.exports = app;
