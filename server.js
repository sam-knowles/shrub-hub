// const express = require('express');
// const config = require('./config');
// const bodyParser = require('body-parser');
// import express from 'express'
// const config = config();


const express = require("express");
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hustlesdb',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// },
() => console.log("Connected to the DB")
)

app.use(express.json())
app.use(morgan('dev'))

app.use("/hustles", require("./routes/hustleRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});