import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ticketSchema = new Schema({

    issueId :{
        type: String,
        required: true,
        unique:true
    },
    openBy:{
        type: String,  
    },
    openOn:{
        type: String,  
    },
    requestedFor:{
        type: String,  
    },
    description:{
        type: String,  
    },
    priority:{
        type: String,  
    },
    status:{
        type: String,  
    },

});

export default mongoose.model("ticket", ticketSchema);