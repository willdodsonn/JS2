// Your code here:
const bottlesPlural = " bottles of milk on the wall, ";
const oneDown = "Take one down and pass it around, ";
const bottlesShort = " bottles of milk. ";

function bottlesSong(){
    for(var i = 99; i >= 0; i--){
        if(i == 2){
            console.log( i +bottlesPlural+i+bottlesShort+oneDown+"1 bottle of milk on the wall. ");
        }
        else if(i == 1){
            console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        }
        else if(i == 0){
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        }
        else{
            console.log(i+bottlesPlural+i+bottlesShort+oneDown+(i-1)+" bottles of milk on the wall.");
        }
    }
}
bottlesSong();