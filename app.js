const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (_req, res) => {
    res.sendStatus(200);
});

app.listen(3000, async () => {
    console.log(`App is running  on port: 3000`);
});