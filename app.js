const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const publicPath = path.join(__dirname, "public");

const IPADDRESS = "localhost";

app.use(express.static(publicPath));

app.get("/download", (req, res) => {

    console.log("Download Request");

    const readStream = fs.createReadStream("sample.pdf");

    res.set('Content-Type', 'binary/octet-stream');
    res.set('Content-Disposition', 'attachment; filename="' + "sample.pdf" + '"');
    res.set('Content-Length', 3028); 

    readStream.pipe(res);

    readStream.on("close", () => {
        console.log("Finished Download Request\n")
    })
})

app.get("*",(req, res) => {

    res.sendFile(path.join(publicPath,"index.html"))
})

app.listen(3000, IPADDRESS, () => {
    console.log("listening")
});