const express=require('express')
const dotenv=require('dotenv').config()
const cors=require('cors')
const bodyparser=require('body-parser')
const product=require('../src/routes/product')
const db=require('../src/db/db')
const app=express()

app.use(cors({
    options:'http://localhost:5173'
}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(product)
PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})