const request = require('request');
const fs = require('fs');
const arrayInternet = process.argv.slice(2);
const netRequest = arrayInternet[0];
const netContentToFile = arrayInternet[1];

    
request(netRequest, (error, response, body) => {
    if(error || response){
        console.log('Sorry URL is invalid giving error program will terminate');
        process.exit();
    }
    fs.writeFile(netContentToFile, body, (err) => {
        if(err){
            console.log('File location is invalid ')
            process.exit();
        }
        var stats = fs.statSync(netContentToFile);
        var fileSizeInBytes = stats["size"];
        console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${netContentToFile}`);
    })
})
