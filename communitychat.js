document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const chatList = document.getElementById('chatList');
    const chatItems = chatList.getElementsByClassName('chat-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        // Show all chat items when the search input is empty
        if (searchTerm === '') {
            for (let chatItem of chatItems) {
                chatItem.style.display = '';
            }
            return;
        }

        let resultsFound = false;

        for (let chatItem of chatItems) {
            const title = chatItem.querySelector('h2').textContent.toLowerCase();
            // Check if the title starts with the search term
            const matches = title.startsWith(searchTerm);

            if (matches) {
                chatItem.style.display = '';
                resultsFound = true;
            } else {
                chatItem.style.display = 'none';
            }
        }
    });
});
