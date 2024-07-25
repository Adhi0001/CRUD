
// const express=require('express')
// const mongoose=require('mongoose')
// const productRoutes=require('./routers/product.router')
// const controller=require('./controllers/product.controller')
// const app=express()

// app.use(express.json())

// mongoose.connect('mongodb://localhost:27017').then(() =>{

// console.log('connected to mongodb')
// }).catch((error) => {
//    console.log('error connecting to the mongodb',error)
// })

// //routes
// app.use('./api',productRoutes)
// app.listen(3000,() =>{
//     console.log("node app is running on port 3000")
// })



const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routers/product.router');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

// Use the  product routes
app.use('/api', productRoutes);

app.listen(3000, () => {
  console.log('Node app is running on port 3000');
});
