let a1=()=>{
 let a=Math.random()*3;
 console.log(a);
 if(a<1){
    return "Crazy";
 }else if(a<2&&a>1){
    return "Amazing";
 }else {
    return "Fire";
 }
}
let a2=()=>{
 let a=Math.random()*3;
  console.log(a);
 if(a<1){
    return "Engine";
 }else if(a<2&&a>1){
    return "Foods";
 }else {
    return "Garment";
 }
}
let a3=()=>{
 let a=Math.random()*3;
  console.log(a);
 if(a<1){
    return "Bros";
 }else if(a<2&&a>1){
    return "Limited";
 }else {
    return "hub";
 }
}

alert(a1()+a2()+a3());

