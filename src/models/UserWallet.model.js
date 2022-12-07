const mongoose = require('mongoose');

const UserWalletSchema = new mongoose.Schema({
    userid: {
        type: String
    },
    balance: {
        type: Number,
        default: 0.00
    },
    loyalitypoints: {
        type: Number,
        default: 0.00
    }
})

const UserWallet = new mongoose.model('UserWallet',UserWalletSchema);
module.exports = UserWallet; 