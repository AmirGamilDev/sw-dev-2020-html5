var button = document.getElementById("button");

button.addEventListener("click", handleClick);

function handleClick(event) {
    var para = document.createElement("p");

    var paragraph1 = document.getElementById("first-paragraph");

    var div = document.getElementById("the-div");

    para.textContent = "This is a paragraph";

    div.insertBefore(para, paragraph1);
}
