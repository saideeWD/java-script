// 5! =1*2*3*4*5

function facktroul(num){
        fact =1;
    for( i = 1; i <= num;i++){
        fact = fact * i;
        console.log( i , fact);
    }
}

var result = facktroul(5)
console.log(result);


function roll(name){
    fackt = 1;
    for(i = 1; i<=name; i++){
        fackt =  fackt*i;

    }
    return fackt;
}
var total = roll(10);
console.log(total)

// facktroul Recoursibe

function facktroulRecoursibe(num){
    if(num ==1){
        console.log(num);
        return 1;
    }
    else{
        console.log(num, num-1);
        return num * facktroulRecoursibe(num-1);
    }
}

var result = facktroulRecoursibe(10);
console.log(result);