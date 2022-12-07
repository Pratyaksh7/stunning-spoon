require("dotenv").config();
require("./config/db").connect();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

//const app = express()


app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}));


app.use(cors());

app.use('/uploads', express.static('uploads'));


//---Custom Routes---
app.use('/admin', require('./routes/admin.route'));

//---Global Error Handling ---
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went wrong!"
    });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
})