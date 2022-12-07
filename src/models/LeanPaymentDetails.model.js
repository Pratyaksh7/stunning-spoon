const mongoose = require('mongoose');

const LeanPaymentDetailsSchema = new mongoose.Schema({
    transactionid: {
        type: String,
        index: true
    },
    customerid: {
        type: String,
    },
    status: {
        type: String   
    },
    intentid: {
        type: String
    },
    amount: {
        type: String
    },
    currency: {
        type: String
    },
    banktransactionreference: {
        type: String
    },
    message: {             
        type: String
    },
    eventid: {
        type: String
    },
    timestamp: {
        type: String
    },

})

const LeanPaymentDetails = new mongoose.model('LeanPaymentDetails', LeanPaymentDetailsSchema);
module.exports = LeanPaymentDetails;