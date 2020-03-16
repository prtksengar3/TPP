const {exec} = require("child_process")
const ChromeLauncher = require('chrome-launcher');
const open = require('open');

function takeRequest(data,success,failure){
    if(data%2==0){
        success();
    }
    else{
        failure();
    }
}
function success(){
    console.log("Your request was completed");
    ChromeLauncher.launch({
        startingUrl: 'https://facebook.com'
      }).then(chrome => {
        console.log(`Chrome debugging port running on ${chrome.port}`);
      });
    
}
function failue(){
    console.log("Some errors occurred");
}

takeRequest(17,success,failue);

takeRequest(18,success,failue);