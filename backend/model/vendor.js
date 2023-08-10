const {Schema}= require('mongoose');
const vendorSchema =new Schema({
    Name:Schema.Types.String,
    Email:Schema.Types.String,
    Contact:Schema.Types.String,
    Password:Schema.Types.String
})
exports.vendorSchema =vendorSchema;