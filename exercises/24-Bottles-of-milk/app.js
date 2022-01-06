// Your code here:
const bottlesPlural = "bottles of milk on the wall, ";
const oneDown = "Take one down and pass it around,";
const bottlesShort = "bottles of milk.";
let oneBottlePlural = "1 bottle of milk on the wall, ";
let oneBottle = "1 bottle of milk.";
let zeroBottlesPlural = " no more bottles of milk on the wall.";
let zeroBottles = " no more bottles of milk.";
let buySome = "Go to the store and buy some more, ";

function bottlesSong(){
    for(var i = 99; i >= 0; i--)
        if(i == 2){
            console.log(i+bottlesPlural+i+bottlesShort+oneDown+oneBottle);
        }
        else if(i == 1){
            console.log(oneBottlePlural+oneBottle+oneDown+zeroBottlesPlural);
        }
        else if(i == 0){
            console.log("No more bottles of milk on the wall," + zeroBottles + buySome + " 99 bottles of milk on the wall.");
        }
        else(i+bottlesPlural+i+bottlesShort+oneDown+(i-1)+"bottles of milk on the wall.");

}
console.log(bottlesSong());