const {Schema}= require('mongoose');
const vendorSchema =new Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    phone:Schema.Types.String,
    password:Schema.Types.String
})
exports.vendorSchema =vendorSchema;