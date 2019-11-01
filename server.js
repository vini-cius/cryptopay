'use strict';

const app = require('./src/config/custom-express.js');

app.listen(3000,function(){
    console.log('Server on: http://localhost:3000/');
});