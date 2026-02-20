import fs from "fs/promises"
let a = await fs.readFile("aman.txt")
let b = await fs.appendFile("aman.txt","\nThis is amazing promise")
console.log(a.toString(),b)