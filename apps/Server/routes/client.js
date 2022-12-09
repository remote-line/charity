const router = require('express').Router()
const User = require('../models/client')

router.post('/register', async(req, res) => {
    try {
         const newUser = new User ({
            username: req.body.name,

          })
        const savedUser = await newUser.save()
          res.json(savedUser)
    } catch (err) {
        res.status(500).json(err)
        }
    })
    module.exports = router