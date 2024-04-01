// Connect to the WebSocket server
const socket = new WebSocket("https://squawkspace.netlify.app/");

// Handle incoming messages from the server
socket.onmessage = function(event) {
    console.log("Message from server:", event.data);
    // Update UI or perform actions based on received messages
};

// Send messages to the server
function sendMessage(message) {
    socket.send(message);
}
