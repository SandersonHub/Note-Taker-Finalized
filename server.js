// Importing required modules
const express = require("express");
//file systen
const fs = require("fs");

// Create an instance of express and set up the port
const app = express();
const PORT = process.env.PORT || 3001;

// Goes through the express app which then turns into data phasing 
//express.urlencoded is built in middleware which is used to parse the incoming requests
//extended true, passes to the express.urlended in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static file serving from the "develop" directory
app.use(express.static("develop"));

// Set up routes for HTML and API paths
require("./routes/HTMLPath")(app);
require("./routes/apiPath")(app);


//future deployment would to add a delete function


// Start the server
app.listen(PORT, () => {
    console.log("port" + PORT);
});