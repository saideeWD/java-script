function woodCalculter(calculater){

    for(i = 0; i < calculater; i++){
        chaireFeet = calculater * 50 ;
        tablefeet = calculater * 90;
        bedFeet = calculater* 230;
        var result = bedFeet + tablefeet + chaireFeet;
    }
    return result ;
}

var total =  woodCalculter(10)
console.log(total)
// total feet = 3700