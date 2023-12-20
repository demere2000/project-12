$(document).ready(function() {
    // Initialize variables for current question and total questions
    let currentQuestion = 1;
    let totalQuestions = 3;

    // Function to display the next question
    function showNextQuestion() {
        // Check if there are more questions to display
        if (currentQuestion <= totalQuestions) {
            // Enable all options and attach click event handler
            $('.option').removeClass('disabled').off('click').on('click', selectAnswer);

            // Clear feedback text
            $('#feedback').text('');

            // Logic for each question
            if (currentQuestion === 1) {
                $('#quiz h2').text('Question ' + currentQuestion + ': What is the capital of France?');
                // Set options for question 1
                $('.option:eq(0)').text('A) Berlin');
                $('.option:eq(1)').text('B) London');
                $('.option:eq(2)').text('C) Paris');
                $('.option:eq(3)').text('D) Madrid');
            } else if (currentQuestion === 2) {
                $('#quiz h2').text('Question ' + currentQuestion + ': What is the largest planet in our solar system?');
                // Set options for question 2
                $('.option:eq(0)').text('A) Earth');
                $('.option:eq(1)').text('B) Mars');
                $('.option:eq(2)').text('C) Jupiter');
                $('.option:eq(3)').text('D) Venus');
            } else if (currentQuestion === 3) {
                $('#quiz h2').text('Question ' + currentQuestion + ': Who wrote the play "Romeo and Juliet"?');
                // Set options for question 3
                $('.option:eq(0)').text('A) William Shakespeare');
                $('.option:eq(1)').text('B) Charles Dickens');
                $('.option:eq(2)').text('C) Mark Twain');
                $('.option:eq(3)').text('D) Jane Austen');
            }

            // Increment the current question number
            currentQuestion++;
        } else {
            // Display completion message when quiz is finished
            $('#quiz h2').text('Quiz Complete');
            $('#feedback').text('You have finished the quiz.');
        }
    }

    // Function to handle answer selection
    function selectAnswer() {
        // Disable options to prevent multiple selections
        $('.option').addClass('disabled');

        // Check if selected answer is correct
        if ($(this).text().includes('C) Paris') || $(this).text().includes('C) Jupiter') || $(this).text().includes('A) William Shakespeare')) {
            // Display correct feedback
            $('#feedback').text('Correct!').addClass('correct').removeClass('incorrect');
            // Proceed to the next question after a delay
            setTimeout(showNextQuestion, 2000);
        } else {
            // Display incorrect feedback
            $('#feedback').text('Incorrect!').addClass('incorrect').removeClass('correct');
            // Re-enable options for user to try again
            $('.option').removeClass('disabled').off('click').on('click', selectAnswer);
        }
    }

    // Start the quiz by showing the first question
    showNextQuestion();
});
