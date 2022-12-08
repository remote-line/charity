const router = require('express').Router()
const User = require('../models/client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {authSchema}=require('../validation/uservalidation')

router.post('/clientregister', async(req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const newUser = new User ({
            username: req.body.name,
            email: req.body.amount,
         })
 const result = await authSchema.validateAsync(req.body)
// console.log(result)
         const savedUser = await newUser.save()
          res.json(savedUser)
    } catch (err) {
        res.status(500).json(err)
        }
    })