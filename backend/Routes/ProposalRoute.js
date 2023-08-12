const express = require('express')
const ProposalRoute= express.Router()
const {proposalDB}=require('../connector')
ProposalRoute.post('/createproposal',async(req,res)=>{
const newproposal =new proposalDB({
    eventName:req.body.eventName,
    eventPlace:req.body.eventPlace,
    proposalType:req.body.proposalType,
    eventType:req.body.eventType,
    budget:req.body.budget,
    from:req.body.from,
    to:req.body.to,
    description:req.body.description,
    images:req.body.images,
    foodPreferences:req.body.foodPreferences,
    events:req.body.events  
})
try{
    const uploading =await newproposal.save()
    console.log(uploading)
    res.status(200).send(uploading)
}
catch(e){
    console.log('error while uploading')
}

})
module.exports=ProposalRoute