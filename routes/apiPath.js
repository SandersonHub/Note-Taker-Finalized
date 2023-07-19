//importing the promises
//Assigned const to fs
const fs = require("fs").promises;

let data;

//async will return the promise
//try will attempt to catc h an error 
//await waiting for readFile() from fs 
async function readData() {
  try {
    const fileContents = await fs.readFile("./db/db.json", "utf8");
    data = JSON.parse(fileContents);
  } catch (error) {
    console.error("error writing", error);
    data = [];
  }
}

async function writeData() {
  try {
    await fs.writeFile("./db/db.json", JSON.stringify(data));
  } catch (error) {
    console.error("error", error);
  }
}

module.exports = (app) => {
  readData().catch((error) => console.error("reading initial error", error));

  app.get("/api/notes", (req, res) => {
    res.json(data);
  });

  app.get("/api/notes/:id", (req, res) => {
    const noteId = Number(req.params.id);
    const note = data.find((note) => note.id === noteId.toString());
    res.json(note);
  });

  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    const uniqueId = data.length.toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    data.push(newNote);

    writeData().catch((error) => console.error("writing error", error));

    res.json(data);
  });
};
