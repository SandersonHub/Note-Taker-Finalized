const path = require("path");

module.exports = function(app) {
    
    //get route endpoint
    //callback function will be made
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../develop/assets/index.html"));
    });
    
    //GET route for the notes 
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../develop/assets/notes.html"));
    });

}