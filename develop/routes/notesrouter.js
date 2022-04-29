const { v4: uuidv4 } = require('uuid');
const { readJsonFile,appendJsonFile } = require('../db/helpers/fsUtils');
const path = require('path');
const notesRouter = require('express').Router();
const errorMessage = res.status(500).json("Server error");
// const htmlRouter = require('./htmlroutes');

// const { readJsonFile } = require('../db/helpers/fsUtils.js')

// apiRouter.use('/', htmlRouter); 

// GET Route for notes that returns array of all notes
notesRouter.get('/', (req, res) => {
  readJsonFile(path.join(__dirname,"../db/db.json"))
  .then((notes) => res.json(notes))
  .catch((err) => {
    console.log(err);
    errorMessage;
  });
}); 
  
//POST ROUTE: Adds a note to db.json  /api/notes
notesRouter.post('/', (req, res) => {
  const { title, text } = req.body;
  
  const newNote = {
    id: uuidv4(),
    title,
    text
  };
  let noteError ="";

  if (newNote.title.length === 0 || newNote.title.length > 50) {
    noteError = "You must have a title for your note.";
  }
  if (newNote.title.text === 0 || newNote.title.text > 500) {
    noteError = "You must type something in your note!";
  }

  if (noteError) {
    return res.status(400).json(noteError);
  }


  appendJsonFile(path.join(__dirname,"../db/db.json"), newNote)
  .then(() => {
    res.json(newNote);
  }).catch((err) => {
    console.log(err);
    errorMessage;
  });
});

notesRouter.delete('/:id', (req,res) => {
  res.json({});
});

module.exports = notesRouter;