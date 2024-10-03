let num1 =prompt("enter the first number");
let num2 = prompt("enter the second number");
let operater = prompt("enter an operate of one of these (+ ,- ,* ,/ ):");

let result;
if (operater === "+")
{
    result = num1 + num2;
}
else if (operater === "-")
{
    result = num1 - num2;
}
else if (operater === "*")
{
    result = num1 * num2;
}
else if (operater === "/")
    {
        result = num1 / num2;
    }
else{
    result ="invalid operator.";
}
alert("Result = "+ result);