require('dotenv').config()
let mongoose = require('mongoose')
const {userSchema} = require('./model/user')
const {vendorSchema} = require('./model/vendor')
const {proposalSchema}=require('./model/proposal')
const {proposalimagesSchema}=require('./model/proposalimages')
mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('conection established with mongodb server')).catch(err=>{
    console.log('error while connection',err)
})
userDB=mongoose.model('user',userSchema)
vendorDB=mongoose.model('vendor',vendorSchema)
proposalDB=mongoose.model('proposal',proposalSchema)
proposalimagesDB=mongoose.model('proposalimagesDB',proposalimagesSchema)
vendorDB.deleteMany({}).then(()=>{
console.log('deletd')
})
proposalimagesDB.deleteMany({}).then(()=>{
    console.log('deletd')
    })
proposalDB.deleteMany({}).then(()=>{
    console.log('deletd')
    })
userDB.deleteMany({}).then(()=>{
    console.log('deletd')
    })
    


exports.userDB=userDB
exports.vendorDB=vendorDB
exports.proposalDB=proposalDB
exports.proposalimagesDB=proposalimagesDB