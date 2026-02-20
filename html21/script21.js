import fs, { writeFileSync, writeFile, readFile } from "fs"
console.log(fs)
console.log("Starting")
writeFileSync("aman.txt","Aman is a great boy")
writeFile("aman2.txt","Aman is a good boy",()=>{
    console.log("Done")
    readFile("aman2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
console.log("Ending")