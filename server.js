// Dependents for express and fs
const express = require("express");
const fs = require("fs");

// Sets up the express app
var app = express();
var PORT = process.env.PORT || 3001

//handles data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("develop"));

//Routes to HTML and API path
require("./routes/HTMLPath")(app);
require("./routes/apiPath")(app);

//START!!!
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});