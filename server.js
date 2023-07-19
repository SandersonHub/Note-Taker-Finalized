// Dependents for express and fs
const express = require("express");
const fs = require("fs");

// Sets up the express app
var app = express();
//env for heroku
var PORT = process.env.PORT || 3001

//Parse URL
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Setups middleware and looking for static files
app.use(express.static("develop"));

//Routes to HTML and API path
require("./routes/HTMLPath")(app);
require("./routes/apiPath")(app);

//START!!!
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});