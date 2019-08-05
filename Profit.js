function profit() {
    let num= parseInt(prompt("Amount product"));
    money=10000;
    let profit;
    if(num>=500)
    {
        profit=(money*num*5)/100;
        document.write("Profit is "+profit);
    }
    else if(num>400)
    {
        profit=(money*num*4)/100;
        document.write("Profit is "+profit);
    }
   else  if(num>300)
    {
        profit=(money*num*3)/100;
        document.write("Profit is "+profit);
    }
    else if (num>200)
    {
        profit=(money*num*2)/100;
        document.write("Profit is "+profit);
    }
}