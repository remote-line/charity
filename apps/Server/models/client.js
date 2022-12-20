const { boolean } = require('@hapi/joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true, unique:true},
        amount:{type:Number, required:true},
        status:{type:String
      }
    }, {timestamps:true})
    module.exports = mongoose.model("client", userSchema)