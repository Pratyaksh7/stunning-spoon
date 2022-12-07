const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        unique: true
    },
    gender: {
        type: String
    },
    birthdate: {
        type: String
    },
    currency: {
        type: String
    },
    email: {
        type: String,
    },
	password:{
		type: String,
	},
    countrycode: {
        type: String
    },
    mobileno: {
        type: Number
    },
    about: {
        type: String
    },
    nationality: {
        type: String
    },
    profileimage: {
        type: String
    },
    passportimage: {
        type: String
    },
    countryresidence: {
        type: String
    },
    proof_of_residence: {
        type: String
    },
    epayid: {
        type: String,
    },
    isbusinessaccount: {
        type: Number,
        default: 0
    },
    bank_name: {
        type: String
    },
    account_number: {
        type: String
    },
    account_type: {
        type: String
    },
    ifsc_code: {
        type: String
    },
    swift_code: {
        type: String
    },
    registered_date: {
        type: String,
        default: new Date()
    },
    merchant_otp: {
        type: Number
    },
    emailVerification_otp: {
        type: Number
    },
    login_otp: {
        type: Number
    },
    last_login: {
        type: String
    },
    qrimage: {
        type: String
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    Tpin: {
        type: Number
    },
    usertype: { type: String},
    firebaseid: { type: String},
    userprofileimage: { type: String},
    iskycdone: { type: Number, default: 0},
    isprofileupdated: { type: Number, default: 0},
    merchant_type: { type: String},
    merchant_website_link: { type: String},
    userreferalcode: { type: String},
    isreffred: { type: String},
    referedby: { type: String},
    status: {
        type: Number,
        default: 1
    },

},
    {
        timestamps: true
    }
);

const User = new mongoose.model('User', UserSchema);
module.exports = User;