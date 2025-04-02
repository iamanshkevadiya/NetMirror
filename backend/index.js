const express = require('express');
require('dotenv').config();
const DATABASE = require('./config/DB');
const UserRouter = require('./router/User.router');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json());

app.use("/user", UserRouter)

const PORT = process.env.PORT || 8090;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
    DATABASE()
})