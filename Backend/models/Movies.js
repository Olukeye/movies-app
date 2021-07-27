const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String},
    desc: {type: String},
    img: {type: String},
    imgTitle: {type: String},
    imgSm: {type: Boolean},
    thriller: { type: String},
    video: {type: String},
    year: {type: String},
    limit: {type: Number},
    genre: {type: Boolean},
    isSeries: {type: Boolean, default: false}
},
   { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
