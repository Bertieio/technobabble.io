const fs = require('fs');
const promise = require('bluebird')

async function cleanCSS(css = './public/css/style.css', sass = './sass/public/css/style.sass'){
    const CSSTime = await new Promise(function (resolve) {
        fs.stat(css, function (err, stats) {
            let mtime = stats.mtime;
            resolve(mtime);
        });
    });
    fs.stat(sass, function (err, stats) {
        let SASSTime = stats.mtime;
        if (SASSTime > CSSTime) {
            fs.unlink(css, function (err) {
                if (err)
                    throw err;
                console.log("delete");
            });
        }
    });
}

module.exports = cleanCSS();