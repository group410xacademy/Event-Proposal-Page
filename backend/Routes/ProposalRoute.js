const express = require('express')
const multer = require('multer')
const uuidv4 = require('uuid-v4')
const DIR ='./public'
const path= require('path')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,DIR);
    },
    filename:(req,file,cb)=>{
        const fileName=file.originalname;
        cb(null,uuidv4()+'.jpg')
    }
})
var upload =multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=="image/png"||file.mimetype=="image/jpg"||file.mimetype == "image/jpeg"){
            cb(null,true);
        }
        else{
            cb(null,false)
            return cb(new Error('only jpg,png,jpeg allowed'))
        }
    }
})
const ProposalRoute= express.Router()

const {proposalDB,proposalimagesDB}=require('../connector')
ProposalRoute.get('/viewimages',(req,res)=>{
    res.sendFile('../')
})
ProposalRoute.get('/getimages',async (req,res)=>{
    try{
    const getimageslist =await proposalimagesDB.find({UUID:req.UUID})
    res.status(200).send(getimageslist)}
    catch(err){
        res.status(401).send({err:'failed to fetch images'})
    }

})
ProposalRoute.post('/uploadimages',upload.array("eventimages",10),async (req,res,next)=>{
    const reqFiles=[]
    const url=req.protocol+'://'+req.get('host')
    for(var i=0;i<req.files.length;i++){
        console.log(typeof(req.files[i].filename),req.files[i].filename)
        reqFiles.push({url:url+'/public/'+req.files[i].filename,id:req.files[i].filename})
    }
    const images =new proposalimagesDB({
         UUID:req.UUID,
         images:reqFiles,
    })
try{
  
  const uploadingimages = await images.save()
  if(uploadingimages.length==0){
    throw new Error('dont leave empty')
  }
  else{
    res.status(200).send({message:'upload successful',data:uploadingimages,body:req.body})
  }  
}
catch(err){
    res.status(401).send(err)
}
})
ProposalRoute.get('/getproposals',async (req,res)=>{
    try{
    const proposaldata = await proposalDB.find({UUID:req.UUID})
   res.status(200).send(proposaldata)
    }
    catch(err){
  res.status(401).send(err)
    }
})
ProposalRoute.post('/createproposal',async(req,res)=>{
  
const newproposal =new proposalDB({
    UUID:req.UUID,
    eventName:req.body.eventName,
    eventPlace:req.body.eventPlace,
    proposalType:req.body.proposalType,
    eventType:req.body.eventType,
    budget:req.body.budget,
    from:req.body.from,
    to:req.body.to,
    description:req.body.description,
    foodPreferences:req.body.foodPreferences,
    events:req.body.events  
})
try{
    const uploading =await newproposal.save()
    console.log(uploading)
    res.status(200).send(uploading)
}
catch(e){
    console.log('error while uploading',req)
}

})
ProposalRoute.put('/updateProposal',async (req,res)=>{
    let updatedmessage =req.body
    const filter = {_id:req.body.id,uuid:req.UUID}
    try{
    const updating = await proposalDB.findOneAndUpdate(filter,updatedmessage)
    if(!updating){
        res.status(401).send({error:'record not found to update'})
    }
    else{
        res.status(200).send({message:updatedmessage})
    }
    }
    catch(err){
        res.status(404).send({error:'error fetching the data'})
    }
})
module.exports=ProposalRoute