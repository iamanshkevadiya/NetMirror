const express = require('express');
require('dotenv').config();
const DATABASE = require('./config/DB');
const app = express();


const PORT = process.env.PORT || 8090;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    DATABASE()
})