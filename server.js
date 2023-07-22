//imports express
const express = require("express");
//creates an instance of express and will define the routes
const app = express();
//env is for Heroku
const PORT = process.env.PORT || 3001;

// Parse application/json
app.use(express.json());

// Routes to the "routes" folder HTMLPath.js and apiPath.js
app.use(require("./routes/HTMLPath"));
app.use(require("./routes/apiPath"));

//Starts the server
app.listen(PORT, () => {
    //this tells us if the server is runnning
    //port XXXX is whatever port it's using, in this case 3001.
    console.log("PORT " + PORT);
});