const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/develop" });
});

app.use("/api", require("./routes/apiPath"));

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
