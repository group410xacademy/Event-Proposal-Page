let express = require('express')
let {vendorDB} = require('../connector') 
let {userDB}= require('../connector') 
const vendorControls= async (req,res,next)=>{
const vendorsearch = await vendorDB.findOne({_id:req.UUID})
    console.log(req)
if(!vendorsearch){
    return res.status(401).send({error:'not found user login first',req:req.query.UUID})
}
else{
    if(vendorsearch.role == "vendor"){
        next();
        return;
    }
    else{
        res.status(401).send({error:'notauthorised',data:vendorsearch})
        return;
    }
}
}
const userControls=async (req,res)=>{
    const usersearch = await userDB.findOne({
        _id:req.body.UUID
    })
    if(!usersearch){
        return res.status(401).send('unable to fetch data please register ')
    }
    else{
        if(usersearch.role == "user"){
            next()
        }
        else{
            res.status(401).send('not authorised')
        }
    }
    }
    exports.userControls=this.userControls
    const authorisation= {
     vendorControls,userControls
    }
    module.exports = authorisation;