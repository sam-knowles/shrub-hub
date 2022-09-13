// const express = require('express');
// const config = require('./config');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

import config from './config'
import express from 'express'
const app = express();

app.listen(config.port, () => {
    console.log('Listening on port' + config.port);
});