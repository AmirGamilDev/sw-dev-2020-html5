window.addEventListener("load", function() {
    var button = document.getElementById("save");

    button.addEventListener("click", saveFunction);

    display();
});

function saveFunction(event) {
    var name = document.getElementById("name").value;

    var country = document.getElementById("country").value;

    var person = new Person(name, country);

    var personJsonString = JSON.stringify(person);

    localStorage.setItem("person", personJsonString);
}

function Person(name, country) {
    this.name = name;
    this.countryOfBirth = country;
}

function display() {
    var storedObjectJsonString = localStorage.getItem("person");

    if(storedObjectJsonString !== null) {
        var storedObject = JSON.parse(storedObjectJsonString);

        var nameField = document.getElementById("name");
        var countryField = document.getElementById("country");

        nameField.value = storedObject.name;
        countryField.value = storedObject.countryOfBirth;
    }
}
