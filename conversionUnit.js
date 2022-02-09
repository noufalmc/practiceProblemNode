var readline = require('readline-sync');
let unit=readline.question("Enter measure");
let option=readline.question("Enter Option [1] Feet To Inch [2] Feet to Meter [3]Inch to Feet [4] Meter To Feet");
let result=0;
switch(option)
{
    case '1':
    result=unit*12;
    console.log("Feet to Inch="+result);
    break;
    case '2':
    result=unit*0.3048;
    console.log("Feet to Meter="+result);
    break;
    case '3':
    result=unit/12;
    console.log("Inch to Feet="+result);
    break;
    case '4':
    result=unit/0.3048;
    console.log("Meter To Feet="+result);
    break;
    default:
    console.log("invalid");
    break;
}