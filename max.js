function findmax() {
    let num1=parseInt(prompt("Number1"));
    let num2=parseInt(prompt("Number2"));
    let num3=parseInt(prompt("Number3"));
    if(num1>num2)
    {
        if(num1>num3)
        {
            document.write("Max is "+num1);
        }
        else {
            document.write("Max is "+num3);
        }
    }
    else if(num2>num3)
    {
        document.write("Max is "+num2);
    }
    else {
        document.write("Max is "+num3);
    }
}