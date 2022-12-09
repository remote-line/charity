const router = require('express').Router()
const User = require('../models/client')
router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            amount: req.body.amount
            
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async(req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set:req.body
        }, {new: true})
        res.status(200).json(updatedUser)
    } catch (err) {
      res.send(500).json(err)  
    }
})
router.delete('/:id',verifyTokenAndAuthorization, async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})
    module.exports = router