import express from 'express';
import mongoose from 'mongoose';
import { tinyRoute } from './routes/tinyRoute.js';

// creating server
const tinyApp = new express();
tinyApp.listen('7000', ()=> {
    console.log('server is running ont he port 7000');
})

// jsonparse middleware
tinyApp.use(express.json());

// mongoDB database connection
mongoose.connect('mongodb://localhost:27017/tinyDB');
const tinyDB = mongoose.connection;
tinyDB.on('open', ()=> {
    console.log('Databse connection is successful');
}) 
tinyDB.on('error', ()=> {
    console.log('Something went wrong with datbase')
})

// passing app to the routes
tinyRoute(tinyApp);