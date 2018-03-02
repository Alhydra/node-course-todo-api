const mongoose = require("mongoose")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const _ = require("lodash")

const secret = "supersupersupersecret"

const userScema = new mongoose.Schema({
    email: {
        type: String,
        trime: true,
        minLength: 1,
        require: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} is not a valid email"
        }
    },
    password: {
        type: String,
        require: true,
        minLength:6
    },
    tokens: [{
            access:{
                type: String,
                require: true
            },
            token:{
                type: String,
                require: true
            }
        }]
    
})

userScema.methods.toJSON = function(){
    const user = this
    const userObj = user.toObject()

    return _.pick(userObj, ["_id","email"])
}
userScema.methods.generateAuthToken = function(){
    const user = this
    const access = "auth"
    const token = jwt.sign({_id: user._id.toHexString(),access}, secret).toString()

    user.tokens.push({access,token})

    return user.save().then(()=>{
        return token
    })

}

const User = mongoose.model("User", userScema)


module.exports.User = User