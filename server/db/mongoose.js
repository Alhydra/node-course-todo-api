const mongoose = require("mongoose")

mongoose.Promise = global.Promise
const url = "mongodb://localhost:27017/TodoApp" 
mongoose.connect(url)


module.exports = {
    mongoose
}