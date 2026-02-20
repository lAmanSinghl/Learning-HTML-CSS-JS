console.log("I am a tutorial")
let a=1;
for(let i=0;i<100;i++){
    console.log(a+i)
}
let obj={
    name:"Aman",
    age:12,
    role:"Programmer",
    company:"AMAN"
}
//for in is for objects
for (const key in obj) {
    const element = obj[key];
    console.log(key , element)
    
}
//for of is for arrays
for(const c of "Aman"){
    console.log(c)
}