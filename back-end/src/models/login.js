const mongoose=require('mongoose')
const bcryptjs=require('bcryptjs')
const loginSchema=mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true
    }

},{
    collection:'user'
})





const Login=mongoose.model('Login',loginSchema)
module.exports=Login;