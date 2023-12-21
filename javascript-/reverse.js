function reverseStrining(str){
    var reverse ="";
    for(var i =0; i < str.length; i++){

        var cher = str[i]
        reverse = cher + reverse;
    }
    return reverse;
}


var sterment = "Hello Bangladesh . i am a good person. in bangladesh. i am abad boy";
var total = reverseStrining(sterment);
console.log(total);
var link = ' my name is saide';

var link = reverseStrining(link);
console.log(link)

var fooodvlog = reverseStrining("hello saide edias si eman ym ")
console.log(fooodvlog);