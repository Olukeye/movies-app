const express = require('express');
const db      = require('./db/mongoose')
const authRoute      = require('./routes/auth')




const app = express();

app.use(express.json());




app.use("/api/auth", authRoute)


const port = process.env.PORT || 2021
app.listen(port, () => {
    console.log('server is listening on port ' + port )
})
 