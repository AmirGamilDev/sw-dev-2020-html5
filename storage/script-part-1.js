window.addEventListener('load', function() {

    var saveButton = document.getElementById("save-button");

    saveButton.addEventListener("click", handleSaveButtonClick);

    greetIfAvailable();
});

function handleSaveButtonClick(event) {
    var playerInputField = document.getElementById("player-input-field");

    var playerName = playerInputField.value;

    localStorage.setItem("playerName", playerName);
}

function greetIfAvailable() {
    var savedPlayerName = localStorage.getItem("playerName");

    if(savedPlayerName !== null) {
        alert("Hello " + savedPlayerName);

        var playerInputField = document.getElementById("player-input-field");

        playerInputField.value = savedPlayerName;
    }

}
