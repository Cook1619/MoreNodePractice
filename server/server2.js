let path = require('path');
let fs = require('fs');
const request = require('request');


let dataPath = path.join(__dirname, "../jsonPlaceholder.json");

request('https://jsonplaceholder.typicode.com/posts', (err, res, body) => {

    if(err) console.log(err);

    JSON.parse(body).forEach((title)=>{
        fs.appendFileSync(dataPath, title.title + '\n');
    });
});


// fs.readFile(dataPath, {
//     encoding: "UTF-8"
// }, (err, information) => {
//     let packersInfo = JSON.parse(information);
//     console.log(packersInfo.team);
//     console.log(packersInfo.location);
//     console.log(packersInfo.championships);
// })