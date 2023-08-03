function greet(name) {
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
    });
}

greet("Anshul").then((message) => console.log(message));