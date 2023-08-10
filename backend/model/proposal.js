const {Schema}= require('mongoose');
const proposalSchema =new Schema({
    eventName:Schema.Types.String,
    eventPlace:Schema.Types.String,
    proposalType:Schema.Types.String,
    eventType:Schema.Types.String,
    budget:Schema.Types.Number,
    from:Schema.Types.Date,
    to:Schema.Types.Date,
    description:Schema.Types.String,
    images:[Schema.Types.String],
    foodPreferences:Schema.Types.String,
    events:Schema.Types.String  
})
exports.proposalSchema =proposalSchema;