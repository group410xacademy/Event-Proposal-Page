require('dotenv').config()
let mongoose = require('mongoose')
const {userSchema} = require('./model/user')
const {vendorSchema} = require('./model/vendor')
const {proposalSchema}=require('./model/proposal')
const {proposalimagesSchema}=require('./model/proposalimages')
// const {appuser} = require('./model/appusers')
mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('conection established with mongodb server')).catch(err=>{
    console.log('error while connection',err)
})
userDB=mongoose.model('user',userSchema)
vendorDB=mongoose.model('vendor',vendorSchema)
proposalDB=mongoose.model('proposal',proposalSchema)
proposalimagesDB=mongoose.model('proposalimagesDB',proposalimagesSchema)
// userimagesDB =mongoose.model('image',appuser)
// vendorDB.deleteMany({}).then(()=>{
// console.log('deletd')
// })
// proposalimagesDB.deleteMany({}).then(()=>{
//     console.log('deletd')
//     })
// proposalDB.deleteMany({}).then(()=>{
//     console.log('deletd')
//     })
// userDB.deleteMany({}).then(()=>{
//     console.log('deletd')
//     })
    
let myimages = new proposalimagesDB ({
    images:[{id:'1',url:'sample.jpg'},{id:2,url:'sample2.jpg'}]
})
const a =myimages.save()

proposalimagesDB.findOneAndUpdate({_id:"64df8bf4efd133282784a55d"},{"images":[{id:2,url:"szmple3.jpg"},{id:3,url:"szmple4.jpg"}]}).then((b)=>console.log(b,'images'))


exports.userDB=userDB
exports.vendorDB=vendorDB
exports.proposalDB=proposalDB
exports.proposalimagesDB=proposalimagesDB