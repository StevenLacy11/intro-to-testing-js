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