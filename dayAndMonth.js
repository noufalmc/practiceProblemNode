
let date=21;
let month=4;
if(date<31)
{
if((month==3)&&(date>19 && date<32))
{
    console.log("return TRUE");
}
else if(month==6 && date<21)
{
    console.log("return TRUE");
}
else if(month>3 && month<6)
{
    console.log("Return TRUE");
}
else
{
    console.log("return FALSE");
}
}
else
{
    console.log("Invalid Date");
}