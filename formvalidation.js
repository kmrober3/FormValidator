class FormValidation {

    constructor() { 
        let userInfo = new Map();
    } 

    validateInfo() {

    }
} 


// Testing Code 
let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

rl.question("Enter Username: ", (answer) => ({ 
    // ToDo
}))