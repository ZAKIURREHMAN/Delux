const db = require('./db')
db()
const express = require('express')
const cors = require('cors')
const zuser = require('./Schemas/User')
const orderuser = require('./orderf/Userorder')
const app = express()
const port = 4000
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/apirouter',require('./Router/routers'))
app.use('/apilogin',require('./Login/Login'))
app.use('/apiorder',require('./orderf/order'))
app.get('/getdata',async(req,res)=>{
  try{
    const subuser = await zuser.find({})
    res.send({status:"ok",data:subuser})
  }
  catch(err){
    console.log(err)

  }
})
app.get('/getuserorder',async(req,res)=>{
  try{
    const suborderuser = await orderuser.find({})
    res.send({status:'ok',data:suborderuser})
  }
  catch(err){
    console.log(err)
  }
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})