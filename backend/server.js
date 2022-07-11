const express = require('express');
const dotenv = require('dotenv');
const {notFound, errorHandler} = require('./middleware/errorMiddleware')
dotenv.config();
const app = express()
const PORT = process.env.PORT || 5500
const connectDB  = require('./config/db')
const productRoutes = require('./routes/productRoutes');
connectDB();
const colors = require('colors');
app.get('/', (req, res)=>{
    res.send("api is working...");
})
app.use('/api/products', productRoutes);
app.use(notFound)
app.use(errorHandler)
app.listen(PORT, (req, res)=>{
    console.log(`Server started on port ${PORT}`.yellow.bold);
})
