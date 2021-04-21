const express = require('express');
const cors = require('cors');
const api = express();

const user = require('./models/user');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config({path: "./config/.env"});
mongoose.connect(
process.env.DB_URI, 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection error: "));
db.once('open', ()=> console.log("MongoDB Connected"));
api.use(cors());
api.use(express.json());
api.use('/user', userRoutes);


api.listen(8000, ()=>console.log("API Listening"));