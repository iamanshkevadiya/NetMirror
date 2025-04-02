const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const path = require('path');

const connectDB = require('./config/DB');
const userRouter = require('./router/User.router');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => {
    res.status(202).json({ msg: 'Hello Node JS!' });
});

app.use('/user', userRouter);

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})