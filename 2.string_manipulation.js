function manipulateString(inputString, callback) {
const manipulatedString = inputString.toUpperCase();
callback(manipulatedString);
}

function logString(manipulatedString) {
    console.log("the manipulated string is:" + manipulatedString);
}

manipulateString("hello, world!", logString);