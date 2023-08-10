require('dotenv').config()
let mongoose = require('mongoose')
const {userSchema} = require('./model/user')
const {vendorSchema} = require('./model/vendor')
mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('conection established with mongodb server')).catch(err=>{
    console.log('error while connection',err)
})
userDB=mongoose.model('user',userSchema)
vendorDB=mongoose.model('vendor',vendorSchema)


exports.userDB=userDB
exports.vendorDB=vendorDB