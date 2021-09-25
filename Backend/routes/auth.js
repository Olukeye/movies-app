// const router = require("express").Router();
// const User = require('../models/User');
// const CryptoJS = require("crypto-js");
// const jwt = require('jsonwebtoken');

// // Register user
// router.post('/register', async (req, res) => {
//     const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY ).toString()
//     });
//    try {

//     const user = await newUser.save();
//     res.status(200).json(user)

//    } catch(err) {
//        res.status(500).json(err);
//    }
// });

// // Login user
// router.post('/login', async (req, res) => {
//     try{
//         const user = await User.findOne({email: req.body.email});

//         // if is not a user 
//         !user && res.status(400).json("Wrong email or password!");

//         const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
//         const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

//         // if login password doesn't match the original password .....
//         originalPassword !== req.body.password && res.status(400).json('Wrong email or password!')

//         // accessToken
//         const token = jwt.sign({id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, {expiresIn: "3d"} );
//         const {password, ...info } = user._doc;  //Hide user password 

//         res.status(200).json({...info, token})

//     } catch(err) {
//         res.status(500).json(err)
//     }
// })



// module.exports = router

