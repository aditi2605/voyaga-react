const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT
require('./db/conn');



const app = express();


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})