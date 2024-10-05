document.addEventListener('DOMContentLoaded', function() {
    const messageArea = document.querySelector('.message-area');
    const sendButton = document.getElementById('habitSendButton'); // Updated ID
    const plusIcon = document.getElementById('habitPlusIcon'); // Updated ID
    const additionalButtons = document.querySelector('.additional-buttons');

    // Load messages from local storage
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem('habitMessages')) || []; // Unique key
        messages.forEach(message => {
            appendMessage(message);
        });
    }

    // Function to append messages
    function appendMessage(content) {
        messageArea.innerHTML += content;
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    // Save messages to local storage
    function saveMessages() {
        const messages = Array.from(messageArea.children).map(message => message.outerHTML);
        localStorage.setItem('habitMessages', JSON.stringify(messages)); // Unique key
    }

    // Send message
    sendButton.addEventListener('click', function() {
        const messageText = document.getElementById('habitMessageInput').value.trim(); // Updated ID
        if (messageText) {
            const messageHTML = `
                <div class="message sent">
                    <div class="sender-name you">You</div>
                    <div class="message-content"><p>${messageText}</p></div>
                    <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                </div>
            `;
            appendMessage(messageHTML);
            saveMessages(); // Save after sending a message
            document.getElementById('habitMessageInput').value = ''; // Updated ID
        }
    });

    // Toggle additional buttons
    plusIcon.addEventListener('click', function() {
        additionalButtons.classList.toggle('active');
        const isActive = additionalButtons.classList.contains('active');
        additionalButtons.style.opacity = isActive ? '1' : '0';
        additionalButtons.style.visibility = isActive ? 'visible' : 'hidden';
        plusIcon.classList.toggle('active', isActive); // Rotate icon
    });

    // Open file selector for images
    document.getElementById('habitImageButton').addEventListener('click', () => { // Updated ID
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = () => {
            handleFiles({ target: { files: input.files } });
        };
        input.click();
    });

    // Open file selector for videos
    document.getElementById('habitVideoButton').addEventListener('click', () => { // Updated ID
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'video/*';
        input.onchange = () => {
            handleFiles({ target: { files: input.files } });
        };
        input.click();
    });

    // Handle file uploads
    function handleFiles(event) {
        const files = event.target.files;
        for (const file of files) {
            const url = URL.createObjectURL(file);
            let messageHTML;
            if (file.type.startsWith('video/')) {
                messageHTML = `
                    <div class="message sent">
                        <div class="sender-name you">You</div>
                        <div class="message-content">
                            <video controls style="max-width: 100%; border-radius: 15px;">
                                <source src="${url}" type="${file.type}">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                `;
            } else if (file.type.startsWith('image/')) {
                messageHTML = `
                    <div class="message sent">
                        <div class="sender-name you">You</div>
                        <div class="message-content">
                            <img src="${url}" alt="Image" style="max-width: 100%; border-radius: 15px;">
                        </div>
                        <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                `;
            }
            appendMessage(messageHTML);
            saveMessages(); // Save after adding a file
        }
    }

    // Load messages on startup
    loadMessages();
});
