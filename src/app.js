const express = require('express');
const morgan = require('morgan');

const indexRoutes = require('./routes/index');

const app = new express();
app.use(morgan('common'))
    .use('/', indexRoutes);
    
module.exports = app;
