const router = require("express").Router();
const Movie  = require("../models/Movies");
const verify = require("../verification")

// Add Movies 
router.post('/', verify,  async (req, res) => {
   if(req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.status(200).json(savedMovie)
       } catch(err) {
           res.status(500).json(err);
       }
   } else {
       res.status(403).json("You are not authorized!")
   }
});

// Get a Single movie
router.get('/find/:id', verify, async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get Random Movie
router.get('/random', verify, async(req, res) => {
    // get genre of movie
    const type = req.query.type;
    let movie;
        try{
            // if selected movie matches 
            if(type === "series" ) {
                movie = await Movie.aggregate([
                    {$match: { isSeries: true }},
                    {$sample: {size: 1 }},
                ]);
            } else {
                movie = await Movie.aggregate([
                    {$match: { isSeries: false }},
                    {$sample: {size: 1 }},
                ]);
            }
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json(err)
        }
})

// Update a Movie
router.put('/:id', verify, async(req, res) => {
    // if is userId or user is Admin , update.
    if( req.user.isAdmin) {
        try{
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,
                 { $set: req.body}, {new: true});
            res.status(200).json(updatedMovie);

        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not Authorised")
    };
});

// Delete a movie 
router.delete('/:id', verify, async(req, res) => {
    // if is userId or user is Admin , delete.
    if( req.user.isAdmin ) {
        try{
           await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully!");
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("Your account only is allowed to be deleted!")
    }
})

// Get All 
router.get('/', verify, async( req, res ) => {
    if( req.user.isAdmin ) {
        try {
            const movie = await Movie.find();
            res.status(200).json(movie.reverse());  // "reverse" is to get recent movies
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not authorised ")
    }  
})

module.exports = router