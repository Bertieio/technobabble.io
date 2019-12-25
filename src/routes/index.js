const router = require('express').Router();
const pug = require('pug');
//const cleanCSS = require('../controller/sass');

router.get('/', function(req, res){
    //let cCSS = cleanCSS('public/css/style.css', './sass/public/css/style.sass');
    //cCSS.then(() =>{
    let template = pug.compileFile('../src/views/index.pug');
    let html = template();
    res.send(html);
    //})
})

module.exports = router;
