const TransactionHistory = require('../models/TransactionHistory.model');
const User = require('../models/User.model');
const UserWallet = require('../models/UserWallet.model');
const OrderRefrence = require('../models/OrderRefrence.model');
const ShuftiPro = require('../models/ShuftiPro.model');
const LeanPaymentDetails = require('../models/LeanPaymentDetails.model');
const bcrypt = require('bcryptjs');

exports.website_new_Transactions = async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.query.pageNumber) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const result = {};
        const totalPosts = await TransactionHistory.find({
            $and: [
                { paymentmode: "Website" },
                // { paymentinitiatedate: { $gte: Date.parse(startDate), $lt: Date.parse(endDate) } }
            ]
        }).countDocuments().exec();
        let startIndex = pageNumber * limit;
        const endIndex = (pageNumber + 1) * limit;
        result.totalPosts = totalPosts;
        if (startIndex > 0) {
            result.previous = {
                pageNumber: pageNumber - 1,
                limit: limit,
            };
        }
        if (endIndex < (totalPosts)) {
            result.next = {
                pageNumber: pageNumber + 1,
                limit: limit,
            };
        }

        const transactions = await TransactionHistory.find({
            $and: [
                { paymentmode: "Website" },
                // { paymentinitiatedate: { $gte: Date.parse(startDate), $lt: Date.parse(endDate) } }
            ]
        }).sort("-_id")
            .skip(startIndex)
            .limit(limit)
            .exec();

        result.data = [];

        if (transactions.length < 1) {
            return res.status(400).json({ status: 'error', message: 'No transactions found.', transactions: [] })
        } else {
            for (let i = 0; i < transactions.length; i++) {
                const orderReference = await OrderRefrence.findOne({ transactionid: transactions[i]?._id })
                const wallet = await UserWallet.findOne({ _id: transactions[i]?.userwalletid });
                const user = await User.findOne({ _id: wallet?.userid });
                // const merchant = await User.findOne({ _id: transactions[i]?.paidto });
                const shuftiPro = await ShuftiPro.findOne({ userid: user?._id });
                const leanPayment = await LeanPaymentDetails.findOne({ transactionid: transactions[i]?.transactionid })

                result.data[i] = {
                    transaction_id: transactions[i]?._id,
                    email: user?.email ? user?.email : "Not Available",
                    mobileno: user?.mobileno ? user?.mobileno : "Not Available",
                    epay_transaction_id: transactions[i]?.transactionid,
                    shuftyPro_ref_no: shuftiPro?.shuftiproref,
                    shuftyPro_status: shuftiPro?.status,
                    // merchant_name: merchant?.user_name,
                    amount: transactions[i]?.transactionamount,
                    currency: transactions[i]?.transactioncurrency,
                    // transaction_date: transactions[i]?.transactiondate,
                    paymentcompletedate: transactions[i].paymentcompletedate,
                    paymentinitiatedate: transactions[i].paymentinitiatedate,
                    transaction_status: transactions[i]?.transactionstatus,
                    network_ref_no: orderReference?.refno ? orderReference?.refno : "Not Available",
                    lean_ref_no: leanPayment?.intentid ? leanPayment?.intentid : "Not Available"
                }
            }
            return res.status(200).json({ status: 'ok', count: transactions.length, data: result })

        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.createindex = async (req, res, next) => {
    try {
        console.log("hello")

    } catch (error) {
        console.log(error);
        next(error);
    }
}

exports.test = async (req, res, next) => {
    const { password } = req.body;
    try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        return res.json({ encryptedPassword })
    } catch (error) {
        console.log(error);
        next(error);
    }
}