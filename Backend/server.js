const express = require('express');
const db      = require('./db/mongoose')
const authRoute      = require('./routes/auth')
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();


// Load env vars
dotenv.config();


// Body parser
app.use(express.json());

// Enable cors
app.use(cors());


app.use("/api/auth", authRoute)
/** Mount Routers */
app.use("/api/auth", authRoute)



const port = process.env.PORT || 2021
app.listen(port, () => {
    console.log('server is listening on port ' + port )
})
 