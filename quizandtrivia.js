const quizQuestions = [
    // Easy Questions
    {
        question: "What is the transit method?",
        options: [
            "A) A technique to analyze star spectra",
            "B) Monitoring a star's brightness for dips caused by passing exoplanets",
            "C) A way to capture images of stars",
            "D) Measuring a planet's temperature"
        ],
        answer: "B) Monitoring a star's brightness for dips caused by passing exoplanets",
        image: "https://shorturl.at/TKAsk"
    },
    {
        question: "Which exoplanet is often referred to as 'Earth's cousin'?",
        options: [
            "A) Kepler-452b",
            "B) WASP-12b",
            "C) Proxima Centauri b",
            "D) Trappist-1e"
        ],
        answer: "A) Kepler-452b",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Kepler-452b_artist_concept.jpg"
    },
    {
        question: "What type of planet is Proxima Centauri b?",
        options: [
            "A) Super-Earth",
            "B) Icy",
            "C) Rocky",
            "D) Gas Giant"
        ],
        answer: "C) Rocky",
        image: "https://shorturl.at/DYzCr"
    },
    {
        question: "Which gas is commonly searched for in exoplanet atmospheres to indicate potential life?",
        options: [
            "A) Oxygen",
            "B) Methane",
            "C) Water vapor",
            "D) Carbon dioxide"
        ],
        answer: "C) Water vapor",
        image: "https://shorturl.at/3JKd3"
    },
    {
        question: "What is the Goldilocks zone?",
        options: [
            "A) A specific type of star",
            "B) A measurement of distance in space",
            "C) A region where conditions might allow liquid water",
            "D) A name for a planet"
        ],
        answer: "C) A region where conditions might allow liquid water",
        image: "https://shorturl.at/nBucR"
    },
    // Intermediate Questions
    {
        question: "How long would it take to travel to Proxima Centauri b with current technology?",
        options: [
            "A) 100 years",
            "B) 4 years",
            "C) 75 years",
            "D) 50 years"
        ],
        answer: "C) 75 years",
        image: "https://shorturl.at/ef0DG"
    },
    {
        question: "Which detection method involves measuring the gravitational pull on a star?",
        options: [
            "A) Direct Imaging",
            "B) Radial Velocity",
            "C) Transit Method",
            "D) Astrometry"
        ],
        answer: "D) Astrometry",
        image: "https://shorturl.at/Tjaw0"
    },
    {
        question: "What exoplanet is notable for studies revealing water vapor in its atmosphere?",
        options: [
            "A) 55 Cancri e",
            "B) HD 209458 b",
            "C) Trappist-1e",
            "D) WASP-12b"
        ],
        answer: "B) HD 209458 b",
        image: "https://shorturl.at/8mGL6"
    },
    {
        question: "What is a common feature of gas giant exoplanets?",
        options: [
            "A) Rocky surfaces",
            "B) Low temperatures",
            "C) Thick atmospheres",
            "D) High density"
        ],
        answer: "C) Thick atmospheres",
        image: "https://shorturl.at/T6DXo"
    },
    {
        question: "What does the term 'super-Earth' refer to?",
        options: [
            "A) A planet with no atmosphere",
            "B) A larger Earth-like planet",
            "C) A type of gas giant",
            "D) An icy planet"
        ],
        answer: "B) A larger Earth-like planet",
        image: "https://shorturl.at/fuex5"
    },
    // Hard Questions
    {
        question: "What advanced technique allows for the detection of small exoplanets in the habitable zone?",
        options: [
            "A) Radial Velocity",
            "B) Transit Method",
            "C) Gravitational Microlensing",
            "D) Direct Imaging"
        ],
        answer: "B) Transit Method",
        image: "https://shorturl.at/di7Mk"
    },
    {
        question: "How far is HD 21520 b from Earth?",
        options: [
            "A) Approximately 25 light-years",
            "B) Approximately 100 light-years",
            "C) Approximately 50 light-years",
            "D) Approximately 75 light-years"
        ],
        answer: "D) Approximately 75 light-years",
        image: "https://shorturl.at/vT5jz"
    },
    {
        question: "Which exoplanet system contains seven Earth-sized planets?",
        options: [
            "A) Proxima Centauri",
            "B) 55 Cancri",
            "C) Trappist-1",
            "D) HD 209458"
        ],
        answer: "C) Trappist-1",
        image: "https://shorturl.at/Pg6UZ"
    },
    {
        question: "What major factor besides location influences a planet's habitability?",
        options: [
            "A) Size of the planet",
            "B) Distance from the star",
            "C) Planetary atmosphere",
            "D) Orbital period"
        ],
        answer: "C) Planetary atmosphere",
        image: "https://shorturl.at/fUEXF"
    },
    {
        question: "Which detection method uses gravitational microlensing to observe distant stars?",
        options: [
            "A) Transit Method",
            "B) Radial Velocity",
            "C) Astrometry",
            "D) Gravitational Microlensing"
        ],
        answer: "D) Gravitational Microlensing",
        image: "https://shorturl.at/oqgCk"
    }
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

// Display the current question
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById("questionCount").innerText = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    document.getElementById("questionText").innerText = currentQuestion.question;

    const answerChoices = document.getElementById("answerChoices");
    answerChoices.innerHTML = ""; // Clear previous choices

    // Create a new image element
    const questionImage = document.createElement("img");
    questionImage.src = currentQuestion.image;
    questionImage.alt = "Question image";
    questionImage.style.maxWidth = "100%"; // Make it responsive
    questionImage.style.borderRadius = "8px"; // Optional styling

    const quizContainer = document.getElementById("quiz-container");

    // Clear existing image if it exists
    const existingImage = quizContainer.querySelector("img");
    if (existingImage) {
        existingImage.remove(); // Remove the image from the DOM immediately
    }
    quizContainer.insertBefore(questionImage, answerChoices); // Insert new image

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.innerText = option;
        button.onclick = checkAnswer;
        answerChoices.appendChild(button);
    });

    document.getElementById("feedbackMessage").innerText = ""; // Clear feedback message
}

// Check selected answer
function checkAnswer(event) {
    const selectedAnswer = event.target.innerText;
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;

    const buttons = document.querySelectorAll(".answer-button");
    buttons.forEach(button => {
        button.disabled = true; // Disable buttons after an answer is selected
        if (button.innerText === correctAnswer) {
            button.style.backgroundColor = "green"; // Correct answer
        } else if (button.innerText === selectedAnswer) {
            button.style.backgroundColor = "red"; // Wrong answer
        }
    });

    // Increment correct answer count if the selected answer is correct
    if (selectedAnswer === correctAnswer) {
        correctAnswersCount++;
    }

    currentQuestionIndex++;

    setTimeout(() => {
        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion(); // Show next question
        } else {
            showResults(); // Show results
        }
    }, 2000); // Delay before moving to the next question
}

// Show results
function showResults() {
    document.querySelector(".quiz-container").style.display = "none";
    const resultContainer = document.querySelector(".result-screen");
    resultContainer.style.visibility = "visible";
    document.getElementById("resultCorrect").innerText = `Quiz Completed! You got ${correctAnswersCount} out of ${quizQuestions.length} correct.`;
}

// Retry button functionality
document.getElementById("retryButton").addEventListener("click", () => {
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    document.querySelector(".result-screen").style.visibility = "hidden"; // Hide result screen
    document.querySelector(".quiz-container").style.display = "block"; // Show quiz container
    displayQuestion();
});

// Exit button functionality
document.getElementById("exitButton").addEventListener("click", () => {
    document.querySelector(".confirmation-modal").style.display = "flex"; // Show confirmation modal
});

// Confirm exit button functionality
document.getElementById("confirmExit").addEventListener("click", () => {
    window.location.href = "dashboard.html"; // Redirect to dashboard.html
});

// Cancel exit button functionality
document.getElementById("cancelExit").addEventListener("click", () => {
    document.querySelector(".confirmation-modal").style.display = "none"; // Hide confirmation modal
});

// Emergency exit button functionality
document.getElementById("modalExitButton").addEventListener("click", () => {
    document.querySelector(".confirmation-modal").style.display = "flex"; // Show confirmation modal
});

// Initialize the quiz
displayQuestion();