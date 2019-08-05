function multi() {
    let num1=prompt("Number1");
    let num2=prompt("Number2");
    if(num1%num2==0)
    {
        alert(num2+" is multiples of " +num1);
    }
    else  {
        alert(num2+" is not multiples of " +num1);
    }
}