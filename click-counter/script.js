function handleClick(event) {
    var counter = 0;

    if(event.target.id === "click-counter-1") {
        counters[0]++;

        counter  = counters[0];
    } else if(event.target.id === "click-counter-2") {
        counters[1]++;

        counter = counters[1];
    } else {
        counters[2]++;

        counter  = counters[2];
    }

    var message = "I've been clicked " + counter + " time";

    if(counter !== 1) {
        message += "s";
    }

    event.target.innerText = message;
}

var counters = [0, 0, 0];

var clickCounterParagraph1 = document.getElementById("click-counter-1");

clickCounterParagraph1.addEventListener('click', handleClick);

var clickCounterParagraph2 = document.getElementById("click-counter-2");

clickCounterParagraph2.addEventListener('click', handleClick);

var clickCounterParagraph3 = document.getElementById("click-counter-3");

clickCounterParagraph3.addEventListener('click', handleClick);
