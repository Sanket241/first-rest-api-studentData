const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Error")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true

    }

});
const Studentmodel = new mongoose.model("Data",studentSchema);
module.exports = Studentmodel;