const express = require('express')
const User = require('../Schemas/User')
const { body, validationResult } = require('express-validator')
const router = express.Router()
router.post('/',[
    body('name','Your name must be three characters').isLength({ min:3 }),
    body('email','Please Enter a valid Email').isEmail(),
    body('password','Your Password must be Five characters').isLength({min:5})
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email:email} =req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
           return res.send({message:"This user is already Register"})
        }
        else{
             User.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
            })
            return res.send({message:"Register Successfully "})
        }

    })
})
module.exports = router;
