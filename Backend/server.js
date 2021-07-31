const express = require('express');
const db      = require('./db/mongoose')
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();


// const authRoute  = require('./routes/auth')
const userRoute  = require('./routes/user')




// Load env vars
dotenv.config();


// Body parser
app.use(express.json());

// Enable cors
app.use(cors());



/** Mount Routers */
// app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);




const port = process.env.PORT || 2021
app.listen(port, () => {
    console.log('server is listening on port ' + port )
})
 