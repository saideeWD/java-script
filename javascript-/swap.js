var a =5;
var b = 7;
console.log('before swap: a', a, "b=", b);
var temp = b;
b = a;
a = temp;
console.log('after swap: a', a, "b=", b);


var x =5;
 var y = 7;

 x = x+y;
 y = x-y;
 x = x - y;
 console.log('after swap:x', x,'y=',y)


 var p = 5;
 var q =7;
 [p, q]= [q, p];
 console.log('after swap: p', p, "q=", q);

 var country = 'bangladesh';
 var country2 = 'india';
  var box = country;
  country = country2;
  country2 = box;
  console.log('after swap: country', country, "co=", country2);