class FormValidation {

    constructor() { 
        this.userInfo = new Map();
    } 

    validateInfo(username, password) {    
        if (username.length === 0 || password.length === 0) {
            throw new Error("Invalid input");
        }  

        if (username.length < 4 || password.length < 6) {
            throw new Error("Invalid input");
        }   

        if (username.length > 20) {
            throw new Error("Invalid input");
        } 

        if (this.userInfo.has(username)) {
            throw new Error("Username exist");
        }

        this.checkUserName(username);
        this.checkPassword(password);  
        this.userInfo.set(username, password);
    }    

    checkUserName(username) {
        for (let i = 0; i < username.length; i++) {
            if (!this.isLetterOrDigit(username[i])) {
                throw new Error("Invalid input");;
            }
        } 
    }  

    checkPassword(password) {
        let count = 0; 
        for (let i = 0; i < password.length; i++) {
            if (this.isDigit(password[i])) {
                count++;
            }
        }  
        if (count == 0) {
            throw new Error("Invalid input");
        }
    }

    isLetterOrDigit(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    } 

    isDigit(char) {
        return /^[0-9]$/.test(char);
    }

} 

let instance = new FormValidation();  
let userInput = "";

document.getElementById("clickMe").addEventListener("click", (event) => {
    try {
        let userInput = document.getElementById("usrname").value; 
        let userPassword = document.getElementById("pswrd").value; 
        instance.validateInfo(userInput, userPassword);   
        document.getElementById("success").textContent = "You're Registered!!";
        document.getElementById("failure").textContent = ""; 
    } catch (err) {
        console.log("Caught error:", err.message); 
        let usernameBox = document.getElementById("usrname");
        let passwordBox = document.getElementById("pswrd");

        usernameBox.value = "";
        usernameBox.placeholder = "Invalid input";

        passwordBox.value = "";
        passwordBox.placeholder = "Invalid input"; 
        
        document.getElementById("failure").textContent = "Invalid Input!!!";
        document.getElementById("success").textContent = "";
    }
});

// Testing Code 
/*let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

rl.question("Enter Username: ", (answer) => {  
    rl.question("Enter Password: ", (p) => { 
        console.log(instance.validateInfo(answer, p));  
        rl.close();
    })  
});*/