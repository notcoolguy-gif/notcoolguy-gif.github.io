// Grab the necessary DOM elements
const editButton = document.getElementById('edit-btn');
const usernameField = document.getElementById('username');
const bioField = document.getElementById('user-bio');
const profileImg = document.getElementById('profile-img');
const uploadImg = document.getElementById('upload-img');
const uploadLabel = document.querySelector('.upload-label');

// Load user data from local storage on page load
window.addEventListener('DOMContentLoaded', function () {
    // Retrieve and display username, bio, and profile image from local storage
    const storedUsername = localStorage.getItem('username');
    const storedBio = localStorage.getItem('bio');
    const storedImage = localStorage.getItem('profileImage');

    if (storedUsername) {
        usernameField.innerText = storedUsername; // Display stored username
    }
    if (storedBio) {
        bioField.innerText = storedBio; // Display stored bio
    }
    if (storedImage) {
        profileImg.src = storedImage; // Display stored profile image
    }
});

// Function to toggle between edit and save mode
editButton.addEventListener('click', function () {
    const isEditMode = editButton.textContent === 'Edit';

    // Toggle the button text between 'Edit' and 'Save'
    editButton.textContent = isEditMode ? 'Save' : 'Edit';

    // Change the button color to indicate mode
    editButton.classList.toggle('save-mode', !isEditMode);

    // Toggle contenteditable attribute on the bio field and username field
    bioField.contentEditable = isEditMode ? 'true' : 'false';
    usernameField.contentEditable = isEditMode ? 'true' : 'false';

    // Show or hide the "Change Photo" label based on edit mode
    uploadLabel.style.display = isEditMode ? 'block' : 'none';

    // Optionally: Add focus effect or other visual cues
    if (isEditMode) {
        bioField.style.borderBottom = "1px solid #bbb"; // Visual cue for editing
        usernameField.style.borderBottom = "1px solid #bbb";
        bioField.focus();
    } else {
        bioField.style.borderBottom = "none";
        usernameField.style.borderBottom = "none";

        // Save the updated content to local storage
        const updatedUsername = usernameField.innerText;
        const updatedBio = bioField.innerText;

        localStorage.setItem('username', updatedUsername);
        localStorage.setItem('bio', updatedBio);

        // Log the updated information
        console.log(`Username updated to: ${updatedUsername}`);
        console.log(`Bio updated to: ${updatedBio}`);
    }
});

// Handle profile image upload
uploadImg.addEventListener('change', function () {
    const file = uploadImg.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profileImg.src = e.target.result;
            // Save the image to local storage
            localStorage.setItem('profileImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});
