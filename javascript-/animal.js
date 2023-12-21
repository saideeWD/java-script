function calculater(depth){

var animal = 0;
if(depth<=10){
    animal = depth * 50;
}
else if(depth <=20) {
    var firstpart = 10*50;
    var remananing = depth - 10;
    var secondpart = remananing * 100;
    animal = firstpart * secondpart;
}

  else{
    var firstpart = 10*50;
    var secondpart= 10*100;
    var remananing = depth -20;
    var thairdpart = remananing * 300;
    animal = firstpart + secondpart + thairdpart;
  }
return animal;
}
 var count = calculater(5);
 console.log(count)