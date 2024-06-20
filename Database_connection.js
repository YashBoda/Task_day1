const express=require('express')
const mongoose=require('mongoose')
const app=express()
const url="mongodb://127.0.0.1:27017/myDB"

mongoose.connect(url,{ useUnifiedTopology:true , useNewUrlParser:true})

const con=mongoose.connection

con.on('open',()=>{
    console.log("\n\n\nDatabase connection is successfully done")
})

app.listen(3000)
