function brickCalculatar(buldining){

      var total = 0; 

  if( buldining <=10 ){
        var total = buldining * 1500;
    }
    else if(buldining <= 15){
        var firstpart = 10* 1500;
        var remananing =buldining - 10;
        var secondpart = remananing * 1200;
        total =firstpart + secondpart;

    }
    else{
        var firstpart = 10 * 1500;
        var secondpart = 15 * 1200;
        var remananing = buldining -15;
        var thairdpart = remananing * 1000;
        total = firstpart + secondpart + thairdpart;
    }
    return total;
}
var total =brickCalculatar(50);
console.log(total)