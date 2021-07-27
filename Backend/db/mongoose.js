const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost:27017/MovieApp', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(() => console.log("database is connected"))
  .catch((err) => console.log(err))

