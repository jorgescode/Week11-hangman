// letter constructor
var Letter = function(letter)
{
    // has a isGuessed which starts as false and contains the actual letter
    this.isGuessed = false;
    this.letter = letter;

    // displays an underscore or the letter based on whether isGuessed is true or false
    this.display = function()
    {
        if(this.isGuessed)
            return this.letter;
        else
            return '_';
    };
};

// exports this module to be used by other js files
module.exports = Letter;