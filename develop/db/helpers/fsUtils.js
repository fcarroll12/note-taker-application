const { readFile } = require('fs').promises;

const readJsonFile = (filePath) => {
    return readFile(filePath, 'utf-8').then((data) => JSON.parse(data));

};

// const appendJsonFile = (filePath, newData) => {
//     return readJsonFile(filePath).then((data) => {
//         data.push(newData);
//         return writeFile(filePath, JSON.stringify(data));
//     });
// };

module.exports = { readJsonFile };