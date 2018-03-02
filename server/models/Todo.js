const mongoose = require("mongoose")


const Todo = mongoose.model("Todo", {
    desc: {
        type: String,
        required: true,
        minLength:1
    },
    finished: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
})


module.exports.Todo = Todo