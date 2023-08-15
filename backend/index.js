require('dotenv').config()
let {userDB,vendorDB,proposalDB,proposalimagesDB} = require('./connector')
const verify=require('./auth/Token')
const personRoute=require('./Routes/personRoute')
const ProposalRoute=require('./Routes/ProposalRoute')
const authorisation=require('./auth/authorisation')
const express =require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/public',express.static('public'))
app.use('/person',personRoute)
app.use('/proposal',verify,authorisation.vendorControls,ProposalRoute)
app.listen(process.env.PORT,()=>{console.log('listening on port'+process.env.PORT)})
app.get('/',(req,res)=>{res.send('welcome')})