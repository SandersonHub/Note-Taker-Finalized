//imports path
const path = require("path");

//using Node "module" / exports
module.exports = function(app) {
    
    //get route index
    //callback function will be made
    app.get("/", function(req, res) {
        //route to index.html
        res.sendFile(path.join(__dirname, "../develop/assets/index.html"));
    });
    
    //GET route for the notes 
    app.get("/notes", function(req, res) {
        //route to notes.html
        res.sendFile(path.join(__dirname, "../develop/assets/notes.html"));
    });

}