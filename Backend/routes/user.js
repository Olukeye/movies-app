const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User     = require("../models/User");
const jwt = require('jsonwebtoken');
const verify = require("../verification")

// Register user
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY ).toString()
    });
   try {

    const user = await newUser.save();
    res.status(200).json(user)

   } catch(err) {
       res.status(500).json(err);
   }
});

// Get all
router.get('/', verify, async(req, res) => {
    const query = req.query.new;
    if(req.user.isAdmin) {
        try{
            // find all users, and limit the query to 10, else just find all
           const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find(); //"sort({_id:-1})" is to fetch the latest data
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("not allowed")
    }
})

// Login user
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});

        // if is not a user 
        !user && res.status(400).json("Wrong email or password!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        // if login password doesn't match the original password .....
        originalPassword !== req.body.password && res.status(400).json('Wrong email or password!')

        // accessToken
        const token = jwt.sign({id: user.id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, {expiresIn: "7d"} );
        const {password, ...info } = user._doc;  //Hide user password 

        res.status(200).json({...info, token})

    } catch(err) {
        res.status(500).json(err)
    }
})

// Get a Single user
router.get('/user/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a user
router.put('/:id', verify, async(req, res) => {
    
    // if is userId or user is Admin , update.
    if(req.user.id === req.params.id || req.user.isAdmin) {
        // encript password if match
        if(req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try{

            const updateUser = await User.findByIdAndUpdate(req.params.id,
                 { $set: req.body}, {new: true});
            res.status(200).json(updateUser);

        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("Allowed to update account only!")
    }
})

// Delete
router.delete('/:id', verify, async(req, res) => {
    // if is userId or user is Admin , delete.
    if(req.user.id === req.params.id || req.user.isAdmin) {
        try{
           await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("Your account only is allowed to be deleted!")
    }
})

// Get total user of a period / statistic
router.get('/usage', async(req, res) => {
    const day = new Date();
    const year = day.setFullYear(day.setFullYear() - 1 );

    // const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    try{
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router