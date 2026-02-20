import express from 'express'
const app = express()
const port = 3000
//app.get or app.post or app.put or app.delete(path , handler)
app.use(express.static('public'))
app.get('/blog/:slug', (req, res) => {
  
    console.log(req.params)
    console.log(req.query) 
  res.send(`Hello ${req.params.slug}`)   
})
app.get('/', (req, res) => {
  res.send('get about')
})
// app.get('/contact', (req, res) => {
//   res.send('get contact!')
// })
// app.get('/blog/into-to-js', (req, res) => {
//   res.send('get blog(into-to-js)!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
