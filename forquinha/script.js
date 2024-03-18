document.addEventListener('DOMContentLoaded', function () {
    const words = ["batata", "avião", "cabrito", "devastar", "pateta", "cebola"];

    let chosenWord = words[Math.floor(Math.random() * words.length)];
    let displayWord = '';

    for (let i = 0; i < chosenWord.length; i++) {
        displayWord += '_';
    }

    document.getElementById('word-display').innerText = displayWord;

    document.getElementById('guess-button').addEventListener('click', function () {
        let guess = document.getElementById('guess-input').value.toLowerCase();
        if (guess.length !== 1) {
            document.getElementById('message').innerText = 'Dê uma letra.';
        } else {
            let newDisplayWord = '';
            let correctGuess = false;
            for (let i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === guess) {
                    newDisplayWord += guess;
                    correctGuess = true;
                } else {
                    newDisplayWord += displayWord[i];
                }
            }
            displayWord = newDisplayWord;
            document.getElementById('word-display').innerText = displayWord;
            if (displayWord === chosenWord) {
                document.getElementById('message').innerText = 'Acertou a palavra!!';
            } else if (!correctGuess) {
                document.getElementById('message').innerText = 'Não tem sua letra. Dê outro palpite.';
            } else {
                document.getElementById('message').innerText = '';
            }
        }
        document.getElementById('guess-input').value = '';
    });
});
