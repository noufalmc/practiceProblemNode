let number=4567;
switch(true)
{
    case (number>999):
        console.log("Thousand="+Math.floor(number/1000));
        console.log("Hundred="+Math.floor(number%1000/100));
        console.log("Ten="+Math.floor(number%1000%100/10));
        console.log("Unit="+Math.floor(number%1000%100%10/1));
    
    break;
    case (number>99):
        console.log("Hundred="+Math.floor(number%1000/100));
        console.log("Ten="+Math.floor(number%1000%100/10));
        console.log("Unit="+Math.floor(number%1000%100%10/1));
    break;
    case (number>9):
        console.log("Ten="+Math.floor(number%1000%100/10));
        console.log("Unit="+Math.floor(number%1000%100%10/1));
        break;
    case (number>0):
        console.log("Unit="+Math.floor(number%1000%100%10/1));
        break;

}