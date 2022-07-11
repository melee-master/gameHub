const express = require('express');
const dotenv = require('dotenv');
const products = require('./data/products')
dotenv.config();
const app = express()
const PORT = process.env.PORT || 5500
const connectDB  = require('./config/db')
connectDB();
const colors = require('colors');
app.get('/', (req, res)=>{
    res.send("api is working...");
})
app.get('/api/products', (req, res)=>{
    res.json(products);
})
app.listen(PORT, (req, res)=>{
    console.log(`Server started on port ${PORT}`.yellow.bold);
})
app.get('/api/products/:id', (req, res)=>{
    const product = products.find((p)=> p._id === req.params.id);
    res.json(product);
})