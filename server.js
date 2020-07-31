const express = require("express");
let app = express();
const path = require("path");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
let PORT = process.env.PORT || 5000

require("./routes/apiRoutes.js")(app);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});