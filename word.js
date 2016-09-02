// requiring letter.js and assigning it to a variable called Letter
var Letter = require('./letter.js');

// word constructor that accepts a string called word
var Word = function(word)
{
    // assigns the string passed in to the word property of this constructor, init an empty letter array
    this.word = word;
    this.letterArray = [];

    // when a word is passed in, populate the letter array
    for(var i = 0; i < this.word.length; i++)
    {
        var letter = this.word.charAt(i);
        // if it's an empty space, just put an empty string in the index
        if(letter === ' ')
            this.letterArray[i] = ' ';
        // else store a new Letter in the index with the letter that was passed in
        else
            this.letterArray[i] = new Letter(letter);
    }

    // cycles through the letters and returns the number that have isGuessed as true
    this.numberOfLettersGuessedCorrectly = function()
    {
        var num = 0;
        for(var i = 0; i < this.letterArray.length; i++)
        {
            if(this.letterArray[i].isGuessed)
                num++;
        }
        return num;
    };
};

//exports this module to be used by other js files
module.exports = Word;