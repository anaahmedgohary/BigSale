const express = require('express');
require("dotenv").config();
// 4LocalDev
const cors = require("cors");

// https
const https = require('https');
const fs = require('fs');
const httpsOptions = process.env.HTTPS_OPTIONS || {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem')
} || "empty";









const app = express();
const PORT = process.env.port || 4000;
// 4LocalDev
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sub routes
app.use("/api/payment", require("./routes/paytaps"));


// Api Routes
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














if (!process.env.NODE_ENV || process.env.NODE_ENV !== "development")
{
    console.log(process.env.NODE_ENV)
    console.log(httpsOptions)
    console.log()
    app.listen(PORT, () =>
    {
        console.log(`server http on port ${PORT}`)
    });
} else
{

    https.createServer(httpsOptions, app).listen(PORT, () =>
    {
        console.log(`Server https on ${PORT}`);
    });
}


module.exports = app;
