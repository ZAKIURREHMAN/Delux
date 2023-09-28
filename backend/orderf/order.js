const express = require('express')
const Userorder = require('../orderf/Userorder') 
const router = express.Router()

router.post('/',(req,res)=>{
    console.log(req.body)
    const user = Userorder(req.body)
    user.save()
    res.send(req.body)
})
module.exports = router