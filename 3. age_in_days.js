const person = {
    firstName: "Ranjith",
    lastName: "P",
    age: 27,

};

function ageInDays(personObject, callback) {
    const fullName = personObject.firstName + personObject.lastName;
    const ageInDays = personObject.age *365;
    callback(fullName, ageInDays);
    
}

function logResult(fullName, ageInDays) {
    console.log ("the person's full name is :" + fullName, "and their age in days is" + ageInDays);

    
}

ageInDays(person, logResult);