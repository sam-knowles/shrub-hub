// const express = require('express');
// const config = require('./config');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// import express from 'express'

// const config = config();
const express = require("express");
const app = express();

const shrubs = [
    { name: "weeds", age: 420},
    { name: "clit plant", age: 69},
    { name: "sunflower", age: 80085}
]

app.get("/shrubs", (req, res) => {
    res.send(shrubs);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});