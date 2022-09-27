const path = require("path")
const data = require("./data/data")
const express = require("express"),
    app = express();

app.use(express.static(path.join(__dirname, 'public')));
//setting view engine to ejs
app.set("view engine", "ejs");

// ROUTERS
app.get("/", function (req, res) {
    res.render("index", data);
});
app.get("/cars", function (req, res) {
    res.render("cari-mobil", data);
});
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1> 404 </h1>');
});

app.listen(8080, function () {
    console.log("Server is running on port 8080 ");
});

