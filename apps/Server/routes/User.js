const router = require('express').Router()
const Product = require('../models/user')
const multer = require('multer');
const mongoose = require("mongoose");
const fs = require("fs");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {authSchema}=require('../validation/usevalidation')
 

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

 


router.post("/register", upload.single('Image'), async(req, res, next) => {
 
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    isAdmin: req.body.isAdmin,
    image:{
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created product successfully",
        createdProduct: {
            name: result.name,
            price: result.price,
            _id: result._id,
           
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
      
    });
});
/*
router.post('/register', upload.single('productImage'), async (req, res) => {
    try {
      //  console.log(req.body)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            isAdmin: req.body.isAdmin
        })
        const user = await newUser.save()
        const result = await authSchema.validateAsync(req.body)
        
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:'user Name error '})
    }
})*/
 
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await Product.findOne({ email });
            console.log(user);
        if (user && await bcrypt.compare(password,user.password)) {
           
            const accessToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin
                },
                'SK',
                {expiresIn:'24h'}
            )
            const {password, ...others} = user._doc
            res.status(200).json({...others, accessToken}) 
          


         //   res.status(200).json(user);
        }
       else{ res.status(400).send("Invalid Credentials")} }
        
    catch (err) {
        res.status(500).json({error: 'this is error from login'}); 
    }
});
 
module.exports = router