// const callback = (arg) => {
//    console.log(arg);
// }

// const loadscript = (src, callback) => {
//    let sc = document.createElement("script");
//    sc.src = src;
//    sc.onload = callback("Aman");
//    document.head.append(sc);
// }

// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

let prom1 = new Promise((resolve, reject) => {
   let b = Math.random();
   if (b < 0.5) {
      console.log("No random number was not supporting you 1");
      reject("Singh1");
   } else {

      console.log("Yes I am done 1");
      resolve("Aman1");

   }
});
let prom2 = new Promise((resolve, reject) => {
   let b = Math.random();
   if (b < 0.5) {
      console.log("No random number was not supporting you 2");
      reject("Singh2");
   } else {

      console.log("Yes I am done 2");
      resolve("Aman2");

   }
});

prom1.then((b) => {
   console.log(b+" then")
}).catch((er)=>{
   console.log(er+" er")
});
prom2.then((b) => {
   console.log(b+" then")
}).catch((er)=>{
   console.log(er+" er")
});

let p2=Promise.all([prom1,prom2]);
p2.then((b)=>{
    console.log(b+" all");
    }).catch(err=>{
     console.log(err+" all")
});


let p3=Promise.race([prom1,prom2]);
p3.then(c=>{
    console.log(c+" race");
    }).catch((err)=>{
     console.log(err+" race")
});

let p4=Promise.reject("i am");
p4.then(c=>{
    console.log(c+" reject");
    }).catch((err)=>{
     console.log(err+" rejected")
});


let p5=Promise.allSettled([prom1,prom2]);
p5.then(d=>{
    console.log(d);
    }).catch(err=>{
     console.log(err)
});
// 

