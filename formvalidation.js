class FormValidation {

    constructor() { 
        let userInfo = new Map();
    } 

    validateInfo(username, password) {    
        if (username.length < 0 || password.length < 0) {
            return false;
        }  

        if (username.length < 4 || password.length < 6) {
            return false;
        }   

        if (username.length > 20) {
            return false;
        }

        let usernameIsValid = this.checkUserName(username);
        let passwordIsValid = this.checkPassword(password); 

        return usernameIsValid && passwordIsValid;
    }    

    checkUserName(username) {
        for (let i = 0; i < username.length; i++) {
            if (!this.isLetterOrDigit(username[i])) {
                return false;
            }
        } 
        return true;
    }  

    checkPassword(password) {
        let count = 0; 
        for (let i = 0; i < password.length; i++) {
            if (this.isDigit(password[i])) {
                count++;
            }
        } 
        return count > 0;
    }

    isLetterOrDigit(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    } 

    isDigit(char) {
        return /^[0-9]$/.test(char);
    }

} 

let instance = new FormValidation();

// Testing Code 
let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

rl.question("Enter Username: ", (answer) => {  
    rl.question("Enter Password: ", (p) => { 
        console.log(instance.validateInfo(answer, p));  
        rl.close();
    })  
});