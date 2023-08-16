const express=require('express')
const Router=express.Router();
const loginModel=require('../models/login')
const registerModel=require('../models/register')
const bcryptjs=require('bcryptjs');

Router.post('/login',async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password
        console.log(`${email}`)
        const usermail=await registerModel.findOne({email:email})
      
        if(usermail.length<1){
            res.status(200).json({
                msg:"Auth Failed",
              UserData:'',
              status:'error'
            })
        }
        else{
            const matching=await bcryptjs.compare(password,usermail.password)
            if(matching){
                res.status(201).json({
                    msg:"User Login Successfully",
                    UserData:usermail,
                    status:'success'
                })
            }else{
                res.status(200).json({
                  msg:"Auth Failed",
                  UserData:'',
                  status:'error'
                });
               }

        }
        
    } catch (error) {
        res.status(401).send(error)
    }
})

module.exports=Router;


   
   

