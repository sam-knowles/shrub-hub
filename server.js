// const config = require('./config');
// const bodyParser = require('body-parser');
// import express from 'express'
// const config = config();
require(`dotenv`).config()


const express = require("express");
const morgan = require('morgan')
const mongoose = require('mongoose');
// const cors = require('cors');

const path = require("path");
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


app.use(express.json())
app.use(morgan('dev'))


// app.use(cors(cors));

app.use("/hustles", require("./routes/hustleRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log(`Listening on port + ${process.env.PORT}`);
});