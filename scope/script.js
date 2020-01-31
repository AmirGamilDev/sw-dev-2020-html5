var global = 3;

window.addEventListener("load", function(event) {
    var global = 5;

    console.log("global in load: " + global);

    otherFunction();

    var functionScope = 1;

    for(var i = 0; i < 5; i++) {
        console.log("functionScope in for: " + functionScope)
    }

    {
        var insideBlockVar = -1;
        let insideBlockLet = -2;
    }

    console.log("i outside of for: " + i);

    console.log("insideBlock outside of block: " + insideBlockVar);
//    console.log("insideBlockLet outside of block: " + insideBlockLet);

    var outsideBlockVar = 5;
    let outsideBlockLet = 7;

    console.log("outsideBlockVar before the block: " + outsideBlockVar);
    console.log("outsideBlockLet before the block: " + outsideBlockLet);


    {
        var outsideBlockVar = -5;
        let outsideBlockLet = -7
    }

    console.log("outsideBlockVar after the block: " + outsideBlockVar);
    console.log("outsideBlockLet after the block: " + outsideBlockLet);

    var redeclareVar = 3;
    var redeclareVar = -3;

    let redeclareLet = 5;
//    let redeclareLet = -5;

});

function otherFunction() {
    console.log("global in otherFunction: " + global);
}
