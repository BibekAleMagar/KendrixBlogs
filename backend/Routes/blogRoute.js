const express = require('express')
const router = express.Router();
const {Blog} = require('../Models/blog.models')
const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination: (req,file, cb) =>{
        cb(null, 'public/images')
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + "_" + Date.now()+ path.extname(file.originalname ))
    }
})

const upload = multer({storage: storage});

router.post('/create-blog',upload.single('image'), async (req,res)=>{
    
    try{
        const data = req.body
        if(req.file){
            data.imgURL = req.file.filename;
        }
        const blog = new Blog(data);
        const response = await blog.save();
        console.log(response);
        res.send("Sucess!")
    }catch(err){
        console.log(err);
        res.status(400).send((`Some thing went wrong! + ${err}`));
    }
});


router.get("/get-all-blogs",async (req,res)=>{
    try{
        const blogs = await Blog.find({});
        res.send(blogs)

    }catch(err){
        console.log(err);
        res.status(400).send("Cannot fetch data")
    }

})


router.get("/blog/:id", async  (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Blog.findById(id);
        console.log(response);
        res.send(response)
    }catch(err){
        console.log(err)
        res.status(400).send("Cannot detch blogs")
    }
});


router.put('/blog/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const response = await Blog.findByIdAndUpdate(id,data,{new: true});
        console.log(response);
        res.send(response);

    }catch(err){
        console.log(err)
        res.status(400).send("CAnnot fetch!");
    }
});


router.delete('/blog/:id', async (req,res)=>{
    try{
        const id = req.params.id;
        const response = await Blog.findByIdAndDelete(id);
        console.log(response);
        res.send(response);
    }catch(err){
        console.log(err);
        res.status(400).send("Cannot delete!")
    }

})





module.exports = {router}