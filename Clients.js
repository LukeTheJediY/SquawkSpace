const socket = new WebSocket('https://squawkspace.netlify.app/');

socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    // Display the received message in the UI
};

function sendMessage(message) {
    socket.send(JSON.stringify({ message }));
}
