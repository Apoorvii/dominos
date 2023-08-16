const express=require('express')
const Router=express.Router();
const PizzaModel=require('../models/pizza')
const cartModel=require('../models/cart');
const { response, json } = require('express');

// Router.get('/getAllPizza',async(req,res,next)=>{
    
//     try{
//         const dbResponse=await PizzaModel.find().exec().then((response)=>{
//             return JSON.parse(JSON.stringify(response))
//         });
//         res['data']=dbResponse;
//         res['message']="Pizza List";
//         res["code"]=201;
//         response.response(res);
//     }
//     catch(error){
//         res.status(401).send(error)
//     }
// })

Router.get('/getallpizza', (req, res, next) => {
    PizzaModel.find({}, (err, pizzas) => {
        if (err) {
            res.status(500).json({ errmsg: err })
        }
        res.status(200).send({ msg: pizzas })
    })
})

// Router.get('/getallpizza',(req,res)=>{
//     PizzaModel.find().then((result)=>{
//         res.status(201).json(result)
//     }).catch((err)=>console.log(err))
// })

Router.post('/addToCart',(req,res,next)=>{

    cartModel.findOne({ user: req.userId }, (error, cart) => {
        if (error) {
            console.log(error)
            res.status(401).send(error)
        }
        else {
            if (!cart) {
                console.log("firsttime");
                var cartitm = new cartModel({
                    user: req.userId,
                    pizza: req.body,
                    totalCost: req.body.price
                });
                cartitm.save((error, cartitem) => {
                    if (error) {
                        console.log(error);
                        res.json({ msg: error })
                    }
                    else {
                        console.log("sucess fully added your first item");
                        res.json({ msg: "success", cart: cartitem })
                    }
                })
            }
            else {
                console.log("secondtime");
                secondtimecart(req, res, cart, req.body, req.userId);
                // res.json({ error: 'second time' })
            }
        }
    })
})
module.exports=Router