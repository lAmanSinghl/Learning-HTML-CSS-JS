let random=Math.random();
let a=prompt("Enter first number");
let b=prompt("Enter seconde number");
let c=prompt("Enter the operator");
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}else{
    c=obj[c];
}