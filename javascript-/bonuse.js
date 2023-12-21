var price = [ 50, 10, 20, 30, 40, 60, 70, ];
// for(var i = 0; i < price.length; i++){
// var element = price[i];
// console.log(element)
// }

// function add (number , number2){
// var total = number + number2;
// return total;
// }
// var result = add(100 , 100)
// console.log(result);
// console.log("i go to market ")
// console.log(("she goess to school"))

// var number = add( 50, 20);
// console.log(number);

function gitbignumber ( add){

    var num =add[0];
    for(var i = 0; i<add.length; i++){
        var element = add[i];
       
        if(element > num){
            num = element;
        }
    }
    return num;
}
 var  toi = gitbignumber([ 89, 10, 895, 50, 30, 70000 ]);
console.log(toi);




function panda(pricename){
    var ele = pricename[0];
    for(var i = 0; i < ele.length; i++){
        var save = pricename[i];
        if(save > ele){
            ele= save;
    }
}
return ele;
}
var roll = panda([70, 80, 60, 10, 20,])
console.log(roll)