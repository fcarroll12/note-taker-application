
const { readJsonFile } = require('../db/helpers/fsUtils');
const path = require('path');
const notesRouter = require('express').Router();
// const htmlRouter = require('./htmlroutes');

// const { readJsonFile } = require('../db/helpers/fsUtils.js')

// apiRouter.use('/', htmlRouter); 

// GET Route for notes that returns array of all notes
notesRouter.get('/', (req, res) => {
  readJsonFile(path.join(__dirname,"../db/db.json"))
  .then((notes) => res.json(notes))
  .catch((err) => {
    console.log(err);
    res.status(500).json("Server error");
  });
}); 
//   readJsonFile('./db/db.json').then((data) => {
//   res.json(JSON.parse(data))
//   console.log(data);
// });

  
//Adds a note from db.json  /api/notes
notesRouter.post('/', (req, res) => {
  res.json({});
});

notesRouter.delete('/:id', (req,res) => {
  res.json({});
});

module.exports = notesRouter;