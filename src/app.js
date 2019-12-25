const express = require('express');
const morgan = require('morgan');
const sass = require('node-sass-middleware');

const indexRoutes = require('./routes/index');

const app = new express();
app.use(morgan('common'))
    .use('/', indexRoutes)
    .use('/public', express.static(__dirname + '/public'))
    .use(
        sass({
            src: '/sass',
            dest: '/',
            debug: true,
            root: __dirname,
            indentedSyntax: true,
        })
    );

function cleanCSS(style = 'public/css/style.css') {
    fs.stat(style, function (err, stats) {
        var mtime = stats.mtime;
        console.log(mtime);
    });

    fs.stat('sass/public/css/style.sass' + style, function (err, stats) {
        var mtime = stats.mtime;
        console.log(mtime);
    });

}


module.exports = app;