const express = require('express')
const {userDB} = require('../connector')
const personRoute=express.Router()
const bcrypt = require('bcrypt')
require('dotenv').config()
personRoute.post('/loginuser',async (req,res)=>{
 try{
const confirmation =await userDB.finOne({username:req.body.email})
try{
const result = await bcrypt.compare(req.body.password,confirmation.password)
if(result){
    let token = jwt.sign({...confirmation,exp:Math.floor(Date.now()/1000)+(60*60)},process.env.TOKEN_SECRET)
    res.status(200).send(token)
}
}
catch(err){
   res.status(401).send({error:'password didnt match'}) 
}


 }
 catch(error){
   res.status(404).send({error:'register first to login'})
 }   
})
personRoute.post('/registeruser',async(req,res)=>{
    try{
      const newuser = new userDB({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
      })
        const upload =await newuser.save()
        res.status(200).send(upload)
    }
     catch(err){
        res.status(404).send({error:'error while uploading to data base'})
    }
})
module.exports =personRoute