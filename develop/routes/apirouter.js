// const path = require('path'); 
const apiRouter = require('express').Router();
const notesRouter = require('./notesrouter');

apiRouter.use('/notes', notesRouter);


// htmlRouter.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/notes.html'))
// );

// htmlRouter.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// );

module.exports = apiRouter;