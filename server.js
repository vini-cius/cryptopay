'use strict';

const app = require('./src/config/custom-express.js');

app.listen(3001, () => {
    console.log('Server on: http://localhost:3001/');
});