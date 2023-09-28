const express = require('express')
const User = require('../Schemas/User')
const router = express.Router()
router.post('/',(req,res)=>{
    const {email,password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                return res.send({message:"Login Successfully",user})
            }
            else{
                return res.send({message:"Enter Currect Password"})
            }
        }
        else{
            return res.send({message:"This User is Not Register "})
        }
    })
})

module.exports = router