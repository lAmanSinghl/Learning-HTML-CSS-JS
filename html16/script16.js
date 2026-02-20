function getrandom(){
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}
let button=document.getElementById("btn");
button.addEventListener("click",(e)=>{
    document.querySelector(".box").innerHTML="<b>I was clicked</b>";
    console.log(e);
});
button.addEventListener("dblclick",(e)=>{
    document.querySelector(".box").innerHTML="<b>I was double clicked</b>";
    console.log(e);
})
document.addEventListener("keydown",(e)=>{
    console.log(e);
})
document.querySelector(".container").addEventListener("click",(e)=>{
    alert("You clicked on the Container")
});

document.querySelector(".outbox").addEventListener("click",(e)=>{
    alert("You clicked on the parent box")
});
document.querySelector(".inbox").addEventListener("click",(e)=>{
    alert("You clicked on the child box")
    e.stopPropagation();
});
setInterval(()=>{ 
    document.querySelector(".outbox").style.background=getrandom();
    document.querySelector(".inbox").style.background=getrandom();
    document.querySelector(".container").style.background=getrandom();
},1000);