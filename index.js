require('dotenv').config()

const express = require('express')
const app = express()   
const port = process.env.PORT;
const packageData = {
    
        "name": "demodeploy1",
        "version": "1.0.0",
        "description": "basic app to deploy",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "node index.js"
        },
        "keywords": [
          "node"
        ],
        "author": "Rushikesh sasamkar",
        "license": "ISC",
        "dependencies": {
          "dotenv": "^16.4.5",
          "express": "^4.19.2"
        }
}
      


app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.get('/github',(req,res)=>{
    res.json(packageData);
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