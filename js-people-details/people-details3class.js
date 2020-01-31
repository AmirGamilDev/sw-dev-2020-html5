var namesEntered = [];

for(var i = 0; i < 4; i++) {

    namesEntered[i] = prompt("Please enter name " + (i + 1));

    console.log("Hello " + namesEntered[i]);
}
