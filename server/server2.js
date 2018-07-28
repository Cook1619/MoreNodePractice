let path = require('path');
let fs = require('fs');

let dataPath = path.join(__dirname, "../moreData.json");

fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, information) => {
    let packersInfo = JSON.parse(information);
    console.log(packersInfo.team);
    console.log(packersInfo.location);
    console.log(packersInfo.championships);
})