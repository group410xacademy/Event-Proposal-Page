const {Schema, default: mongoose}= require('mongoose');
const proposalSchema =new Schema({
    UUID:Schema.Types.String,
    eventName:Schema.Types.String,
    eventPlace:Schema.Types.String,
    proposalType:Schema.Types.String,
    eventType:Schema.Types.String,
    budget:Schema.Types.Number,
    from:Schema.Types.Date,
    to:Schema.Types.Date,
    description:Schema.Types.String,
    foodPreferences:Schema.Types.String,
    events:Schema.Types.String,
    AUTHOR:{
        type:Schema.Types.ObjectId,
        ref:"vendor"
    }
})
exports.proposalSchema =proposalSchema;