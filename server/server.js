const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/outpassDB')
   .then(()=>{
    console.log('cnnected to mongodb');
   }).catch((err)=>{
    console.log('error connecting to mongodb', err);
   })

const studentSchema = new mongoose.schema({
    name:String,
    regNo:String,
    department:String,
    
})
app.get('/',(req,res) => {
    res.send('wecome to outpass management system');
})

const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})