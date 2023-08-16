const mongoose=require('mongoose')


const pizzaSchema=mongoose.Schema({
    pizzaname:{
        type:String,
    },
    pizzasize:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    BuyDate:{
        type:Date,
        default:Date.now
    }
})

const Pizza=mongoose.model('Pizza',pizzaSchema)
module.exports=Pizza;