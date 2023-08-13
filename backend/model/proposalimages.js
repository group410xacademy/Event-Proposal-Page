const {Schema}= require('mongoose');
const proposalimagesSchema =new Schema({
    uuid:Schema.Types.String,
images:[Schema.Types.String]
})
exports.proposalimagesSchema =proposalimagesSchema;