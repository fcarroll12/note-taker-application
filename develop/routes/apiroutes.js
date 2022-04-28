const fs = require('fs');
const apiRouter = require('express').Router();
const htmlRouter = require('./htmlroutes');

const { readJsonFile } = require('../db/helpers/fsUtils.js')

apiRouter.use('/', htmlRouter);

// GET Route for notes page
apiRouter.get('/notes', (req, res) => {
  console.log('/notes');
//   readJsonFile('./db/db.json').then((data) => {
//   res.json(JSON.parse(data))
//   console.log(data);
// });
});
  

apiRouter.post('/', (req, res) => {
    console.log(req.body);
  
    const savedNotes = req.body;
  
    if (req.body) {
    //   const newTip = {
    //     username,
    //     tip,
    //     topic,
    //     tip_id: uuidv4(),
    //   };
  
    //   readAndAppend(newTip, './db/tips.json');
    //   res.json(`Tip added successfully 🚀`);
    // } else {
    //   res.error('Error in adding tip');
    // }
  };
})

module.exports = apiRouter;