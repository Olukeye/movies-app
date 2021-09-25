const express = require('express');
const db      = require('./db/mongoose')
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

const userRoute  = require('./routes/user');
const movieRoute  = require('./routes/movies');
const ListRoute  = require('./routes/list')


// Load env vars
dotenv.config();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

/** Mount Routers */
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/list", ListRoute);






const port = process.env.PORT || 2021
app.listen(port, () => {
    console.log('server is listening on port ' + port )
})
