// Importing required modules
const express = require("express");
const fs = require("fs");

// Create an instance of express and set up the port
const app = express();
const PORT = process.env.PORT || 3001;

// Parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static file serving from the "develop" directory
app.use(express.static("develop"));

// Set up routes for HTML and API paths
require("./routes/HTMLPath")(app);
require("./routes/apiPath")(app);

// Start the server
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});
