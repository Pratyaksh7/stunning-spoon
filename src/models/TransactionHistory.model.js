const mongoose = require('mongoose');

const TransactionHistorySchema = new mongoose.Schema({
    userwalletid: {
        type: String
    },
    transactionid: {
        type: String,
        unique: true
    },
    transactionamount: {
        type: Number   
    },
    transactiondate: {
        type: String
    },
    paymentinitiatedate: {
        type: String
    },
    paymentcompletedate: {
        type: String
    },
    paymentmode: {
        type: String
    },
    paidto: {             // foreign key (Wallet id)
        type: String
    },
    transactiontype: {
        type: String
    },
    transactionstatus: {
        type: String
    },
    isloyalityavailable: {
        type: Number
    },
    loyalityamount: {
        type: Number
    },
    transactioncurrency: {
        type: String
    },
    transactionnote: {
        type: String
    },
    bankrefnumber: {
        type: String,
        default: 0
    },
    currency: {
        type: String
    },
	transactionmethod:{
		type: String
	}
})

const TransactionHistory = new mongoose.model('TransactionHistory', TransactionHistorySchema);
module.exports = TransactionHistory;