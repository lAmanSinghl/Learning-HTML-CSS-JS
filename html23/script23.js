import express from 'express'
import blog from './routes/blog'
import shop from './routes/shop'

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog )
app.use('/shop',shop )

app.get('/', (req, res) => {
  console.log("Its a get request")
  res.send('Hello "/" get World!')
}).post('/', (req, res) => {
  console.log("Its a post request")
  res.send('Hello World welcome to the post world!')
}).put('/', (req, res) => {
  console.log("Its a put request")
  res.send('Hello World welcome to the put world!')
}).get("/index", (req, res) => {
  console.log("Hey Its index")
  res.sendFile('templates/index.html', { root: __dirname })
}).get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})