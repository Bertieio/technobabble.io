const router = require('express').Router();
const pug = require('pug');


router.get('/', function(req, res){
    let template = pug.compileFile('../src/views/index.pug');
    let html = template();
    res.send(html);
})

module.exports = router;
