$(document).ready(function() {
    let currentQuestion = 1;
    let totalQuestions = 3; // Set the total number of questions

    function showNextQuestion() {
        if (currentQuestion <= totalQuestions) {
            // Enable all options for the new question
            $('.option').removeClass('disabled').off('click').on('click', selectAnswer);

            // Display the next question
            $('#feedback').text('');
            if (currentQuestion === 1) {
                $('#quiz h2').text('Question ' + currentQuestion + ': What is the capital of France?');
                // Replace answer options for question 1
                $('.option:eq(0)').text('A) Berlin');
                $('.option:eq(1)').text('B) London');
                $('.option:eq(2)').text('C) Paris');
                $('.option:eq(3)').text('D) Madrid');
            } else if (currentQuestion === 2) {
                $('#quiz h2').text('Question ' + currentQuestion + ': What is the largest planet in our solar system?');
                // Replace answer options for question 2
                $('.option:eq(0)').text('A) Earth');
                $('.option:eq(1)').text('B) Mars');
                $('.option:eq(2)').text('C) Jupiter');
                $('.option:eq(3)').text('D) Venus');
            } else if (currentQuestion === 3) {
                $('#quiz h2').text('Question ' + currentQuestion + ': Who wrote the play "Romeo and Juliet"?');
                // Replace answer options for question 3
                $('.option:eq(0)').text('A) William Shakespeare');
                $('.option:eq(1)').text('B) Charles Dickens');
                $('.option:eq(2)').text('C) Mark Twain');
                $('.option:eq(3)').text('D) Jane Austen');
            }

            // Increment the current question
            currentQuestion++;
        } else {
            // Quiz is complete
            $('#quiz h2').text('Quiz Complete');
            $('#feedback').text('You have finished the quiz.');
        }
    }

    function selectAnswer() {
        // Disable all options to prevent further clicks for the current question
        $('.option').addClass('disabled');

        if ($(this).text().includes('C) Paris') || $(this).text().includes('C) Jupiter') || $(this).text().includes('A) William Shakespeare')) {
            // Correct answer
            $('#feedback').text('Correct!').addClass('correct').removeClass('incorrect');
            // Proceed to the next question
            setTimeout(showNextQuestion, 2000);
        } else {
            // Incorrect answer
            $('#feedback').text('Incorrect!').addClass('incorrect').removeClass('correct');
            // Allow the user to attempt the same question again
            $('.option').removeClass('disabled').off('click').on('click', selectAnswer);
        }
    }

    // Start the quiz by showing the first question
    showNextQuestion();
});
