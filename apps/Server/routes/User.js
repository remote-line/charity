const router = require('express').Router()
const Product = require('../models/user')
const multer = require('multer');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {authSchema}=require('../validation/usevalidation')
const upload1=multer({dest:'uploads/'});
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString()+ file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.post("/register", upload.single('productImage'), async(req, res, next) => {
 
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  console.log(req.file);
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    isAdmin: req.body.isAdmin,
    productImage: req.file.path 
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
            request: {
                type: 'GET',
                url: "http://localhost:4000/products/" + result._id
            }
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