const socket = new WebSocket('https://squawkspace.netlify.app/');

socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    // Display the received message in the UI for all users
};

function sendMessage(message) {
    // Display the sent message locally in the UI
    // (optional, to provide immediate feedback to the sender)
    // const localMessage = ...;

    // Send the message to the server
    socket.send(JSON.stringify({ message }));
}
