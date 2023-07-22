//file system
const fs = require("fs");
//reads the db.json file
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
module.exports = function(app) {

    //GET
    //routes to //api/notes
    //takes to parameters req and res
    //when a GET request is made this function will be called
    app.get("/api/notes", function(req, res) {
       res.json(data);
    });
    //GET
    app.get("/api/notes/:id", function(req, res) {
        //sends a JSON back to the client
        //req.params.id is the id of the note
        res.json(data[Number(req.params.id)]);
    });
    //POST
    app.post("/api/notes", function(req, res) {
        //req.body is the JSON post sent from the user
        let newNote = req.body;
        //sets the id of the note
        let uniqueId = (data.length).toString();
        //consonle.log the id
        console.log(uniqueId);
        //pushes the new note to the data array
        newNote.id = uniqueId;
        data.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
         //console.log if an error occurs
            if (err) throw (err);        
        }); 
        res.json(data);    
    });
};