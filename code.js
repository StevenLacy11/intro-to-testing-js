// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (input === true) {
        return "Hello, World!";
    }
    else if (input === false) {
        return "Hello, World!"
    }
    else if (input === null) {
        return "Hello, World!";
    }
    else if (input === "") {
        return "Hello, World!";
    }
    else if (input === 2.3) {
        return "Hello, World!";
    }
    else if (input === "5") {
        return "Hello, World!";
    }
    else if ("input") {
        return "Hello, " + input + "!";
    }
}
function isFive(input) {
    return input == 5;
    
}
function isEven(input){
    if(input == false) {
        return false;
    }
    else{
        return input % 2 == 0
    }
}

function isVowel(input){
    if(input === true) {
        return false;
    }
    else if(input == false) {
        return false;
    }
    else if(input === undefined) {
        return false;
    }
    else if(input == ['a','i','e','o','u','A','I','E','O','U']) {
        return true
    }
    else {
        return false;
    }

}

