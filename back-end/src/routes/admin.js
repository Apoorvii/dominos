const express=require('express')
const Router=express.Router();
const loginModel=require('../models/login')
const registerModel=require('../models/register')
const PizzaModel=require('../models/pizza')
const multer=require('multer')

Router.post('/addPizza',async(req,res)=>{
    
   var file=req.file
    const pizza=new PizzaModel({
    pizzaname:req.body.pizzaname,
    pizzasize:req.body.pizzasize,
    price:req.body.price,
    image:__filename
    })
    try {
   const doc=await pizza.save()
   console.log(doc)
   return res.status(201).json(doc);
    
}catch(error){
   return res.status(401).json(error)
}
    
})
Router.delete('deletePizza/:id',(req,res,)=>{
    const id=req.params.id
    PizzaModel.deleteOne({_id:id},(err)=>{
      if(err){
         res.status(401).send(err)
      }
    })
    res.status(201).json({msg:"pizza deleted"})
  

})
module.exports=Router