const router = require("express").Router();
const { aggregate } = require("../models/List");
const List  = require("../models/List");
const verify = require("../verification")

// Add Movies List
router.post('/', verify,  async (req, res) => {
   if(req.user.isAdmin) {
    const newList = new List(req.body);
    try {
        const savedList = await newList.save();
        res.status(200).json(savedList)
       } catch(err) {
           res.status(500).json(err);
       }
   } else {
       res.status(403).json("You are not authorized!")
   }
});

// Delete list 
router.delete('/:d', verify, async( req, res ) => {
    if(req.user.isAdmin) {
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List deleted")
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!")
    }
})


// Get 
router.get("/", verify, async( req, res ) => {
    const typeQuery = req.query.type;     //get movie by its type 
    const genreQuery = req.query.genre;  //get movie by its genre
    let list = [];
    try{
        if(typeQuery) {  //if query type, show movie
            if(genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },   //get total of 10 random list of movies 
                    { $match: { type: typeQuery, genre: genreQuery } },    // get genre of movies and type
                ])
            }  else {
                list = await List.aggregate([
                    { $sample: { size: 10 } }, 
                    { $match: { type: typeQuery} }, 
                ])
            }
        } else {
            // fetch random sample with a size of 10
            list = await List.aggregate([{ $sample: {size: 10 }}]);
        }
        res.status(200).json(list)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router