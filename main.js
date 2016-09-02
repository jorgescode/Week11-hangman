// requiring js files
var inquirer = require("inquirer");
var Game = require('./game.js');

// init game with random band word, won and numberOfGuessesLeft variables
var game = new Game().chooseRandomBand();
var won = false;
var numberOfGuessesLeft = 10;

// initial game messsages
console.log('HANG MANG NODE STYLE');

// function for guessing letter
function guessLetter()
{
    // first call to print word and it should be all underscores
    printWord();
    // checks if we ran out of guesses and if we haven't won to end game
    if(numberOfGuessesLeft-- == 0 && !won)
    {
        console.log('GAME OVER MANG... GAME OVER...');
    }
    // checks if we did win and ends game
    else if(won)
    {
        console.log('CONGRATS BRO YOU GOT IT!')
    }
    else
    {
        // print out number of guesses
        console.log('Number Of Guesses Left: ' + (numberOfGuessesLeft + 1));
        // prompt for letter guess
        inquirer.prompt([{name: 'letter', message: 'GUESS A LETTER'}])
        .then(function(answer)
        {
            // if the letter is not in the word, say so and guess again
            if(game.word.indexOf(answer.letter) == -1)
            {
                console.log('SORRY WRONG LETTER');
            }

            else
            {
                // get all indexes the letter is found in
                var indexes = getAllIndexes(game.letterArray, answer.letter);

                // sets each instance of the letter isGuessed to true
                for(var i = 0; i < indexes.length; i++)
                {
                    var index = indexes[i];
                    game.letterArray[index].isGuessed = true;
                }

                // sets won to true if number of letters guessed correctly = word length
                if(game.numberOfLettersGuessedCorrectly() == game.word.length)
                    won = true;
            }
            // call guessLetter again recursively to avoid async prompt issues
            guessLetter();
        });
    }
}

// initial call to start the letter guessing for the game
guessLetter();

// prints out the word with letter, underscored and spaces
function printWord()
{
    // word is initially blank and is populated with letter or underscores and spaces
    var word = '';
    for(var i = 0; i < game.word.length; i++)
    {
        var letter = game.letterArray[i];
        // if letter is not a space, call letters display function which returns the letter or underscore
        if(letter !== ' ')
            word+=letter.display();
        // else add a space to the word
        else
            word+=' ';
    }

    console.log(word);
}

// function that gets all indexes of the same letter
function getAllIndexes(arr, val)
{
    var indexes = [];
    for(var i = 0; i < arr.length; i++)
    {
        // if the val passed in matches the letter of the letterArray passed in, push the index in to the indexes array
        if(arr[i].letter === val)
        {
            indexes.push(i);
        }
    }
    return indexes;
}