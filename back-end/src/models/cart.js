const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
    user:{
        type:String
    },
    pizza:{
        type:Array,
        default:[]
    },
    
    
    totalCost:{
        type:Number,
        default:0
    },
    Date:{
        type:Date,
        default:Date.now
    }
})
const Cart=mongoose.model('Cart',cartSchema)
module.exports=Cart