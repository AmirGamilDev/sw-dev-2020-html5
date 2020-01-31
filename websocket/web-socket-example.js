const socket = new WebSocket('ws://stocks.cnn.com:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    var stocksList = ['STX', 'GOOGL', 'YHOO'];

    socket.send(stocksList);
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log("Share code: " + event.data.stockCode);
    console.log("Share price: " + event.data.price);
    console.log("Delta: " + event.data.delta);
});




{
    stockCode: "STX",
    price: 34.19,
    delta: +0.13
}
