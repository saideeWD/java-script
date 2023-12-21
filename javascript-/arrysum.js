

function getarry(numbers){
    var sum = 0;
for(var i = 0; i <numbers.length; i++){
    var eliment = numbers[i];
    sum = sum + eliment;
} 

return sum;

}
var numbers = [45, 63, 58, 89, 78];
var result = getarry(numbers);

console.log('total elements:', result);
var numbers = [ 45, 45, 65, 85, ];
var total = getarry(numbers);
console.log('total elements :',  total)


var price = [ 45, 50 , 60 , 70, 80, 90];
var summery =0;

for(var i = 0; i<price.length; i++){
    var elements = price[i];
    tol = summery +elements;
}
console.log(tol);
