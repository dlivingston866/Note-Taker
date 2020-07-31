let notes = require("../db/db.json");
const fs = require('fs');

module.exports = function(app) {

    // get "api/notes"
    app.get("/api/notes", (_req, res) => {
        return res.json(notes);
    });
    //post "api/notes"
    app.post("/api/notes", (req, res) => {
        console.log(req.body);
        notes.push(req.body);
        res.json(req.body);
    });
    //delete "api/notes"
    app.delete("/api/notes/:id", (req, res) => {
        console.log(req.body);


    });
};