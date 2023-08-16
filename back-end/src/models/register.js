const mongoose=require('mongoose')
const bcryptjs=require('bcryptjs')
const registerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        index:{
            unique:true,
        },
        match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    

})

registerSchema.pre('save',async function(){
    if(this.isModified('password')){
        console.log(this.password)
        this.password=await bcryptjs.hash(this.password,10)
        console.log(this.password)

        this.cpassword=undefined;
    }
})

const Register=mongoose.model('Register',registerSchema)
module.exports=Register;