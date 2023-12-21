var name = [ 45, 60, 80, 30, 80, 30, 70, 10, 15, 25, 80, 25, 90, 100, 50, 100, 50, 200, 90];
var unikeName = [];
for(var i = 0; i < name.length; i++){
    var element =name[i];
    var index = unikeName.indexOf(element);
    if(index==-1){
        unikeName.push(element)
    }
}
console.log(unikeName);




let price  = [ 30, 10, 20, 60, 30, 20, 10, 78, 78];
let name = [];
for( var t = 0; t < price.length; t++){
    let elemrnted = name[t];
    let indexof = name.indexOf(elemrnted);
    if(indexof== -1){
        name.push(elemrnted)
    }
}

console.log(name);