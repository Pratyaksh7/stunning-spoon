const mongoose = require('mongoose');

const OrderRefrenceSchema = new mongoose.Schema({
    refno: {
        type: String
    },
    transactionid: {
        type: String,
        index: true
    },
    status: {
        type: String
    }
})

const OrderRefrence = new mongoose.model('OrderRefrence', OrderRefrenceSchema);
module.exports = OrderRefrence;