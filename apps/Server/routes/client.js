const router = require('express').Router()
const User = require('../models/client')
const {verifyTokenAndAuthorization,verifyToken}= require('./verifyToken')
router.post('/register', verifyToken, async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            amount: req.body.amount,
            status:req.body.status
        })
         
        const user = await newUser.save()

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:'Client Name already exist '}
   )   }
})
router.post("/search", verifyToken, async (req, res) => {
    try {
        const search = {};
        // @ts-ignore
       search["status"] = req.body.status
      const item = await User.find(search);
   //   const result = item?.filter((rs) => rs?.codes.length > 0);
      res.status(200).json(item);
    } catch (error) {
      Logger.error(error);
      res.status(400).json({ message: error });
    }
  });



router.get('/', verifyToken, async(req, res) => {
    //const query = req.query.new
    try {
   /// console.log(verifyToken)
        const users = await User.find()
       // const users = query ? await User.find().sort({_id:-1}).limits(5) : await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({error: 'this is error'}); 
    }
})
router.get('/:id',verifyToken,  async(req, res) => {
    try {
        //console.log(verifyTokenAndAuthorization)
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({error: 'this is error'}); 
    }
})

router.put('/:id',verifyToken, async(req, res) => {
    try {         
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set:req.body            
         }, {new: true})
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json({error: 'this is error'}); 
    }
})
router.delete('/:id', async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})
    module.exports = router