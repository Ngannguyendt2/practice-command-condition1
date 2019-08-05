function classification() {
    let mark=parseFloat(prompt("Your mark"));
    let midterm=parseFloat(prompt("Your midterm score"));
    let final=parseFloat(prompt("Your final score"));
    let point=(mark+midterm+(final*2))/4;
    if(point>=8.5)
    {
        alert(point+" Excellent");
    }
    else if(point>=7.0)
    {
        alert(point+" Good");
    }
    else if(point>=5)
    {
        alert(point+" Average");
    }
    else {
        alert(point+" Poor");
    }
}