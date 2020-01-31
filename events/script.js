function handleClick(event) {
    event.target.innerText = "Changed from named function";
}


var pageHeading = document.getElementById("page-heading");
pageHeading.addEventListener('click', handleClick);

var div = document.getElementById("the-div");

div.addEventListener('click', function(event) {
    event.target.innerText = "Changed from anonymous function";
});
