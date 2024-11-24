const mongoose = require("mongoose")
require('dotenv').config({path:'.env.local'})

const mondbUrl = process.env.mondbUrl;

const connectDb = () => {
    return mongoose.connect(mondbUrl);
}

module.exports = {
    connectDb
}