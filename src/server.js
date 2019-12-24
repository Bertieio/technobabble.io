const app = require('./app');

function run() {
    app.listen(3000, function() {
        console.log('DocEngine running on: ' + 3000 + '!');
    });
}

run();
