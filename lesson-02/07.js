let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarriedCopy = structuredClone(passportMarried);

passportMarriedCopy.married = true

console.log(passportMarried);

console.log(passportMarriedCopy);