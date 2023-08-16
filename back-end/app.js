const express=require('express')
const app=express();
const port=process.env.port || 8000;
const path=require('path')
const cors=require('cors')

require('./src/db/conn')
const registerModel=require('./src/models/register')
const loginModel=require('./src/models/login')


// router
const registerRoute=require('./src/routes/register')
const loginRoute=require('./src/routes/login')
const pizza=require('./src/routes/pizza')
const adminAdd=require('./src/routes/admin')
app.use(cors({
    origin:"http://localhost:4200",
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true
}));
//app.use(cors(corsOpt))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(registerRoute)
app.use(loginRoute)
app.use(pizza)
app.use(adminAdd)

app.listen(port,()=>console.log(`server is running at ${port}`))