window.addEventListener("load", function(event) {
    var person1 = new Person("Amir", "Egypt");

    var person2 = new Person("", "Ireland");

    // this won't cause an error as the person1 object is valid
    try {
        savePersonToLocalStorage(person1);
    } catch(error) {
        console.log(error.message);
    }

    // this will cause an error as the person2 object is NOT valid
    try {
        savePersonToLocalStorage(person2);
    } catch(error) {
        console.log(error.message);
    }

    // this will cause an error - the throw is done for us in the JSON.parse code
    try {
        JSON.parse("a");
    } catch(error) {
        console.log(error);
    }
});

function savePersonToLocalStorage(person) {
    if(person.name === null || person.name === ""
       || person.countryOfBirth === null || person.countryOfBirth === "") {
        throw new Error("Invalid property state");
    }
}

function Person(name, country) {
    this.name = name;
    this.countryOfBirth = country;
}
