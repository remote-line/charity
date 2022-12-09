const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required:true, unique:true}
        //amount:{type:String, required:true}
    }, {timestamps:true})
    module.exports = mongoose.model("client", userSchema)