const express =require('express')
const { proposalDB, proposalimagesDB } = require('../connector')
const userproposal =express.Router()
userproposal.get('/allproposal',async (req,res)=>{
    try{
 const images =await proposalimagesDB.find({}).populate("PROPOSALS").populate("AUTHOR")
 res.status(200).send({
   images
}
)
    }
    catch(err){
res.status(500).send({error:"internal server error"})
    }

})
module.exports =userproposal