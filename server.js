// const express = require('express');
// const config = require('./config');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// import express from 'express'
// const config = config();


const express = require("express");
const app = express();

app.use(express.json())

app.use("/hustles", require("./routes/hustleRouter.js"))

app.listen(3000, () => {
    console.log('Listening on port 3000');
});