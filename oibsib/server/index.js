const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('iam an endpoint');
});

app.listen(7777, () => {
    console.log('listening on port:7777');
});
