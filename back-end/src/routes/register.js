const express=require('express')
const Router=express.Router();
const registerModel=require('../models/register')
const bcryptjs=require('bcryptjs');


Router.post('/register',async(req,res)=>{
    try {
        const password=req.body.password;
        const cpassword=req.body.cpassword;

        if(password===cpassword){
            const registerData=new registerModel({
                name:req.body.name,
                email:req.body.email,
                number:req.body.number,
                password:req.body.password,
                cpassword:req.body.cpassword,
                role:'Author'
            })
            const result=await registerData.save();
            res.status(201).json({
                message:"SuccessFully Registered"
            })
        }else{
            res.status(201).send('password not matching')
        }
    } catch (error) {
        res.status(401).send(error)
    }
})


module.exports=Router;