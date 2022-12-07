const mongoose = require('mongoose');

const ShuftiProSchema = new mongoose.Schema({
    shuftiproref: {
        type: String
    },
    userid: {
        type: String,
        index: true
    },
    status: {
        type: String
    },
    timedate: {
        type: String        // 0 => full admin access, 1 => Dashboard, 2 => app setting
    },
    
})

const ShuftiPro = new mongoose.model('ShuftiPro', ShuftiProSchema);
module.exports = ShuftiPro;