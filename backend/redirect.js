const express = require('express')
const vendorlogin =(req,res,next)=>{
res.redirect("/vendor")
}
exports.vendorlogin=vendorlogin