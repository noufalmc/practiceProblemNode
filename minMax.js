let random1=Math.floor(Math.random()*(999-100+1)+100);
let random2=Math.floor(Math.random()*(999-100+1)+100);
let random3=Math.floor(Math.random()*(999-100+1)+100);
let random4=Math.floor(Math.random()*(999-100+1)+100);
let random5=Math.floor(Math.random()*(999-100+1)+100);
console.log("Random1="+random1);
console.log("Random2="+random2);
console.log("Random3="+random3);
console.log("Random4="+random4);
console.log("Random5="+random5);
let max=min=random1;
if(max<random2)
{
    max=random2;
}
else if(min>random2)
{
   min=random2;
} 
if(max<random3)
{
    max=random3;
}
else if(min>random3)
{
   min=random3;
}
if(max<random4)
{
    max=random4;
}
else if(min>random4)
{
   min=random4;
} 
if(max<random5)
{
    max=random5;
}
else if(min>random5)
{
   min=random5;
} 

console.log("The Max Number is"+max);
console.log("The Min Number is"+min);