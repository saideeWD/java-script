
function events_All(){
    for (let i = 0; i < number.length; i++) {
        const num = number[i];
    

        if(num % 2 == 0){
            console.log(num, ': is event number');
        }
        else{
            console.log(num*2, ': is odd number');
        }
}
}
number = [ 45, 48, 49, 56, 26, 36 , 89 , 98, 85, 48];
events_All(number)

   


age = [4, 5, 6, 5, 6, 2, 8, 78, 9, 6, 36,];
events_All(age);
