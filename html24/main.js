const express = require('express')
const birds = require('./routes/birds')
const app = express()
const port = 3000
const fs=require("fs")




app.use('/birds', birds)
// app.use(express.static("public"))

//Middleware 1
app.use((req,res,next)=>{
    console.log(req.headers)
    req.aman="I am Aman";
    fs.appendFileSync("logs.txt",`${Date.now()} is a  ${req.method}\n`)
    console.log('M!')
    
    // res.send('Hacked by Middleware1')
    next()
})
//Middleware 2
app.use((req,res,next)=>{
    console.log('M2')
    next()
})

//route handlers
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about World!'+req.aman)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

