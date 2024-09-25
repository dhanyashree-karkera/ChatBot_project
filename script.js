document.getElementById('sendMessage').addEventListener('click', function() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (message) {
        const chatDisplay = document.getElementById('chatDisplay');

        // Create a new message element
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        newMessage.style.border = '1px solid #ddd';
        newMessage.style.padding = '0.5rem';
        newMessage.style.marginTop = '0.5rem';
        newMessage.style.borderRadius = '0.5rem';
        newMessage.style.backgroundColor = '#f1f1f1';
        newMessage.style.float='right';
        newMessage.style.clear = 'both';  // Ensures messages don't overlap and are stacked correctly

        // Append the new message to the chat display area
        chatDisplay.appendChild(newMessage);

        // Clear the input field
        input.value = '';

        // Scroll to the bottom of the chat display area
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
});
