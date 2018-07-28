let path =  require('path');
let fs = require('fs');

let findData = path.join(__dirname, "../data.json");
let packerData = path.join(__dirname, "../moreData.json");

fs.readFile(findData, {
    encoding: "UTF-8"
},(err,data) => {
    let moreData = JSON.parse(data);
    console.log(moreData.name);
    console.log(moreData.shirtColor);
})

fs.readFile(packerData, {
    encoding:"UTF-8"
}, (err, data2) => {
   let packers = JSON.parse(data2);
   console.log(packers.team);
   console.log(packers.location);
})