const express = require('express');
const products = require('./data/products')
const app = express()

app.get('/', (req, res)=>{
    res.send("api is working...");
})
app.get('/api/products', (req, res)=>{
    res.json(products);
})
app.listen(5500, (req, res)=>{
    console.log("Server started on port 5500");
})
app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p)=> p._id === req.params.id);
    res.json(product);
})