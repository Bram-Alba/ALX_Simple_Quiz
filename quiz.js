function checkAnswer() {
    // Step 1: Define the correct answer
    let correctAnswer = "4";

    // Step 2: Get user's selected answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Handle case where no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    let userAnswer = selectedOption.value;

    // Step 3: Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
