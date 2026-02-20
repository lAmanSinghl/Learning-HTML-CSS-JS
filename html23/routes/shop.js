import { Router } from 'express'
const router= Router()
router.get('/',(req,res)=>{
    res.send('Shop home page')
})

router.get('/about',(req,res)=>{
    res.send('About Shop')
})

router.get('/shoppost/:slug',(req,res)=>{
    res.send(`fetch the Shop post for ${req.params.slug}`)
})
export default router;