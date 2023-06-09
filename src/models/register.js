const mongoose = require("mongoose")

const csmSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
   
})

// now we need collection

const Register = new mongoose.model("Register",csmSchema);
module.exports = Register;

