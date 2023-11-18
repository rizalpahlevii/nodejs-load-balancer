const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const appName = process.env.APP_NAME || "NodeJS";

app.get("/", (req, res) => {
    res.json({
        name: appName,
        host: req.hostname,
        headers: req.headers,
    });
});
app.listen(port, () => {
    console.log("App : " + appName + " listening on port " + port);
});
