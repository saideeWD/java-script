let speech = "i am good     persion.    and moulover cchair high school at bangladeshnb    ";

var count =0;
for(var i = 0; i < speech.length; i++){
    var cher = speech[i];
if(cher == " " && speech[ i - 1]!=" ") {
    count++;
}
}
console.log(count);



var price = ['i am good student in class 4 .she is readining book of bank and city'];
 var nam = 0;
 for(var s = 0; s < price.length; s++){
    var ele = price[s];
    var colot = 0;
    if(colot ==" " && price[s - 1] !=" "){
        colot++;
    }
 }

 console.log(colot);
 