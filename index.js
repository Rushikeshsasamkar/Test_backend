require('dotenv').config()

const express = require('express')
const app = express()   
const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.get('/twitter',(req,res)=>{
    res.send("You are in the twitter portal!")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login page</h1>')
})

app.listen(port,()=>{
    console.log(`App listening port ${[port]}`)
})