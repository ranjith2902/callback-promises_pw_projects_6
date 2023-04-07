function greet(name) {
    return new Promise((resolve) => {
        const greeting = "hello, " + name;
        resolve(greeting);
    });
    
}

greet("Ranjith").then((message)=> console.log(message));