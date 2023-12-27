function sendMessage() {
    const messageInput = document.getElementById('user-input');
    const message = messageInput.value;
  
    if (message.trim() !== '') {
      const chatMessages = document.getElementById('chat-messages');
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
  
      // Clear the input field after sending message
      messageInput.value = '';
  
      // Scroll to the bottom to show the latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  