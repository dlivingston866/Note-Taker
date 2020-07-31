const path = require("path");

module.exports = function(app) {

    module.exports = function(app) {
        var path = require("path");
        console.log("path");
    };
    //Create a set of routes for displaying the HTML



    //If no matching route is found default to home.

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/index.html"));
        console.log("./public/index.html");
    });
};