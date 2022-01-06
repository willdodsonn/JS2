var loopLyrics1 = "";
var wordsOfWisdom = "whisper words of wisdom, ";
var loopLyrics2 = "";
var anAnswer = "there will be an answer,";

function sing(){ 
    var beatlesLyrics = "let it be, ";
    for(var i = 1; i < 5; i++){
        loopLyrics1+=beatlesLyrics; 
    }
    for(var i = 1; i < 6; i++){
        loopLyrics2+=beatlesLyrics;
    }  
}

sing();
var beatlesString = loopLyrics1 + wordsOfWisdom + loopLyrics2 + anAnswer + " let it be";
//Your code above ^^^

console.log(beatlesString);