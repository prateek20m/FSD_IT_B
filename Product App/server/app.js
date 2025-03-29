const express = require('express')
const app =express()
const port = 3002

const products = [{
    id:101,
    title:"Laptop",
    brand:"HP",
    price:52000,
    quantity: 5
}]

app.get("/products",(req,res)=>{
    
})

//app.use(express.json())

app.listen(port,(err)=>{
    try {
        if(err) throw (err);
     else 
        console.log('Server is running on ${port}')
        
    }
    catch(err){
        console.log("Server error",err.message)
    }
})