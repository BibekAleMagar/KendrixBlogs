const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const {Blog} = require('./Models/blog.models')
const {router} = require('./Routes/blogRoute')


const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use(router);


app.use('/images',express.static('public/images'))


mongoose.connect(process.env.DB_URL).then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
}).catch(err=>{
    console.log(err)
})