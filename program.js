const express = require('express');
const fs = require('fs');

const app = express();
app.get('/books', (req, res) => {
    const file = process.argv[3];
    fs.readFile(filename, function(e, data) {
        //do something
    })
});
app.listen(process.argv[2]);