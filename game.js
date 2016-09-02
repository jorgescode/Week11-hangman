// requiring word.js and assigning it to
var Word = require('./word.js');

var bands = ["Thrice", "Finch", "Beartooth", "Enter Shikari", "The Starting Line", "La Dispute", "The Dear Hunter", "Dance Gavin Dance"];
var Game = function()
{
    // chooses a random element from the bands array and returns a new Word with the band passed in
    this.chooseRandomBand = function()
    {
        return new Word(bands[Math.floor(Math.random()*bands.length)]);
    }
};

// exports this module to be used by other js files
module.exports = Game;