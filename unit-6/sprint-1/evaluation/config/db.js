const mongoose = require("mongoose")


const mongoDB = 'mongodb://localhost:27017/healthcare'

mongoose.connect(mongoDB, {useNewURLParser: true, useUnifiedTopology : true})
.then(() => console.log("database connected"))
.catch( err => console.log("mongo connection err", err));

module.exports = {mongoose};
