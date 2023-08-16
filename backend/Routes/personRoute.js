const express = require('express')
const {userDB, vendorDB} = require('../connector')
const personRoute=express.Router()
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
require('dotenv').config()
personRoute.post('/loginuser',async (req,res)=>{
 try{
const confirmation =await userDB.findOne({email:req.body.loginid})
if(confirmation!==null){
const result = await bcrypt.compare(req.body.loginpassword,confirmation.password)

if(result){
  let token = jwt.sign({_id:confirmation._id,name:confirmation.name,exp:Math.floor(Date.now()/1000)+(60*60)},process.env.TOKEN_SECRET)

    res.status(200).send(token)
}
else{
  res.status(401).send({error:'password didnt match'}) 
}}
else{
  res.status(200).send({error:'register to login'})
}


 }
 catch(err){
 console.log(err)
 }   
})
personRoute.post('/registeruser',async(req,res)=>{
    try{
      const hash = await bcrypt.hash(req.body.password,10) 
      const newuser = new userDB({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:hash,
        role:'user'
      })
        const upload =await newuser.save()
        res.status(200).send(upload)
    }
     catch(err){
        res.status(404).send({error:'error while uploading to data base'})
    }
})
personRoute.post('/loginvendor',async (req,res)=>{
  try{
 const confirmation =await vendorDB.findOne({email:req.body.loginid})
 if(confirmation!==null){
 const result = await bcrypt.compare(req.body.loginpassword,confirmation.password)
 
 if(result){
  let parceldata = confirmation
  confirmation.exp=Math.floor(Date.now()/1000)+(60*60)
     let token = jwt.sign({_id:confirmation._id,name:confirmation.name,exp:Math.floor(Date.now()/1000)+(60*60)},process.env.TOKEN_SECRET)
     res.status(200).send(token)
 }
 else{
   res.status(401).send({error:'password didnt match'}) 
 }}
 else{
   res.status(401).send({error:'register to login'})
 }
 
 
  }
  catch(err){
  console.log(err)
  }   
 })
personRoute.post('/registervendor',async(req,res)=>{
  try{
    const hash = await bcrypt.hash(req.body.password,10) 
    const newuser = new vendorDB({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      password:hash,
      role:'vendor',
      PROPOSALS:[],
      IMAGES:[],
  
    })
      const upload =await newuser.save()
      res.status(200).send(upload)
  }
   catch(err){
    console.log(err)
      res.status(500).send({error:err})
  }
})
personRoute.post('/validate',async (req,res)=>{
  
  try{
    if(req.body.show=="user"){
     const data =await userDB.findOne({...req.body,show:undefined})
      if(data==null){res.status(200).send({status:true})
    }
  else{
    res.status(200).send({status:false})
  }
    }
  else if(req.body.show=="vendor"){
    const data =await vendorDB.findOne({...req.body,show:undefined})
    if(data==null){res.status(200).send({status:true})
  }
else{
  res.status(200).send({status:false})
}
  }
    
    }
  catch(err){
    console.log(err)
    res.status(401).send({error:'some error'})
  }



})

module.exports =personRoute