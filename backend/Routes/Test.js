require('dotenv').config()
let mongoose = require('mongoose')
let {proposalimagesDB} =require('../connector')
mongoose.connect(process.env.CONNECTION_STRING,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('conection established with mongodb server')).catch(err=>{
    console.log('error while connection',err)
})
let myimages = new proposalimagesDB ({
    images:[{id:'1',url:'sample.jpg'}]
})