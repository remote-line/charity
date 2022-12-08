const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//register
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            isAdmin: req.body.isAdmin
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json('wrong credentials')
        const originalPassword = await bcrypt.compare(req.body.password, user.password)
        !originalPassword && res.status(422).json('incorrect password')

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
        console.log(accessToken)
    } catch (err) {
        res.status(500).json(err)
    }
})
 
module.exports = router